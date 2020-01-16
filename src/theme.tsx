import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import teal from '@material-ui/core/colors/teal';
import orange from '@material-ui/core/colors/orange';
import { createMuiTheme } from '@material-ui/core/styles';


// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: orange,
    background: {
      default: teal[50],
    },
  },
});

// https://material-ui.com/customization/color/

export default theme;
