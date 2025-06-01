import { ThemeProvider, Global } from "@emotion/react";
import { RouterProvider } from "react-router-dom";
import globalStyle from "./styles/global";
import theme from "./styles/theme";
import router from "./routes/router";
import ModalProvider from "./components/common/modal/ModalProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <RouterProvider router={router} />
      <ModalProvider />
    </ThemeProvider>
  );
};

export default App;
