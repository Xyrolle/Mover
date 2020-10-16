import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import deepPurple from "@material-ui/core/colors/deepPurple";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[600],
      secondary: purple[300],
    },
    secondary: {
      main: purple[300],
    },
  },
});

export default theme;
