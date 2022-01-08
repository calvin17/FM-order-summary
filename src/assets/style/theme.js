import patternBackground from "../images/pattern-background-desktop.svg";
import patternMobileBackground from "../images/pattern-background-mobile.svg";

const font = "'Red Hat Display', sans-serif";

const muiTheme = {
  typography: {
    fontFamily: font,
    h3: {
      fontWeight: 900,
    },
    h5: {
      fontWeight: 900,
    },
    h6: {
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: "#e0e8ff",
      contrastText: "#1f2f56",
      light: "#f5f7ff",
      dark: "#7d7bee",
    },
    secondary: {
      main: "#3829e0",
      content: "#7280a7",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundAttachment: "fixed",
          backgroundPosition: "center top",
          backgroundColor: "#e0e8ff",
          backgroundImage: `url(${patternBackground})`,
          "@media (max-width: 480px)": {
            backgroundImage: `url(${patternMobileBackground})`,
          },
        },
      },
    },
  },
};

export { muiTheme };
