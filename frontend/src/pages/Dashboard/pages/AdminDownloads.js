import { ThemeProvider } from "@emotion/react";
import { createTheme } from "../../../theme";
import Layout from "../layout/Layout";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SectionInnerTab } from "../sections/InvestorsTab/section-inner-tab";

function AdminDownloads() {
  const theme = createTheme();
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
                <Stack spacing={3}>
                  <div>
                    <Typography variant="h4">CSR</Typography>
                  </div>
                  <div>
                    <Grid container spacing={1}>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        lg={3}
                        style={{ margin: "4px 0" }}
                      >
                        <Link
                          to={`/admin/csr/members/committee`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <SectionInnerTab
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
                            name={"Committee Members"}
                          />
                        </Link>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        lg={3}
                        style={{ margin: "4px 0" }}
                      >
                        <Link
                          to={`/admin/csr/downloads/pdf`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <SectionInnerTab
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
                            name={"PDF's"}
                          />
                        </Link>
                      </Grid>
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

export default AdminDownloads;
