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
  Alert,
  Snackbar,
} from "@mui/material";
import { CarrierTable } from "../sections/Carrier/carrier-table";
import { useSelection } from "../hooks/use-selection";
import Layout from "../layout/Layout";
import { applyPagination } from "../utils/apply-pagination";
import { createTheme } from "../../../theme";
import { ThemeProvider } from "@emotion/react";
import ReactQuill from "react-quill";
import axios from "axios";
import { useParams } from "react-router-dom";

const useCarriers = (data, page, rowsPerPage) => {
  return useMemo(() => {
    return applyPagination(data, page, rowsPerPage);
  }, [data, page, rowsPerPage]);
};

const Carrier = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [key, setKey] = useState(0);
  const [data, setData] = useState([]);
  const carriers = useCarriers(data, page, rowsPerPage);
  const [loading, setLoading] = useState(false);
  const [editedOffice, setEditedOffice] = useState({});
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const token = window.localStorage.getItem("Token");
  const domain = process.env.REACT_APP_API_DOMAIN;

  let { pagename, id } = useParams();

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedOffice((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuill = (value) => {
    setEditedOffice((prev) => ({ ...prev, description: value }));
  };

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);

  const theme = createTheme();

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["image", "link"],
          [
            {
              color: [
                "#000000",
                "#e60000",
                "#ff9900",
                "#ffff00",
                "#008a00",
                "#0066cc",
                "#9933ff",
                "#ffffff",
                "#facccc",
                "#ffebcc",
                "#ffffcc",
                "#cce8cc",
                "#cce0f5",
                "#ebd6ff",
                "#bbbbbb",
                "#f06666",
                "#ffc266",
                "#ffff66",
                "#66b966",
                "#66a3e0",
                "#c285ff",
                "#888888",
                "#a10000",
                "#b26b00",
                "#b2b200",
                "#006100",
                "#0047b2",
                "#6b24b2",
                "#444444",
                "#5c0000",
                "#663d00",
                "#666600",
                "#003700",
                "#002966",
                "#3d1466",
              ],
            },
          ],
        ],
        handlers: {},
      },
    }),
    []
  );

  const handleUpload = async () => {
    setLoading(true);
    try {
      if (!editedOffice) {
        throw new Error("No office selected");
      }

      const formData = {
        serial: editedOffice.serial, // Assuming section is defined somewhere in your code
        designation: editedOffice.designation,
        summary: editedOffice.summary,
        description: editedOffice.description,
      };

      const response = await axios.post(`${domain}/content`, formData, {
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
      setSuccessMsg(response.data.message);
      setKey((prevKey) => prevKey + 1);
      setIsEditDialogOpen(false);
    } catch (error) {
      setFailure(true);
      setSuccessMsg(error.response.data.message);
      console.error("Error uploading PDF file:", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Function to fetch data
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${domain}/content`);
        setData(response.data); // Set the fetched data into state
        console.log(response.data); // Set the fetched data into state
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
                    <Typography variant="h4">Job Openings</Typography>
                  </Stack>
                  <div>
                    <Button
                      startIcon={
                        <SvgIcon fontSize="small">
                          <PlusIcon />
                        </SvgIcon>
                      }
                      variant="contained"
                      onClick={() => setIsEditDialogOpen(true)}
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
                  <CarrierTable
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
          <Dialog
            open={isEditDialogOpen}
            onClose={() => setIsEditDialogOpen(false)}
          >
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
                    label="Designation"
                    name="designation"
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    label="Summary"
                    name="summary"
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <Typography variant="subtitle1" component="div">
                    Description
                  </Typography>
                  <ReactQuill
                    theme="snow"
                    name="description"
                    onChange={handleQuill}
                    modules={modules}
                  />
                </Grid>
              </Grid>

              <Button
                onClick={() => {
                  setIsEditDialogOpen(false);
                }}
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  console.log(editedOffice);
                  handleUpload();
                }}
              >
                Save Changes
              </Button>
            </DialogContent>
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
};

export default Carrier;
