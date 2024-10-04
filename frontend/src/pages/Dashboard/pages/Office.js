import { ThemeProvider } from "@emotion/react";
import { createTheme } from "../../../theme";
import Layout from "../layout/Layout";
import { Alert, Box, Button, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select, Snackbar, Stack, SvgIcon, TextField, Typography } from "@mui/material";
import { CompanyCard } from "../sections/Office/company-card";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { divideArrayByType } from "../utils/contact-divide";





const useOfficeDivide = (data) => {
  return useMemo(() => {
    return divideArrayByType(data);
  }, [data]);
};


function Office() {
  const theme = createTheme();
  const token = window.localStorage.getItem("Token");
  const domain = process.env.REACT_APP_API_DOMAIN;

  const [isEditOpen, setEditOpen] = useState(false);
  const [editedOffice, setEditedOffice] = useState({});
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [key, setKey] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [corporateOffice, companies] = useOfficeDivide(data);


  const handleKeyChange = () => {
    setKey((prevKey) => prevKey + 1);
  };
  
  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setFailure(false);
    setSuccess(false);
  };

  const handleUpload = async () => {
    setLoading(true);
    try {
      if (!editedOffice) {
        throw new Error("No file selected");
      }

   
      const formData = {
        type: editedOffice.type, 
        tollfreeNo: editedOffice.tollfree,
        pincode: editedOffice.pincode,
        phone: editedOffice.phone,
        name: editedOffice.name,
        email: editedOffice.email,
        addressLine3: editedOffice.addressLine3,
        addressLine2: editedOffice.addressLine2,
        addressLine1: editedOffice.addressLine1,
        city: editedOffice.city,
      };

      const response = await axios.post(`${domain}/office`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 200) {
        setFailure(true);
        throw new Error("Failed to add file");
      }

      // Handle successful upload
      setSuccess(true);
      setKey((prevKey) => prevKey + 1);
      setEditOpen(false);
    } catch (error) {
      setFailure(true);
      console.error("Error uploading PDF file:", error.message);
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedOffice((prev) => ({ ...prev, [name]: value }));
  };


  useEffect(() => {
    // Function to fetch data
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await axios.get(`${domain}/office`);

        setData(response.data); // Set the fetched data into state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(true);
      }
    };

    // Call the fetch data function
    fetchData();
  }, [key]);

  console.log("corporateOffice",corporateOffice)
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
                        onClick={()=>{
                          setEditOpen(true);
                        }}
                      >
                        Add
                      </Button>
                    </div>
                  </Stack>
                  <Grid container spacing={3}>
                    {corporateOffice.map((office) => (
                  <Grid xs={12} md={6} lg={4} key={office.id}>
                        <CompanyCard id={office.id} office={office} key={key} handleKeyChange={handleKeyChange} />
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
                 
                  </Stack>
                  <Grid container spacing={3}>
                    {companies.map((office) => (
                      <Grid xs={12} md={6} lg={4} key={office.id}>
                        <CompanyCard  id={office.id} office={office} key={key} handleKeyChange={handleKeyChange}/>
                      </Grid>
                    ))}
                  </Grid>
                
                </Stack>
              </Container>
            </Box>
          </>

          {loading ? (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "60vh",
                      width: "80vw", // Set to 100% of the viewport height
                    }}
                  >
                    <CircularProgress />
                  </Box>
                ) : (
          <Dialog open={isEditOpen} onClose={()=>{setEditOpen(false)}}>
            <DialogTitle>Add Office Address</DialogTitle>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="City"
                    name="city"
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
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
                    label="Address Line 1"
                    name="addressLine1"
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Address Line 2"
                    name="addressLine2"
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Address Line 3"
                    name="addressLine3"
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Pincode"
                    name="pincode"
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Toll Free"
                    name="tollfree"
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
                    label="E-mail"
                    name="email"
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
              <Button onClick={()=>{
                setEditOpen(false)
              }} color="primary">
                Cancel
              </Button>
              <Button onClick={handleUpload} color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog>)}
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
              Name, city, email & category required
            </Alert>
          </Snackbar>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default Office;
