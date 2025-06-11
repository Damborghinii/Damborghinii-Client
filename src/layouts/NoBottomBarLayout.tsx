import { Outlet, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { SubTopBar } from "@components/common/topBar/SubTopBar";
import { ConfirmButtonProvider } from "src/contexts/ConfirmButtonContext";

const NoBottomBarLayout = () => {
  const location = useLocation();
  const isRegisterRoute = location.pathname.startsWith("/nft/register");
  const isImageCropPage = location.pathname === "/nft/image-crop";
  const title = isRegisterRoute ? "NFT 등록" : "";
  const isConfirmButton = isImageCropPage;

  return (
    <ConfirmButtonProvider>
      <LayoutContainer>
        <TopBarWrapper>
          <SubTopBar title={title} isConfirmButton={isConfirmButton} />
        </TopBarWrapper>
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </LayoutContainer>
    </ConfirmButtonProvider>
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
  background-color: ${theme.color.neutral.white};
  z-index: 999;
`;

const OutletWrapper = styled.section`
  flex: 1;
  width: 100%;
  padding-top: 48.8px;
  box-sizing: border-box;
`;
