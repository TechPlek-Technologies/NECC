import { useCallback, useMemo, useState } from "react";
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

const data = [
  {
    id: "5e887ac47eed253091be10cb",
    pdfFile: "abc-asd-qwertt-qweqwc-op.pdf",
    address: {
      city: "Cleveland",
      country: "USA",
      state: "Ohio",
      street: "2849 Fulton Street",
    },
    avatar: "/assets/avatars/avatar-carson-darrin.png",
    email: "carsonafsdf.darrin@devias.io",
    name: "Carson Darrin",
    phone: "304-428-3097",
  },
  {
    id: "5e887b209c28ac3dd97f6db5",
    pdfFile: "abc-asd-qwertt-qweqwc-op.pdf",
    address: {
      city: "Atlanta",
      country: "USA",
      state: "Georgia",
      street: "1865  Pleasant Hill Road",
    },
    avatar: "/assets/avatars/avatar-fran-perez.png",
    email: "fran.perez@devias.io",
    name: "Fran Perez",
    phone: "712-351-5711",
  },
  {
    id: "5e887b7602bdbc4dbb234b27",
    pdfFile: "abc-asd-qwertt-qweqwc-op.pdf",
    address: {
      city: "North Canton",
      country: "USA",
      state: "Ohio",
      street: "4894  Lakeland Park Drive",
    },
    avatar: "/assets/avatars/avatar-jie-yan-song.png",
    email: "jie.yan.song@devias.io",
    name: "Jie Yan Song",
    phone: "770-635-2682",
  },
  {
    id: "5e86809283e28b96d2d38537",
    pdfFile: "abc-asd-qwertt-qweqwc-op.pdf",
    address: {
      city: "Madrid",
      country: "Spain",
      name: "Anika Visser",
      street: "4158  Hedge Street",
    },
    avatar: "/assets/avatars/avatar-anika-visser.png",
    email: "anika.visser@devias.io",
    name: "Anika Visser",
    phone: "908-691-3242",
  },
  {
    id: "5e86805e2bafd54f66cc95c3",
    pdfFile: "abc-asd-qwertt-qweqwc-op.pdf",
    address: {
      city: "San Diego",
      country: "USA",
      state: "California",
      street: "75247",
    },
    avatar: "/assets/avatars/avatar-miron-vitold.png",
    email: "miron.vitold@devias.io",
    name: "Miron Vitold",
    phone: "972-333-4106",
  },
  {
    id: "5e887a1fbefd7938eea9c981",
    pdfFile: "abc-asd-qwertt-qweqwc-op.pdf",
    address: {
      city: "Berkeley",
      country: "USA",
      state: "California",
      street: "317 Angus Road",
    },
    avatar: "/assets/avatars/avatar-penjani-inyene.png",
    email: "penjani.inyene@devias.io",
    name: "Penjani Inyene",
    phone: "858-602-3409",
  },
  {
    id: "5e887d0b3d090c1b8f162003",
    pdfFile: "abc-asd-qwertt-qweqwc-op.pdf",
    address: {
      city: "Carson City",
      country: "USA",
      state: "Nevada",
      street: "2188  Armbrester Drive",
    },
    avatar: "/assets/avatars/avatar-omar-darboe.png",
    email: "omar.darobe@devias.io",
    name: "Omar Darobe",
    phone: "415-907-2647",
  },
  {
    id: "5e88792be2d4cfb4bf0971d9",
    pdfFile: "abc-asd-qwertt-qweqwc-op.pdf",
    address: {
      city: "Los Angeles",
      country: "USA",
      state: "California",
      street: "1798  Hickory Ridge Drive",
    },
    avatar: "/assets/avatars/avatar-siegbert-gottfried.png",
    email: "siegbert.gottfried@devias.io",
    name: "Siegbert Gottfried",
    phone: "702-661-1654",
  },
  {
    id: "5e8877da9a65442b11551975",
    pdfFile: "abc-asd-qwertt-qweqwc-op.pdf",
    address: {
      city: "Murray",
      country: "USA",
      state: "Utah",
      street: "3934  Wildrose Lane",
    },
    avatar: "/assets/avatars/avatar-iulia-albu.png",
    email: "iulia.albu@devias.io",
    name: "Iulia Albu",
    phone: "313-812-8947",
  },
  {
    id: "5e8680e60cba5019c5ca6fda",
    pdfFile: "abc-asd-qwertt-qweqwc-op.pdf",
    address: {
      city: "Salt Lake City",
      country: "USA",
      state: "Utah",
      street: "368 Lamberts Branch Road",
    },
    avatar: "/assets/avatars/avatar-nasimiyu-danai.png",
    email: "nasimiyu.danai@devias.io",
    name: "Nasimiyu Danai",
    phone: "801-301-7894",
  },
];


const useCarriers = (data, page, rowsPerPage) => {
  return useMemo(() => {
    return applyPagination(data, page, rowsPerPage);
  }, [page, rowsPerPage]);
};

const AdminPdfReports = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const carriers = useCarriers(data, page, rowsPerPage);
  const [loading, setLoading] = useState(false);
  let { reportId } = useParams();
  const [isEditOpen, setEditOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [name, setName] = useState('');
  const [section, setSection] = useState(reportId);
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
  
      const formData = new FormData();
      formData.append("file", file);
      formData.append("section", section); // Add demo data
      formData.append("page", "Corporate Information"); // Add demo data
      formData.append("name", name); // Add demo data
  
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
    } catch (error) {
        setFailure(true);
      console.error("Error uploading PDF file:", error.message);
    }
  };
  const theme = createTheme();

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
                  />
                )}
              </Stack>
            </Container>
          </Box>
          <Dialog open={isEditOpen} onClose={handleEditClose}>
            <DialogTitle>Add New File</DialogTitle>
            <DialogContent>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="section"
                  label="Section"
                  name="section"
                  inputProps={{ readOnly: true }}
                  defaultValue={section}
                />

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
                
                <FormGroup>
                  <Input
                    id="inputEmpGroupFile"
                    name="file"
                    type="file"
                    onChange={handleFileChange}
                    accept="application/pdf"
                  />
                </FormGroup>
            
              </Box>
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
