import { createBrowserRouter } from "react-router-dom";

// layouts
import DefaultLayout from "../layouts/DefaultLayout";
import NoBottomBarLayout from "../layouts/NoBottomBarLayout";

// pages
import { MainPage } from "../pages/main/MainPage";
import InvestmentPage from "../pages/investment/InvestmentPage";
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
import LoginPage from "../pages/login/LoginPage";
import SignUpPage1 from "../pages/signUp/SignUpPage1";
import SignUpPage2 from "@pages/signUp/SignUpPage2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "investment", element: <InvestmentPage /> },
      { path: "myNft", element: <MyNftPage /> },
      { path: "contract", element: <ContractPage /> },
      { path: "adjustment", element: <AdjustmentPage /> },
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
      { path: "nft/register/loading", element: <RegisterLoadingPage /> },
      { path: "nft/register/confirm", element: <RegisterNftConfirmPage /> },
      { path: "nft/image-crop", element: <ImageCropPage /> },

      //회원가입
      { path: "signup/basic", element: <SignUpPage1 /> },
      { path: "signup/extra", element: <SignUpPage2 /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
export default router;
