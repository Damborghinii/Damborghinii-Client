import { ThemeProvider, Global } from "@emotion/react";
import { RouterProvider } from "react-router-dom";
import globalStyle from "./styles/global";
import theme from "./styles/theme";
import router from "./routes/router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
