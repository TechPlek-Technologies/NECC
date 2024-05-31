import { useCallback, useEffect, useMemo, useState } from "react";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogContent,
  FormGroup,
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
import { CsrDownloadTable } from "../sections/Csr/csr-download-table";
import { Input } from "reactstrap";
import { CiPdftable } from "../sections/CI/ci-pdf-table";




const useCarriers = (data,page, rowsPerPage) => {
  return useMemo(() => {
    return applyPagination(data, page, rowsPerPage);
  }, [data,page, rowsPerPage]);
};


const CiPdf = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [key, setKey] = useState(0);
  const [data,setData]=useState([]);
  const carriers = useCarriers(data,page, rowsPerPage);
  const [loading, setLoading] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const token = window.localStorage.getItem("Token");
  const domain = process.env.REACT_APP_API_DOMAIN;
  const [file, setFile] = useState(null);
  const [name,setName]=useState("");


  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  
  const handleKeyChange = () => {
    setKey((prevKey) => prevKey + 1);
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
        if (!file) {
            throw new Error("No file selected");
        }


        const formData = new FormData();
        formData.append("name", name);
        formData.append("file", file); // Append the file itself to the FormData

      

        const response = await axios.post(
            `${domain}/cipdf`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            }
        );

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
        const response = await axios.get(`${domain}/cipdf`);
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
                    <Typography variant="h4">Corporate Information (Credit Rating)</Typography>
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
                  <CiPdftable
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
            <Grid item xs={12} md={12}>
              <TextField
                label="Name"
                name="name"
                onChange={(e)=>{setName(e.target.value)}}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12}>
                <Typography>File</Typography>
                  <FormGroup>
                    <Input
                      id="inputEmpGroupFile"
                      name="file"
                      type="file"
                      onChange={handleFileChange}
                      accept="application/pdf"
                    />
                  </FormGroup>
                </Grid>
          
          </Grid>

          <Button onClick={()=>{setIsEditDialogOpen(false)}}>Close</Button>
          <Button onClick={()=>{
            handleUpload();
          }}>Save Changes</Button>
        </DialogContent>
      </Dialog>
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default CiPdf;
