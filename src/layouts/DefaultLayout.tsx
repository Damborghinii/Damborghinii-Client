import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import BottomNavBar from "../components/common/bottomNavBar/BottomNavBar";
import theme from "../styles/theme";
import { TopBar } from "../components/common/topBar/TopBar";

const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <TopBarWrapper>
        <TopBar />
      </TopBarWrapper>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <BottomBarWrapper>
        <BottomNavBar />
      </BottomBarWrapper>
    </LayoutContainer>
  );
};

export default DefaultLayout;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  max-width: 540px;
  width: 100%;
  background-color: ${theme.color.neutral.white};
`;

const TopBarWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 540px;
  z-index: 999;
  background-color: ${theme.color.neutral.white};
`;

const OutletWrapper = styled.section`
  flex: 1;
  width: 100%;
  padding-top: 3.5rem;
  box-sizing: border-box;
`;

const BottomBarWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 540px;
  height: 65px;
  z-index: 10;
`;
