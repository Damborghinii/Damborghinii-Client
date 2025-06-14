import styled from "@emotion/styled";
import { bottomAppBarIcons } from "../../../assets/icons";
import theme from "../../../styles/theme";
import { useLocation, useNavigate } from "react-router-dom";

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
  border-radius: 20px 20px 0 0;
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
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const TAB_LABELS = {
  INVESTMENT: "투자하기",
  MY_NFT: "내 NFT",
  ADJUSTMENT: "정산관리",
} as const;

const tabItems: TabItem[] = [
  {
    name: "",
    label: TAB_LABELS.INVESTMENT,
    path: "/",
    Icon: bottomAppBarIcons.investment_arrow,
  },
  {
    name: "myNft",
    label: TAB_LABELS.MY_NFT,
    path: "/myNft",
    Icon: bottomAppBarIcons.my_nft,
  },

  {
    name: "adjustment",
    label: TAB_LABELS.ADJUSTMENT,
    path: "/adjustment",
    Icon: bottomAppBarIcons.adjustment_management,
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
        <Icon />
      </IconWrapper>
      <TextWrapper isSelected={selected}>{label}</TextWrapper>
    </NavItemWrapper>
  );
};

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 경로와 정확히 일치하는 걸 우선 찾고, 없으면 startsWith 로 fallback
  const currentTab =
    tabItems.find((item) => item.path === location.pathname)?.name ||
    tabItems.find((item) => location.pathname.startsWith(item.path))?.name ||
    "";

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  return (
    <NavBarContainer>
      {tabItems.map((item) => (
        <NavItem
          key={item.name}
          label={item.label}
          path={item.path}
          Icon={item.Icon}
          selected={currentTab === item.name}
          onClick={() => handleTabClick(item.path)}
        />
      ))}
    </NavBarContainer>
  );
};

export default BottomNavBar;
