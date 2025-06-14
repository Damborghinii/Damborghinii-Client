import { ThemeProvider, Global } from "@emotion/react";
import { RouterProvider } from "react-router-dom";
import globalStyle from "./styles/global";
import theme from "./styles/theme";
import router from "./routes/router";
import { NftFormProvider } from "./contexts/NftFormContext";
import ModalProvider from "./components/common/modal/ModalProvider";
import { SignUpFormProvider } from "./contexts/SignUpFormContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <SignUpFormProvider>
          <NftFormProvider>
            <RouterProvider router={router} />
          </NftFormProvider>
          <ModalProvider />
        </SignUpFormProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
