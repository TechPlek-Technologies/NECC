import { ThemeProvider } from "@emotion/react";
import { createTheme } from "../../../theme";
import Layout from "../layout/Layout";
import { Box, Container, Stack, Typography } from "@mui/material";

function AdminCodeOfConduct() {
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
                    <Typography variant="h4">Code Of Conduct</Typography>
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

export default AdminCodeOfConduct;