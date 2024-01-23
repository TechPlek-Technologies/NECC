import React from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "../../../theme";
import Layout from "../layout/Layout";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { InvestorsInnerTab } from "../sections/InvestorsTab/investors-tab-inner";
import { Link } from "react-router-dom";

function InvestorsTab() {
  const theme = createTheme();
  const tabs = [
    { route: '/admin/corporate-information', name: 'Corporate Information' },
    { route: '/admin/newspaper-publication', name: 'Newspaper Publication' },
    { route: '/admin/news-events', name: 'News Events' },
    { route: '/admin/financials', name: 'Financials' },
    { route: '/admin/annual-report', name: 'Annual Report & Notice Of AGM' },
    { route: '/admin/quarterly-compliances', name: 'Quarterly Compliances' },
    { route: '/admin/code-of-conduct', name: 'Code Of Conduct' },
    { route: '/admin/csr', name: 'CSR' },
    { route: '/admin/listing-information', name: 'Listing Information' },
    { route: '/admin/corporate-governance', name: 'Corporate Governance' },
    { route: '/admin/right-issues', name: 'Right Issues' },
    // Add more tabs as needed
  ];
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                py: 8,
              }}
            >
              <Container maxWidth="lg">
                <Stack spacing={4}>
                  <div>
                    <Typography variant="h4">Investors Section</Typography>
                  </div>
                  <div>
                  <Grid container spacing={3}>
      {tabs.map((tab, index) => (
        <Grid key={index} xs={12} sm={6} lg={3} style={{ margin: "4px 0" }}>
          <Link to={tab.route} style={{ textDecoration: "none", color: "inherit" }}>
            <InvestorsInnerTab
              sx={{
                height: "100%",
                boxShadow: "0 7px 14px rgba(0, 0, 0, 0.3)",
                cursor: "pointer",
                transition: "box-shadow 0.3s",
                "&:hover": {
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
                },
                margin: "4px", // Adjust the margin to control the gap between tabs
              }}
              name={tab.name}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
                  </div>
                </Stack>
              </Container>
            </Box>
          </>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default InvestorsTab;
