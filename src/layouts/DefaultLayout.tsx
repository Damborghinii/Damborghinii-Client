import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import BottomNavBar from "../components/common/bottomNavBar/BottomNavBar";
import theme from "../styles/theme";

const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <TopBarWrapper>topbar</TopBarWrapper>
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
  height: 100vh;
  position: relative;
  align-items: center;
  max-width: 540px;
`;

const TopBarWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 540px;
  height: 48.8px;
  background-color: ${theme.color.neutral.B20};
`;

const OutletWrapper = styled.section`
  display: flex;
  height: auto;
  width: 100%;
  max-width: 540px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.neutral.B00};
  margin-top: 48.8px;
`;

const BottomBarWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 540px;
  height: 65.4px;
  z-index: 10;
`;
