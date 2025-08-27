import styled from "@emotion/styled";
import { bottomAppBarIcons } from "../../../assets/icons";
import theme from "../../../styles/theme";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "src/contexts/AuthContext";

interface TextProps {
  isSelected?: boolean;
}

const NavBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0;
  background-color: ${theme.color.neutral.white};
`;

const NavItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25%;
  cursor: pointer;
`;

const IconWrapper = styled.div<{ isSelected: boolean }>`
  svg {
    color: ${({ isSelected }) =>
      isSelected ? theme.color.primary.P50 : theme.color.neutral.B20};
    transition: color 0.2s ease-in-out;
  }
`;

const TextWrapper = styled.div<TextProps>`
  margin-top: 2px;
  ${({ theme }) => theme.typography["small2-2"]}
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.neutral.B70 : theme.color.neutral.B40}
`;

type TabItem = {
  name: string;
  label: string;
  path: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  relatedPaths?: string[];
};

const TAB_LABELS = {
  MAIN: "홈",
  MY_NFT: "내 음원",
  ADJUSTMENT: "정산관리",
} as const;

const tabItems: TabItem[] = [
  {
    name: "main",
    label: TAB_LABELS.MAIN,
    path: "/main",
    icon: bottomAppBarIcons.main,
    relatedPaths: ["/", ""],
  },
  {
    name: "myNft",
    label: TAB_LABELS.MY_NFT,
    path: "/myNft",
    icon: bottomAppBarIcons.myMusic,
  },
  {
    name: "adjustment",
    label: TAB_LABELS.ADJUSTMENT,
    path: "/adjustment",
    icon: bottomAppBarIcons.wallet,
    relatedPaths: ["/servicing-repayment", "/repayment-received"],
  },
];

const NavItem = ({
  label,
  Icon,
  selected,
  onClick,
}: {
  label: string;
  path: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <NavItemWrapper onClick={onClick}>
      <IconWrapper isSelected={selected}>
        <Icon
          width={20}
          height={20}
          fill={selected ? theme.color.primary.P50 : theme.color.neutral.B20}
        />
      </IconWrapper>
      <TextWrapper isSelected={selected}>{label}</TextWrapper>
    </NavItemWrapper>
  );
};

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { requireAuth } = useAuth();

  // 개선된 탭 선택 로직
  const getCurrentTab = (): string => {
    // 1. 정확히 일치하는 경로 찾기
    const exactMatch = tabItems.find((item) => item.path === location.pathname);
    if (exactMatch) return exactMatch.name;

    // 2. startsWith로 매칭되는 경로 찾기
    const startsWithMatch = tabItems.find((item) =>
      location.pathname.startsWith(item.path)
    );
    if (startsWithMatch) return startsWithMatch.name;

    // 3. relatedPaths에서 매칭되는 경로 찾기
    const relatedMatch = tabItems.find((item) =>
      item.relatedPaths?.includes(location.pathname)
    );
    if (relatedMatch) return relatedMatch.name;

    return "";
  };

  const currentTab = getCurrentTab();

  const handleTabClick = (item: TabItem) => {
    const isOnRelatedPath = tabItems.find((t) =>
      t.relatedPaths?.includes(location.pathname)
    );
    if (isOnRelatedPath && isOnRelatedPath.name === item.name) {
      return;
    }

    if (item.name === "main") {
      navigate(item.path);
    } else {
      requireAuth(() => navigate(item.path));
    }
  };



  return (
    <NavBarContainer>
      {tabItems.map((item) => (
        <NavItem
          key={item.name}
          label={item.label}
          path={item.path}
          Icon={item.icon}
          selected={currentTab === item.name}
          onClick={() => handleTabClick(item)}
        />
      ))}
    </NavBarContainer>
  );
};

export default BottomNavBar;
