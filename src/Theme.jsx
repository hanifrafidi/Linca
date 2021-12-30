import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#57d071',
    },
    secondary: {
      main: '#57ebde',
    },
    warning: {
      main: '#c62828',
    },
  },
});

export default Theme