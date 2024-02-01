import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "../../../theme";
import Layout from "../layout/Layout";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { InvestorsInnerTab } from "../sections/InvestorsTab/investors-tab-inner";
import { Link } from "react-router-dom";
import axios from "axios";

function InvestorsTab() {
  const theme = createTheme();
  const domain = process.env.REACT_APP_API_DOMAIN;
  const [tabs, setTabs] = useState([]);


  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(`${domain}/categories`);
        setTabs(response.data); // Set the fetched data into state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetch data function
    fetchData();
  }, []); // Empty dependency array to ensure this effect runs only once

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
                        <Grid
                          item
                          key={index}
                          xs={12}
                          sm={6}
                          lg={3}
                          style={{ margin: "4px 0" }}
                        >
                          <Link
                            to={`/admin/${tab.name}/${tab.id}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
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
