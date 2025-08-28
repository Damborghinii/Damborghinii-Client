import { Outlet, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { SubTopBar } from "@components/common/topBar/SubTopBar";
import { ConfirmButtonProvider } from "src/contexts/ConfirmButtonContext";
import { useEffect } from "react";

const NoBottomBarLayout = () => {
  const location = useLocation();
  const isRegisterRoute = location.pathname.startsWith("/nft/register");
  const isImageCropPage = location.pathname === "/nft/image-crop";
  const isSignupRoute = location.pathname.startsWith("/signup");
  const isInvestmentRoute = location.pathname.startsWith("/investment");
  const isRepayment = location.pathname.startsWith("/repayment");
  const isGivingCase = location.pathname.startsWith("/servicing");
  const isLoanApply = location.pathname.startsWith("/loan-apply");
  const isLoanInput = location.pathname.startsWith("/loan-info-input");
  const isLoanConfirm = location.pathname.startsWith("/loan-confirm");
  const isNftDetail = location.pathname.startsWith("/nft/detail/");
  const isMenu = location.pathname.startsWith("/menu");
  const isLogin = location.pathname.startsWith("/login");
  const isMyNftDetail = location.pathname.startsWith("/myNft/detail");

  const title = isRegisterRoute
    ? "NFT 등록"
    : isSignupRoute
    ? "회원가입"
    : isInvestmentRoute
    ? "투자 진행건"
    : isRepayment
    ? "내가 상환받아요"
    : isGivingCase
    ? "내가 상환해요"
    : isLoanApply
    ? "대출신청"
    : isLoanInput
    ? "대출 신청"
    : isLoanConfirm
    ? "정보 입력"
    : isNftDetail
    ? "등록된 NFT"
    : isMenu
    ? "더보기"
    : isLogin
    ? "로그인"
    : isMyNftDetail
    ? "내 음원"
    : "";
  const isConfirmButton = isImageCropPage;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
  background-color: ${theme.color.neutral.white};
  z-index: 999;
`;

const OutletWrapper = styled.section`
  flex: 1;
  width: 100%;
  padding-top: 3.5rem;
  box-sizing: border-box;
  overflow-y: auto;
`;
