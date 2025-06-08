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
      { path: "nft/register/basic", element: <RegisterNftPage1 /> },
      { path: "nft/register/music-basic", element: <RegisterNftPage2 /> },
      { path: "nft/register/music-extra", element: <RegisterNftPage3 /> },
      { path: "nft/register/image-upload", element: <RegisterNftPage4 /> },
      { path: "nft/register/image-crop", element: <ImageCropPage /> },
    ],
  },
]);
export default router;
