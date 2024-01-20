import { ThemeProvider } from "@emotion/react";
import { createTheme } from "../../../theme";
import Layout from "./Layout";

function Dashboard() {
  const theme = createTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <h1>Hello world, this is the dashboard of NECC</h1>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default Dashboard;
