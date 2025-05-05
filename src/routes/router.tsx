import { createBrowserRouter } from "react-router-dom";

// layouts
import DefaultLayout from "../layouts/DefaultLayout";

// pages
import { MainPage } from "../pages/main/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [{ path: "", element: <MainPage /> }],
  },
]);
export default router;
