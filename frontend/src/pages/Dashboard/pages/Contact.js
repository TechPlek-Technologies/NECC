import { useCallback, useEffect, useMemo, useState } from "react";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
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
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import Layout from "../layout/Layout";
import { applyPagination } from "../utils/apply-pagination";
import { createTheme } from "../../../theme";
import { ThemeProvider } from "@emotion/react";
import { ContactTable } from "../sections/Contact/contact-table";
import axios from "axios";
import { divideArrayByType } from "../utils/contact-divide";



const useCarriers = (data, page, rowsPerPage) => {
  return useMemo(() => {
    return applyPagination(data, page, rowsPerPage);
  }, [data,page, rowsPerPage]);
};




const OfficeContact = () => {
  const [page, setPage] = useState(0);
  const [page1, setPage1] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rowsPerPage1, setRowsPerPage1] = useState(5);
  const [data,setData]=useState([]);
  const [corporateOfficeArray, otherTypesArray] = divideArrayByType(data);
  const carriers = useCarriers(otherTypesArray, page, rowsPerPage);
  const corporates = useCarriers(corporateOfficeArray, page, rowsPerPage);
  const [loading, setLoading] = useState(true);
  const [isEditOpen, setEditOpen] = useState(false);
  const [editedOffice, setEditedOffice] = useState({});
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [key, setKey] = useState(0);

  const token = window.localStorage.getItem("Token");
  const domain = process.env.REACT_APP_API_DOMAIN;
  

  const handleKeyChange = () => {
    setKey((prevKey) => prevKey + 1);
  };

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);
  const handlePageChange1 = useCallback((event, value) => {
    setPage1(value);
  }, []);

  const handleRowsPerPageChange1 = useCallback((event) => {
    setRowsPerPage1(event.target.value);
  }, []);

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedOffice((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setFailure(false);
    setSuccess(false);
  };

  const handleUpload = async () => {
   
    try {
      if (!editedOffice) {
        throw new Error("No file selected");
      }

    
      const formData = {
        name: editedOffice.name, // Assuming section is defined somewhere in your code
        email: editedOffice.email,
        location: editedOffice.location,
        phone: editedOffice.phone,
        type: editedOffice.type,
      };


      const response = await axios.post(`${domain}/contact`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 200) {
        setFailure(true);
        throw new Error("Failed to upload PDF file");
      }

      // Handle successful upload
      setSuccess(true);
      setKey((prevKey) => prevKey + 1);
      console.log("PDF file uploaded successfully");
      setEditOpen(false);
    } catch (error) {
      setFailure(true);
      console.error("Error uploading PDF file:", error.message);
    }
  };
  const theme = createTheme();


  useEffect(() => {
    // Function to fetch data
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await axios.get(`${domain}/contact`);
        setData(response.data); // Set the fetched data into state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(true);
      }
    };

    // Call the fetch data function
    fetchData();
  }, [key]); // Empty dependency array to ensure this effect runs only once

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
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
                    <Typography variant="h4">
                      Corporate Office Emails
                    </Typography>
                  </Stack>
                  <div>
                    <Button
                      startIcon={
                        <SvgIcon fontSize="small">
                          <PlusIcon />
                        </SvgIcon>
                      }
                      variant="contained"
                      onClick={() => {
                        setEditOpen(true);
                      }}
                    >
                      New
                    </Button>
                  </div>
                </Stack>

                {loading ? (
                  <CircularProgress />
                ) : (
                  <ContactTable
                    count={corporateOfficeArray.length}
                    items={corporates}
                    onPageChange={handlePageChange1}
                    onRowsPerPageChange={handleRowsPerPageChange1}
                    page={page1}
                    rowsPerPage={rowsPerPage1}
                    handleKeyChange={handleKeyChange}
                    key={key}
                  />
                )}
              </Stack>
            </Container>
            <Container maxWidth="xl">
              <Stack spacing={3}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  spacing={4}
                >
                  <Stack spacing={1}>
                    <Typography variant="h4">Regional Office Emails</Typography>
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
                      New
                    </Button>
                  </div>
                </Stack>

                {loading ? (
                  <CircularProgress />
                ) : (
                  <ContactTable
                    count={otherTypesArray.length}
                    items={carriers}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleRowsPerPageChange}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    handleKeyChange={handleKeyChange}
                    key={key}
                  />
                )}
              </Stack>
            </Container>
          </Box>

          <Dialog open={isEditOpen} onClose={handleEditClose}>
            <DialogTitle>Add New Contact</DialogTitle>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Name"
                    name="name"
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="E-mail"
                    name="email"
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Phone"
                    name="phone"
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Location"
                    name="location"
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="type"
                      label="Category"
                      name="type"
                      value={editedOffice.type || ""} // Make sure to bind the value of the Select to the state
                      onChange={handleInputChange}
                    >
                      <MenuItem value={"Corporate office"}>
                        Corporate office
                      </MenuItem>
                      <MenuItem value={"Regional office"}>
                        Regional office
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
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
                  console.log(editedOffice);
                  handleUpload();
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
              File Uploaded Successfully
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
              Name, Email & category required
            </Alert>
          </Snackbar>
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default OfficeContact;
