import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import BottomNavBar from "../components/common/bottomNavBar/BottomNavBar";

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
`;

const TopBarWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 540px;
  height: 48.8px;
  z-index: 10;
`;

const OutletWrapper = styled.section`
  display: flex;
  height: auto;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.primary.P20};
`;

const BottomBarWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 540px;
  height: 65.4px;
  z-index: 10;
`;
