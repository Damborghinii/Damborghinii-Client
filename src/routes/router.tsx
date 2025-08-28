import { createBrowserRouter } from "react-router-dom";

// layouts
import DefaultLayout from "../layouts/DefaultLayout";
import NoBottomBarLayout from "../layouts/NoBottomBarLayout";
import RootWrapper from "../layouts/RootWrapper";

// pages
import { MainPage } from "../pages/main/MainPage";
import MyNftPage from "../pages/myNft/MyNftPage";
import ContractPage from "../pages/contract/ContractPage";

// NFT
// import RegisterNftPage1 from "../pages/registerNft/RegisterNftPage1";
import RegisterNftPage2 from "../pages/registerNft/RegisterNftPage2";
import RegisterNftPage3 from "../pages/registerNft/RegisterNftPage3";
import RegisterNftPage4 from "../pages/registerNft/RegisterNftPage4";
import ImageCropPage from "../pages/registerNft/ImageCropPage";
import EvaluateLoadingPage from "../pages/registerNft/EvaluateLoadingPage";
import RegisterNftConfirmPage from "../pages/registerNft/RegisterNftConfirmPage";

// login
import LoginPage from "../pages/login/LoginPage";

// sign up
import SignUpPage1 from "../pages/signUp/SignUpPage1";
import SignUpPage2 from "@pages/signUp/SignUpPage2";
import SignUpPage3 from "@pages/signUp/SignUpPage3";
import SignUpPage4 from "@pages/signUp/SignUpPage4";

import { InvestmentInfo } from "@pages/invesetment/InvestmentInfo";
import { InvestmentInfoInput } from "@pages/invesetment/InvestmentInfoInput";
import { LoanApply } from "@pages/myNft/pages/LoanApply";
import { LoanInfoInput } from "@pages/myNft/pages/LoanInfoInput";
import { LoanConfirm } from "@pages/myNft/pages/LoanConfirm";
import Adjustment from "../pages/adjustment/containers/Adjustment";
import { AdjustmentReceived } from "@pages/adjustment/containers/AdjustmentReceived";
import { GivingAdjustment } from "@pages/adjustment/containers/AdjustmentGiving";
import RegisterLoadingPage from "@pages/registerNft/RegisterLoadingPage";
import NftDetailPage from "@pages/myNft/pages/NftDetailPage";
import MyNftDetailPage from "@pages/myNft/MyNftDetailPage";
import MenuPage from "@pages/menu/MenuPage";
import MyNftContract from "@pages/myNft/pages/MyNftContract";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootWrapper />,
    children: [
      {
        path: "",
        element: <DefaultLayout />,
        children: [
          { index: true, element: <MainPage /> },
          { path: "main", element: <MainPage /> },
          { path: "myNft", element: <MyNftPage /> },
          { path: "contract", element: <ContractPage /> },
          { path: "adjustment", element: <Adjustment /> },
        ],
      },

      {
        path: "",
        element: <NoBottomBarLayout />,
        children: [
          // NFT 등록
          { path: "nft/register/music-basic", element: <RegisterNftPage2 /> },
          { path: "nft/register/music-extra", element: <RegisterNftPage3 /> },
          { path: "nft/register/image-upload", element: <RegisterNftPage4 /> },
          {
            path: "nft/register/evaluate-loading",
            element: <EvaluateLoadingPage />,
          },
          { path: "nft/register/confirm", element: <RegisterNftConfirmPage /> },
          {
            path: "nft/register/register-loading",
            element: <RegisterLoadingPage />,
          },
          { path: "nft/image-crop", element: <ImageCropPage /> },

          // 메뉴
          { path: "menu", element: <MenuPage /> },

          // 로그인/회원가입
          { path: "login", element: <LoginPage /> },
          { path: "signup/basic", element: <SignUpPage1 /> },
          { path: "signup/extra", element: <SignUpPage2 /> },
          { path: "signup/nickname", element: <SignUpPage3 /> },
          { path: "signup/complete", element: <SignUpPage4 /> },

          // 투자/대출
          { path: "investment/:investmentId", element: <InvestmentInfo /> },
          {
            path: "investment-input/:investmentId",
            element: <InvestmentInfoInput />,
          },
          { path: "loan-apply/:loanId/:contractId", element: <LoanApply /> },
          {
            path: "loan-info-input/:copyrightId/:contractId",
            element: <LoanInfoInput />,
          },
          {
            path: "loan-confirm/:copyrightId/:contractId",
            element: <LoanConfirm />,
          },
          {
            path: "myNft/loan-contract/:loanId/:contractId",
            element: <MyNftContract />,
          },
          {
            path: "loan-agreement/:copyrightId/:contractId",
            element: <MyNftContract />,
          },

          // 정산 상세
          { path: "repayment-received", element: <AdjustmentReceived /> },
          { path: "servicing-repayment", element: <GivingAdjustment /> },

          // NFT 상세
          { path: "nft/detail/:nftId", element: <NftDetailPage /> },
          { path: "myNft/detail/:copyrightId", element: <MyNftDetailPage /> },
        ],
      },
    ],
  },
]);

export default router;
