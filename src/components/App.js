import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import OrderSummaryCard from "./OrderSummaryCard";
import { muiTheme } from "../assets/style/theme";

const theme = createTheme(muiTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item sm={6} md={12}>
          <OrderSummaryCard />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
