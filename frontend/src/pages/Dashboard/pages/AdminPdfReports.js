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
  DialogContentText,
  DialogTitle,
  Grid,
  Snackbar,
  Stack,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import { FormGroup, Input } from "reactstrap";
import Layout from "../layout/Layout";
import { applyPagination } from "../utils/apply-pagination";
import { createTheme } from "../../../theme";
import { ThemeProvider } from "@emotion/react";
import { PdfTable } from "../sections/InvestorsTab/pdf-table";
import { useParams } from "react-router-dom";
import { capitalizeFirstLetterOfEachWord } from "../utils/capitalise-word";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";

const domain = process.env.REACT_APP_API_DOMAIN;

const useCarriers = (data, page, rowsPerPage) => {
  return useMemo(() => {
    return applyPagination(data, page, rowsPerPage);
  }, [data, page, rowsPerPage]);
};

const AdminPdfReports = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState([]);
  const carriers = useCarriers(data, page, rowsPerPage);
  const [loading, setLoading] = useState(true);
  let { reportName, id } = useParams();
  const [isEditOpen, setEditOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [name, setName] = useState("");
  const [section, setSection] = useState(reportName);
  const [file, setFile] = useState(null);
  const [key, setKey] = useState(0);
  const [editCategory, setEditCategory] = useState(reportName);
  const [openDelete, setOpenDelete] = useState(false);
  const [message, setMessage] = useState("");

  const [isEditTitle, setEditTitle] = useState(false);
  const token = window.localStorage.getItem("Token");


  const handleKeyChange = () => {
    setKey((prevKey) => prevKey + 1);
  };

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

      const formData = new FormData();
      formData.append("file", file);
      formData.append("section", section);
      formData.append("page", "Corporate Information");
      formData.append("name", name);
      formData.append("eventID", id);

      const response = await axios.post(
        `${domain}/uploads/pdfFiles`,
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
      setEditOpen(false);
    } catch (error) {
      setFailure(true);
      console.error("Error uploading PDF file:", error.message);
    }
  };

  const handleEditSubmit = async () => {
    try {
      const formData = {
        name: editCategory,
      };


      const response = await axios.put(`${domain}/events/${id}`, formData, {
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
    }finally{
      setEditCategory(false);
      window.location.reload();
    }
   
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${domain}/events/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
  
      if (response.status !== 200) {
        throw new Error("Failed to delete category");
      }
  
      // Handle successful deletion
      setMessage(response.data.message);
      setSuccess(true);
      console.log("Category deleted successfully");
    } catch (error) {
      console.error("Error deleting category:", error.message);
      setMessage("Failed to delete category");
      setFailure(true);
    } finally {
      setOpenDelete(false);
      window.location.reload(); 
    }
  };
  const theme = createTheme();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${domain}/uploads/pdfFiles/sections/${id}`
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
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
                      {capitalizeFirstLetterOfEachWord(section)}
                    </Typography>
                  </Stack>
                  <div>
                      <Button
                        style={{ "marginLeft": "10px" }}
                        color="success"
                        startIcon={
                          <SvgIcon fontSize="small">
                            <FaEdit />
                          </SvgIcon>
                        }
                        variant="contained"
                        onClick={() => setEditTitle(true)}
                      >
                        Edit
                      </Button>
                      <Button
                        style={{ "marginLeft": "10px" }}

                        color="error"
                        startIcon={
                          <SvgIcon fontSize="small">
                            <RiDeleteBin2Line />
                          </SvgIcon>
                        }
                        variant="contained"
                        onClick={() => setOpenDelete(true)}
                      >
                        Delete
                      </Button>
                      <Button
                        style={{ "marginLeft": "10px" }}

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
                  <PdfTable
                    count={data.length}
                    items={carriers}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleRowsPerPageChange}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    section={section}
                    handleKeyChange={handleKeyChange}
                    key={key}
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
                    onChange={(e) => {
                      setName(e.target.value);
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
                  setFile(null);
                  setName("");
                }}
                color="primary"
              >
                Cancel
              </Button>
              <Button
                disabled={!file || !name}
                onClick={() => {
                  handleUpload();
                }}
                color="primary"
              >
                Save
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog open={isEditTitle} onClose={() => { setEditTitle(false) }}>
              <DialogTitle>Edit Title</DialogTitle>
              <DialogContent>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="pagename"
                    label="Edit Title"
                    name="pagename"
                    defaultValue={editCategory}
                    onChange={(e) => { setEditCategory(e.target.value) }}
                  />

                </Box>
              </DialogContent>

              <DialogActions>
                <Button
                  onClick={() => {
                    setEditTitle(false);
                  }}
                  color="primary"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    handleEditSubmit();
                  }}
                  color="primary"
                >
                  Save
                </Button>
              </DialogActions>
            </Dialog>


            <Dialog
              open={openDelete}
              onClose={()=>setOpenDelete(false)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {`Confirm?`}
              </DialogTitle>
              <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This is a permanent action and cannot be undone.
          </DialogContentText>
        </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={()=>{handleDelete()}} autoFocus>
                  Confirm
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
