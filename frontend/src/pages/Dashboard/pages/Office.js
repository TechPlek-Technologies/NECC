import { ThemeProvider } from "@emotion/react";
import { createTheme } from "../../../theme";
import Layout from "../layout/Layout";
import { Box, Button, Container, Grid, Stack, SvgIcon, Typography } from "@mui/material";
import { CompanyCard } from "../sections/Office/company-card";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";

function Office() {
  const theme = createTheme();
  const companies = [
   
    {
        id: "2569ce0d517a7f06d3ea1f25",
        city: "Mumbai",
    name: "Navratan",
    addressLine1: "2 Mezzanine Floor",
    addressLine2: " 69, P.D'Mellow Road",
    addressLine3: "Carnace Bunder",
    pincode:"400009",
    phone: ["022-66317261", "022-66317262"],
    tollfreeNo:["1800 11 7080","9711797516"],
    email: "mumbairo@neccgroup.com"
      },
    {
        id: "2569ce0d517a7f06d3ea1f26",
        city: "Mumbai",
    name: "Navratan",
    addressLine1: "2 Mezzanine Floor",
    addressLine2: " 69, P.D'Mellow Road",
    addressLine3: "Carnace Bunder",
    pincode:"400009",
    phone: ["022-66317261", "022-66317262"],
    email: "mumbairo@neccgroup.com"
      },
    {
        id: "2569ce0d517a7f06d3ea1f27",
        city: "Mumbai",
    name: "Navratan",
    addressLine1: "2 Mezzanine Floor",
    addressLine2: " 69, P.D'Mellow Road",
    addressLine3: "Carnace Bunder",
    pincode:"400009",
    phone: ["022-66317261", "022-66317262"],
    email: "mumbairo@neccgroup.com"
      },
  ];
  const corporateOffice=[
    {
        id: "2569ce0d517a7f06d3ea1f28",
        city: "Mumbai",
    name: "Navratan",
    addressLine1: "2 Mezzanine Floor",
    addressLine2: " 69, P.D'Mellow Road",
    addressLine3: "Carnace Bunder",
    pincode:"400009",
    phone: ["022-66317261", "022-66317262"],
    email: "mumbairo@neccgroup.com"
      },
    {
        id: "2569ce0d517a7f06d3ea1f29",
        city: "Mumbai",
    name: "Navratan",
    addressLine1: "2 Mezzanine Floor",
    addressLine2: " 69, P.D'Mellow Road",
    addressLine3: "Carnace Bunder",
    pincode:"400009",
    phone: ["022-66317261", "022-66317262"],
    email: "mumbairo@neccgroup.com"
      },
     
  ]

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
              <Container maxWidth="xl">
                <Stack spacing={3}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={4}
                  >
                    <Stack spacing={1}>
                      <Typography variant="h4">Corporate Office</Typography>
                      
                    </Stack>
                    <div>
                      <Button
                        startIcon={
                          <SvgIcon fontSize="small">
                            <PlusIcon />
                          </SvgIcon>
                        }
                        variant="contained"
                      >
                        Add
                      </Button>
                    </div>
                  </Stack>
                  <Grid container spacing={3}>
                    {corporateOffice.map((office) => (
                      <Grid xs={12} md={6} lg={4} key={office.id}>
                        <CompanyCard office={office} />
                      </Grid>
                    ))}
                  </Grid>
                
                </Stack>
                <Stack spacing={3}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={4}
                  >
                    <Stack spacing={1}>
                      <Typography variant="h4">Regional Office</Typography>
                      
                    </Stack>
                    <div>
                      <Button
                        startIcon={
                          <SvgIcon fontSize="small">
                            <PlusIcon />
                          </SvgIcon>
                        }
                        variant="contained"
                      >
                        Add
                      </Button>
                    </div>
                  </Stack>
                  <Grid container spacing={3}>
                    {companies.map((office) => (
                      <Grid xs={12} md={6} lg={4} key={office.id}>
                        <CompanyCard office={office} />
                      </Grid>
                    ))}
                  </Grid>
                
                </Stack>
              </Container>
            </Box>
          </>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default Office;
