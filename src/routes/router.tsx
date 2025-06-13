import { createBrowserRouter } from "react-router-dom";

// layouts
import DefaultLayout from "../layouts/DefaultLayout";
import NoBottomBarLayout from "../layouts/NoBottomBarLayout";

// pages
import { MainPage } from "../pages/main/MainPage";
import MyNftPage from "../pages/myNft/MyNftPage";
import ContractPage from "../pages/contract/ContractPage";
import AdjustmentPage from "../pages/adjustment/AdjustmentPage";
import RegisterNftPage1 from "../pages/registerNft/RegisterNftPage1";
import RegisterNftPage2 from "../pages/registerNft/RegisterNftPage2";
import RegisterNftPage3 from "../pages/registerNft/RegisterNftPage3";
import RegisterNftPage4 from "../pages/registerNft/RegisterNftPage4";
import ImageCropPage from "../pages/registerNft/ImageCropPage";
import RegisterLoadingPage from "../pages/registerNft/RegisterLoadingPage";
import RegisterNftConfirmPage from "../pages/registerNft/RegisterNftConfirmPage";
import { InvestmentInfo } from "@pages/invesetment/InvestmentInfo";
import { InvestmentInfoInput } from "@pages/invesetment/InvestmentInfoInput";
import { LoanApply } from "@pages/myNft/pages/LoanApply";
import { LoanInfoInput } from "@pages/myNft/pages/LoanInfoInput";
import { LoanConfirm } from "@pages/myNft/pages/LoanConfirm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "myNft", element: <MyNftPage /> },
      { path: "contract", element: <ContractPage /> },
      { path: "adjustment", element: <AdjustmentPage /> },
    ],
  },
  {
    path: "/",
    element: <NoBottomBarLayout />,
    children: [
      { path: "nft/register/basic", element: <RegisterNftPage1 /> },
      { path: "nft/register/music-basic", element: <RegisterNftPage2 /> },
      { path: "nft/register/music-extra", element: <RegisterNftPage3 /> },
      { path: "nft/register/image-upload", element: <RegisterNftPage4 /> },
      { path: "nft/register/loading", element: <RegisterLoadingPage /> },
      { path: "nft/register/confirm", element: <RegisterNftConfirmPage /> },
      { path: "nft/image-crop", element: <ImageCropPage /> },
    ],
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
]);
export default router;
