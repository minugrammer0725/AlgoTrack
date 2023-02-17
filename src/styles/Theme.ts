import { createTheme, ThemeOptions } from '@mui/material';

export const customTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: 'rgba(194, 105, 39,.80)',
      main: 'rgba(194, 105, 39,.65)',
      dark: 'rgba(194, 105, 39,.28)'
    },
    background: {
      paper: '#c26927',
      default: '#30110d',
    }
  },

})

