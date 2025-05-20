import { createBrowserRouter } from "react-router-dom";

// layouts
import DefaultLayout from "../layouts/DefaultLayout";

// pages
import { MainPage } from "../pages/main/MainPage";
import InvestmentPage from "../pages/investment/InvestmentPage";
import MyNftPage from "../pages/myNft/MyNftPage";
import ContractPage from "../pages/contract/ContractPage";
import AdjustmentPage from "../pages/adjustment/AdjustmentPage";

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
]);
export default router;
