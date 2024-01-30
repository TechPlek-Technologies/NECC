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
  Grid,
  Snackbar,
  Stack,
  SvgIcon,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import {  FormGroup, Input, } from "reactstrap";
import Layout from "../layout/Layout";
import { applyPagination } from "../utils/apply-pagination";
import { createTheme } from "../../../theme";
import { ThemeProvider } from "@emotion/react";
import { PdfTable } from "../sections/InvestorsTab/pdf-table";
import { useParams } from "react-router-dom";
import { capitalizeFirstLetterOfEachWord } from "../utils/capitalise-word";
import axios from "axios";

const domain = process.env.REACT_APP_API_DOMAIN;


const useCarriers = (data, page, rowsPerPage) => {
  return useMemo(() => {
    return applyPagination(data, page, rowsPerPage);
  }, [data,page, rowsPerPage]);
};



const AdminPdfReports = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data,setData]=useState([]);
  const carriers = useCarriers(data, page, rowsPerPage);
  const [loading, setLoading] = useState(true);
  let { reportName,id } = useParams();
  const [isEditOpen, setEditOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [name, setName] = useState('');
  const [section, setSection] = useState(reportName);
    const [file, setFile]=useState(null);



  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);

  const handleEditClose = () => {
    setEditOpen(false);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setFailure(false);
    setSuccess(false);
  };

  const handleUpload = async () => {
    const token = window.localStorage.getItem("Token");
    const domain = process.env.REACT_APP_API_DOMAIN;
    try {
      if (!file) {
        throw new Error("No file selected");
      }
  
      console.log("section",typeof(section))
      const formData = new FormData();
      formData.append("file", file);
      formData.append("section", section); // Add demo data
      formData.append("page", "Corporate Information"); // Add demo data
      formData.append("name", name); // Add demo data
      formData.append("eventID", id); // Add demo data
  
      const response = await axios.post(`${domain}/uploads/pdfFiles`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
      });
  
      if (response.status !== 200) {
        setFailure(true);
        throw new Error("Failed to upload PDF file");
      }
  
      // Handle successful upload
      setSuccess(true)
      console.log("PDF file uploaded successfully");
      setEditOpen(false);
    } catch (error) {
        setFailure(true);
      console.error("Error uploading PDF file:", error.message);
    }
  };
  const theme = createTheme();


  useEffect(() => {

    const fetchData = async () => {
      setLoading(true); 
      try {
        const response = await axios.get(`${domain}/uploads/pdfFiles/sections/${id}`);
        setData(response.data); 
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
  
    // Call the fetch data function
    fetchData();
  }, [id, success]); // Empty dependency array to ensure this effect runs only once
  
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
                      {capitalizeFirstLetterOfEachWord(section)}
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
                  <PdfTable
                    count={data.length}
                    items={carriers}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleRowsPerPageChange}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    section={section}
                  />
                )}
              </Stack>
            </Container>
          </Box>
          <Dialog open={isEditOpen} onClose={handleEditClose}>
            <DialogTitle>Add New File</DialogTitle>
            <DialogContent>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
              <TextField
                  margin="normal"
                  fullWidth
                  id="section"
                  label="Section"
                  name="section"
                  inputProps={{ readOnly: true }}
                  defaultValue={capitalizeFirstLetterOfEachWord(section)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="name"
                  label="Name"
                  id="name"
                  autoFocus
                  value={name}
                  onChange={(e)=>{
                    setName(e.target.value)
                  }}
                 
                />
              </Grid>
              <Grid item xs={12} md={12}>
                
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
          
            </DialogContent>

            <DialogActions>
              <Button
                onClick={() => {
                  setEditOpen(false);
                  setFile(null)
                  setName('')
                }}
                color="primary"
              >
                Cancel
              </Button>
              <Button disabled={!file || !name} onClick={() => {handleUpload()}} color="primary">
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
              File Upload Failed
            </Alert>
          </Snackbar>
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default AdminPdfReports;
