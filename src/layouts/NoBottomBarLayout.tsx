import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import theme from "../styles/theme";

const NoBottomBarLayout = () => {
  return (
    <LayoutContainer>
      <TopBarWrapper>topbar</TopBarWrapper>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </LayoutContainer>
  );
};

export default NoBottomBarLayout;

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
  height: 48.8px;
  background-color: ${theme.color.neutral.B20};
  z-index: 999;
`;

const OutletWrapper = styled.section`
  flex: 1;
  width: 100%;
  padding-top: 48.8px;
  box-sizing: border-box;
`;
