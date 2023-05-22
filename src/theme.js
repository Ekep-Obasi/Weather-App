import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    darkBgPrimary: "#100E1D",
    darkBgSecondary: "#1E213A",
    lightBg: "",
    lightSecondary: "",
    lightTxtPrimary: "#E7E7EB",
    lightTxtSecondary: "#A09FB1",
  },
  fontFamily: ["Roboto"],
  fontSizes: {
    xsmall: "",
    small: "",
    medium: "",
    large: "",
    xlarge: "",
  },
  fontWeights: {
    light: 100,
    normal: 300,
    bold: 500,
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
