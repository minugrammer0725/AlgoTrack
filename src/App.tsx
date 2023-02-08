import { FC, ReactElement } from "react";

import { ThemeProvider, CssBaseline} from "@mui/material";
import { customTheme } from './styles/Theme';

const App: FC = (): ReactElement => {

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <h1>Hello App</h1>
    </ThemeProvider>
  )
}

export default App;