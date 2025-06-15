import { createBrowserRouter } from "react-router-dom";

// layouts
import DefaultLayout from "../layouts/DefaultLayout";
import NoBottomBarLayout from "../layouts/NoBottomBarLayout";

// pages
import { MainPage } from "../pages/main/MainPage";
import MyNftPage from "../pages/myNft/MyNftPage";
import ContractPage from "../pages/contract/ContractPage";

// NFT
import RegisterNftPage1 from "../pages/registerNft/RegisterNftPage1";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "myNft", element: <MyNftPage /> },
      { path: "contract", element: <ContractPage /> },
      { path: "adjustment", element: <Adjustment /> },
    ],
  },
  {
    path: "/",
    element: <NoBottomBarLayout />,
    children: [
      //NFT 등록
      { path: "nft/register/basic", element: <RegisterNftPage1 /> },
      { path: "nft/register/music-basic", element: <RegisterNftPage2 /> },
      { path: "nft/register/music-extra", element: <RegisterNftPage3 /> },
      { path: "nft/register/image-upload", element: <RegisterNftPage4 /> },
      {
        path: "nft/register/evaluate-loading",
        element: <EvaluateLoadingPage />,
      },
      { path: "nft/register/confirm", element: <RegisterNftConfirmPage /> },
      { path: "nft/image-crop", element: <ImageCropPage /> },
      {
        path: "nft/register/register-loading",
        element: <RegisterLoadingPage />,
      },

      //회원가입
      { path: "signup/basic", element: <SignUpPage1 /> },
      { path: "signup/extra", element: <SignUpPage2 /> },
      { path: "signup/nickname", element: <SignUpPage3 /> },
      { path: "signup/complete", element: <SignUpPage4 /> },

      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/investment/:investmentId",
        element: <InvestmentInfo />,
      },
      {
        path: "/investment-input/:investmentId",
        element: (
          <InvestmentInfoInput
            minimumLoanAmount={1000000}
            maximumLoanAmount={50000000}
            shareCalculationRatio={5}
            interestCalculationRatio={2.5}
          />
        ),
      },
      {
        path: "loan-apply/:loanId",
        element: <LoanApply />,
      },
      {
        path: "loan-info-input/:loanId",
        element: <LoanInfoInput />,
      },
      {
        path: "loan-confirm/:loanId",
        element: <LoanConfirm />,
      },
      {
        path: "repayment-received",
        element: <AdjustmentReceived />,
      },
      {
        path: "servicing-repayment",
        element: <GivingAdjustment />,
      },
    ],
  },
]);
export default router;
