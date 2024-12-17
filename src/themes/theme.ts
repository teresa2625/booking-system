import { createTheme } from "@mui/material";

const Theme = createTheme({
    palette: {
      primary: {
        main: '#EBE3D5',
        light: '#F3EEEA',
        dark: '#776B5D',
        contrastText: '#776B5D'
      },
      secondary: {
        main: '#B0A695',
        // light: '#F5EBFF',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#776B5D',
      },
      background: {
        default: '#F3EEEA',
      },
    },
  });

  export default Theme;