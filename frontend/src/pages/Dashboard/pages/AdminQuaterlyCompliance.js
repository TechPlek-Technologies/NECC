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
  DialogContentText,
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
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";



function AdminQuaterlyCompliance() {
  let { pagename, id } = useParams();

  const [data, setData] = useState([]);
  const [isEditOpen, setEditOpen] = useState(false);
  const [isEditTitle, setEditTitle] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [section, setSection] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState(pagename);
  const domain = process.env.REACT_APP_API_DOMAIN;
  const token = window.localStorage.getItem("Token");
  const [editCategory, setEditCategory] = useState(pagename);
  const [openDelete, setOpenDelete] = useState(false);

  const theme = createTheme();
  const handleEditClose = () => {
    setEditOpen(false);
  };
  const handleSubmit = async () => {
    try {
      const formData = {
        name: section, // Assuming section is defined somewhere in your code
        categoryID: Number(id),
      };


      const response = await axios.post(`${domain}/events`, formData, {
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
    }
    setEditOpen(false);
  };
  const handleEditSubmit = async () => {
    try {
      const formData = {
        name: editCategory,
      };


      const response = await axios.put(`${domain}/categories/${id}`, formData, {
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
      const response = await axios.delete(`${domain}/categories/${id}`, {
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
      try {
        const response = await axios.get(`${domain}/events/page/${id}`);
        setData(response.data); // Set the fetched data into state
      } catch (error) {
        console.error("Error fetching data:", error);
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
                        onClick={() => setEditOpen(true)}
                        spacing={2}
                      >
                        New Section
                      </Button>
                    </div>
                  </Stack>
                </div>
                <div>
                  <Grid container spacing={1}>
                    {!data ? (
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '60vh',
                          width: '80vw' // Set to 100% of the viewport height
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
                            to={`/admin/pdfReports/${tab.name}/${tab.id}`}
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

export default AdminQuaterlyCompliance;
