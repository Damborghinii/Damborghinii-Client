import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import BottomNavBar from "../components/common/bottomNavBar/BottomNavBar";
import theme from "../styles/theme";
import { TopBar } from "../components/common/topBar/TopBar";
import { useEffect } from "react";

const DefaultLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.pathname === "/" && !!!localStorage.getItem("accessToken")) {
      navigate("/login");
    }
  }, [location, localStorage.getItem("accessToken")]);

  if (location.pathname === "main" || "myNft" || "contract" || "adjustment") {
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
  } else if (
    location.pathname === "servicing-repayment" ||
    "repayment-received"
  ) {
    return (
      <LayoutContainer>
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
        <BottomBarWrapper>
          <BottomNavBar />
        </BottomBarWrapper>
      </LayoutContainer>
    );
  }
  return <Outlet />;
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
