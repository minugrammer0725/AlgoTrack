import { FC, ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, CssBaseline} from "@mui/material";
import { customTheme } from './styles/Theme';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { rootContext } from "./context/root.context";

import ComposeContext from "./context/Compose.context";
import Dashboard from './pages/dashboard/Dashboard'

// query client
const queryClient = new QueryClient();

const App: FC = (): ReactElement => {

  return (
    <QueryClientProvider client={queryClient}>
       <ComposeContext components={rootContext}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <Dashboard />
        </ThemeProvider>
      </ComposeContext>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
    
  )
}

export default App;