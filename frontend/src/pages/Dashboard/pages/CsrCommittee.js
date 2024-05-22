import { useCallback, useEffect, useMemo, useState } from "react";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogContent,
  Grid,
  Stack,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import Layout from "../layout/Layout";
import { applyPagination } from "../utils/apply-pagination";
import { createTheme } from "../../../theme";
import { ThemeProvider } from "@emotion/react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CsrTable } from "../sections/Csr/csr-table";




const useCarriers = (data,page, rowsPerPage) => {
  return useMemo(() => {
    return applyPagination(data, page, rowsPerPage);
  }, [data,page, rowsPerPage]);
};


const CsrCoommitte = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [key, setKey] = useState(0);
  const [data,setData]=useState([]);
  const carriers = useCarriers(data,page, rowsPerPage);
  const [loading, setLoading] = useState(false);
  const [editedOffice, setEditedOffice] = useState({});
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const token = window.localStorage.getItem("Token");
  const domain = process.env.REACT_APP_API_DOMAIN;

  let { pagename,id } = useParams();
  
  const handleKeyChange = () => {
    setKey((prevKey) => prevKey + 1);
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedOffice((prev) => ({ ...prev, [name]: value }));
  };

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);

  const theme = createTheme();


  const handleUpload = async () => {
    setLoading(true);
    try {
      if (!editedOffice) {
        throw new Error("No office selected");
      }

    
      const formData = {
        serial: editedOffice.serial, // Assuming section is defined somewhere in your code
        name: editedOffice.name
      };


      const response = await axios.post(`${domain}/csr`, formData, {
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
      setIsEditDialogOpen(false);
    } catch (error) {
      setFailure(true);
      console.error("Error uploading PDF file:", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Function to fetch data
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await axios.get(`${domain}/csr`);
        setData(response.data); // Set the fetched data into state
        console.log("new",response.data); // Set the fetched data into state
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
                    <Typography variant="h4">CSR Committee Members</Typography>
                  </Stack>
                  <div>
                    <Button
                      startIcon={
                        <SvgIcon fontSize="small">
                          <PlusIcon />
                        </SvgIcon>
                      }
                      variant="contained"
                      onClick={()=>setIsEditDialogOpen(true)}
                    >
                      New
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
                  <CsrTable
                    count={data.length}
                    items={carriers}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleRowsPerPageChange}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    key={key}
                    handleKeyChange={handleKeyChange}
                  />
                )}
              </Stack>
            </Container>
          </Box>
          <Dialog open={isEditDialogOpen} onClose={()=>setIsEditDialogOpen(false)}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <TextField
                label="S. No"
                name="serial"
                onChange={handleInputChange}
                type="number"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={10}>
              <TextField
                label="Name"
                name="name"
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
          
          </Grid>

          <Button onClick={()=>{setIsEditDialogOpen(false)}}>Close</Button>
          <Button onClick={()=>{
            console.log(editedOffice)
            handleUpload();
          }}>Save Changes</Button>
        </DialogContent>
      </Dialog>
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default CsrCoommitte;
