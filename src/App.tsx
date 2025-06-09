import { ThemeProvider, Global } from "@emotion/react";
import { RouterProvider } from "react-router-dom";
import globalStyle from "./styles/global";
import theme from "./styles/theme";
import router from "./routes/router";
import { NftFormProvider } from "./contexts/NftFormContext";
import ModalProvider from "./components/common/modal/ModalProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <NftFormProvider>
        <RouterProvider router={router} />
      </NftFormProvider>
      <ModalProvider />
    </ThemeProvider>
  );
};

export default App;
