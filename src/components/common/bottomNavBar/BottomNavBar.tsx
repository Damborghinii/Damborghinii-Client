import styled from "@emotion/styled";
import { bottomAppBarIcons } from "../../../assets/icons";
import theme from "../../../styles/theme";
import { useLocation, useNavigate } from "react-router-dom";

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

const TextWrapper = styled.div`
  margin-top: 2px;
  font-size: ${theme.typography["small2-2"].fontSize};
  font-weight: ${theme.typography["small2-2"].fontWeight};
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
  CONTRACT: "대출계약",
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
    name: "contract",
    label: TAB_LABELS.CONTRACT,
    path: "/contract",
    Icon: bottomAppBarIcons.contract,
  },
  {
    name: "adjustment",
    label: TAB_LABELS.ADJUSTMENT,
    path: "/adjustment",
    Icon: bottomAppBarIcons.adjustment_management,
  },
];

const NavItem = ({
  name,
  label,
  path,
  Icon,
  selected,
  onClick,
}: {
  name: string;
  label: string;
  path: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  selected: boolean;
  onClick: (name: string, path: string) => void;
}) => (
  <NavItemWrapper onClick={() => onClick(name, path)}>
    <IconWrapper isSelected={selected}>
      <Icon />
    </IconWrapper>
    <TextWrapper>{label}</TextWrapper>
  </NavItemWrapper>
);

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentTab =
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
          name={item.name}
          label={item.label}
          path={item.path}
          Icon={item.Icon}
          selected={currentTab === item.name}
          onClick={handleTabClick}
        />
      ))}
    </NavBarContainer>
  );
};

export default BottomNavBar;
