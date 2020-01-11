import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
import { createMuiTheme } from '@material-ui/core/styles';


// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: green[300],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: green[100],
    },
  },
});

// https://material-ui.com/customization/color/

export default theme;
