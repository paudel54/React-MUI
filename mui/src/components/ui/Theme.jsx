import { createTheme } from "@mui/material/styles";

const arcBlue = "#40bf80";
const arcOrange = "#c653c6";

const theme = createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
    typography: {
      h3: {
        fontWeight: 300,
      },
    },
  },
});

export default theme;
