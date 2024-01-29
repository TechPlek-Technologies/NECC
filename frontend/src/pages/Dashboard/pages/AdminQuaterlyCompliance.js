import { ThemeProvider } from "@emotion/react";
import { createTheme } from "../../../theme";
import Layout from "../layout/Layout";
import {
  Alert,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Snackbar,
  Stack,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { useState } from "react";
import axios from "axios";
import { SectionInnerTab } from "../sections/InvestorsTab/section-inner-tab";
import { Link } from "react-router-dom";
function AdminQuaterlyCompliance() {
  const [isEditOpen, setEditOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [section, setSection] = useState("");
  const [category, setCategory] = useState("Quaterly Compliance");
  const domain = process.env.REACT_APP_API_DOMAIN;

  const theme = createTheme();
  const handleEditClose = () => {
    setEditOpen(false);
  };
  const handleSubmit = async () => {
    try {
      const token = window.localStorage.getItem("Token");

      const formData = {
        name: section, // Assuming section is defined somewhere in your code
        categoryId: 1,
      };

      console.log(formData);
      const response = await axios.post(`${domain}/events`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 200) {
        setFailure(true);
        throw new Error("Failed to Create Section");
      }

      // Handle successful upload
      setSuccess(true);
      console.log("Section created successfully");
    } catch (error) {
      setFailure(true);
      console.error("Error creating new section:", error.message);
    }
    setEditOpen(false);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setFailure(false);
    setSuccess(false);
  };

  const tabs = [
    { route: '/admin/pdfReports/new world', name: 'Corporate Information' },
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
                <div>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={3}
                  >
                    <Stack spacing={1}>
                      <Typography variant="h4">Quaterly Compliance</Typography>
                    </Stack>
                    <div>
                      <Button
                        startIcon={
                          <SvgIcon fontSize="small">
                            <PlusIcon />
                          </SvgIcon>
                        }
                        variant="contained"
                        onClick={() => setEditOpen(true)}
                      >
                        New Section
                      </Button>
                    </div>
                  </Stack>
                </div>
                <div>
                  <Grid container spacing={1}>
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
                            to={tab.route}
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
                            name={tab.name}
                            />
                        
                            </Link>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              </Container>
            </Box>
            <Dialog open={isEditOpen} onClose={handleEditClose}>
              <DialogTitle>Add New Section</DialogTitle>
              <DialogContent>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="category"
                    label="Category"
                    name="category"
                    inputProps={{ readOnly: true }}
                    defaultValue={category}
                  />

                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="section"
                    label="Section"
                    type="section"
                    id="section"
                    autoFocus
                    onChange={(e) => {
                      setSection(e.target.value);
                    }}
                  />
                </Box>
              </DialogContent>

              <DialogActions>
                <Button
                  onClick={() => {
                    setEditOpen(false);
                  }}
                  color="primary"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    handleSubmit();
                  }}
                  color="primary"
                >
                  Save
                </Button>
              </DialogActions>
            </Dialog>
            <Snackbar
              open={success}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: "100%" }}
              >
                New Section created Successfully
              </Alert>
            </Snackbar>
            <Snackbar
              open={failure}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                severity="error"
                variant="filled"
                sx={{ width: "100%" }}
              >
                Section already exists
              </Alert>
            </Snackbar>
          </>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default AdminQuaterlyCompliance;
