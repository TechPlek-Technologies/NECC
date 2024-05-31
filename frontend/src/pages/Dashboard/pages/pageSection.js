import { ThemeProvider } from "@emotion/react";
import { createTheme } from "../../../theme";
import Layout from "../layout/Layout";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
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
import { useEffect, useState } from "react";
import axios from "axios";
import { SectionInnerTab } from "../sections/InvestorsTab/section-inner-tab";
import { Link, useParams } from "react-router-dom";



function PageSection() {
  let { pagename,id } = useParams();

  const [data, setData] = useState([]);
  const [isEditOpen, setEditOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [section, setSection] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState(pagename);
  const [loading, setLoading] = useState(true);
  const domain = process.env.REACT_APP_API_DOMAIN;
  const token = window.localStorage.getItem("Token");

  const theme = createTheme();
  const handleEditClose = () => {
    setEditOpen(false);
  };
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const formData = {
        name: section, // Assuming section is defined somewhere in your code
        pagesID: Number(id),
      };

      
      const response = await axios.post(`${domain}/section`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 200) {
        setMessage("Failed to Create Section");
        setFailure(true);
        throw new Error("Failed to Create Section");
      }

      // Handle successful upload
      setMessage(response.data.message);
      setSuccess(true);
      console.log("Section created successfully");
    } catch (error) {
      setMessage("Failed to Create Section");
      setFailure(true);
      console.error("Error creating new section:", error.message);
      setLoading(false);
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

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${domain}/section/page/${id}`);
        setData(response.data); // Set the fetched data into state
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(true);
      }
    };

    // Call the fetch data function
    fetchData();
  }, [success]); // Empty dependency array to ensure this effect runs only once

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
                      <Typography variant="h4">{pagename.toUpperCase()}</Typography>
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
                    {!data? (
                         <Box
                         sx={{
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent:'center',
                           height: '60vh',
                           width:'80vw' // Set to 100% of the viewport height
                         }}
                       >
                         <CircularProgress />
                       </Box>
                    ) : (
                      data.map((tab, index) => (
                        <Grid
                          item
                          key={tab.id}
                          xs={12}
                          sm={6}
                          lg={3}
                          style={{ margin: "4px 0" }}
                        >
                          <Link
                            to={`/admin/content/edit/${tab.name}/${tab.id}`}
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
                      ))
                    )}
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
                {message}
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
                {message}
              </Alert>
            </Snackbar>
          </>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default PageSection;
