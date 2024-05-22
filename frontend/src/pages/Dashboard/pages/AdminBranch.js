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
  FormControl,
  CircularProgress,
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
import { CompanyCard } from "../sections/Office/company-card";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { divideArrayByType } from "../utils/contact-divide";
import { BranchCard } from "../sections/Branch/BranchCard";
import { BranchTable } from "../sections/Branch/BranchTable";
import { applyPagination } from "../utils/apply-pagination";

const useCarriers = (data, page, rowsPerPage) => {
  return useMemo(() => {
    return applyPagination(data, page, rowsPerPage);
  }, [data,page, rowsPerPage]);
};

function AdminBranch() {
  const theme = createTheme();
  const token = window.localStorage.getItem("Token");
  const domain = process.env.REACT_APP_API_DOMAIN;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isEditOpen, setEditOpen] = useState(false);
  const [editedOffice, setEditedOffice] = useState({});
  const [success, setSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [failure, setFailure] = useState(false);
  const [key, setKey] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]); 
  const paginationData= useCarriers(data, page, rowsPerPage);

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleKeyChange = () => {
    setKey((prevKey) => prevKey + 1);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setFailure(false);
    setSuccess(false);
    setLoading(false);
  };

  const handleUpload = async () => {
    setLoading(true);
    try {
      if (!editedOffice) {
        throw new Error("No file selected");
      }

      const formData = {
        gtag: editedOffice.gtag,
        branchCode: editedOffice.branchCode,
        email: editedOffice.email,
        mobile: editedOffice.mobile,
        phone: editedOffice.phone,
        address2: editedOffice.address2,
        address1: editedOffice.address1,
        city: editedOffice.city,
        country: editedOffice.country,
        state: editedOffice.state,
        personName: editedOffice.personName,
        branch: editedOffice.branch,
      };

      console.log(formData);
      const response = await axios.post(`${domain}/branch`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 200) {
        setSuccessMsg(response.data.message);
        setFailure(true);
        throw new Error("Failed to add file");
      }

      // Handle successful upload
      setSuccess(true);
      setSuccessMsg(response.data.message);
      setKey((prevKey) => prevKey + 1);
      setEditOpen(false);
    } catch (error) {
      console.log(error);
      setFailure(true);
      setSuccessMsg(error.response.data.message);
      console.error("Error uploading data:", error.message);
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedOffice((prev) => ({ ...prev, [name]: value }));
  };

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);

  useEffect(() => {
    // Function to fetch data
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${domain}/branch`);
        const sortedData = response.data
        .slice()
        .sort((a, b) => a.branch.localeCompare(b.branch));


        setData(sortedData); // Set the fetched data into state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(true);
      }
    };

    // Call the fetch data function
    fetchData();
  }, [key]);

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
                      <Typography variant="h4">
                        Branch Office Details
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
                        Add
                      </Button>
                    </div>
                  </Stack>
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
                  <BranchTable
                    count={data.length}
                    items={paginationData}
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
          </>
          <Dialog
            open={isEditOpen}
            onClose={() => {
              setEditOpen(false);
            }}
          >
            <DialogTitle>Add Branch Details</DialogTitle>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Branch Name*"
                    name="branch"
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Contact Person*"
                    name="personName"
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Email"
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
                    label="Mobile"
                    name="mobile"
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Branch Code*"
                    name="branchCode"
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Address Line 1*"
                    name="address1"
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Address Line 2*"
                    name="address2"
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="City*"
                    name="city"
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="State*"
                    name="state"
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Country*"
                    name="country"
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Google Maps Embed API*"
                    name="gtag"
                    onChange={handleInputChange}
                    fullWidth
                  />
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
              <Button onClick={handleUpload} color="primary">
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
              {successMsg}
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
              {successMsg}
            </Alert>
          </Snackbar>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default AdminBranch;
