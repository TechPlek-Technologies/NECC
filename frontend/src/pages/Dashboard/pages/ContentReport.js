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
import { CarrierTable } from "../sections/Carrier/carrier-table";
import { useSelection } from "../hooks/use-selection";
import Layout from "../layout/Layout";
import { applyPagination } from "../utils/apply-pagination";
import { createTheme } from "../../../theme";
import { ThemeProvider } from "@emotion/react";
import ReactQuill from "react-quill";
import axios from "axios";
import { useParams } from "react-router-dom";


const data1 = [
  {
    id: "5e887ac47eed253091be10cb",
    address: {
      city: "Cleveland",
      country: "USA",
      state: "Ohio",
      street: "2849 Fulton Street",
    },
    avatar: "/assets/avatars/avatar-carson-darrin.png",
    email:
      "carsonafsdf.darrin@devias.ioasdfasdfasdfasdfasdfsdaaaaaaafaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    name: "Carson Darrin",
    phone: "304-428-3097",
  },
  {
    id: "5e887b209c28ac3dd97f6db5",
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


const useCarriers = (data,page, rowsPerPage) => {
  return useMemo(() => {
    return applyPagination(data, page, rowsPerPage);
  }, [data,page, rowsPerPage]);
};


const token = window.localStorage.getItem("Token");
const domain = process.env.REACT_APP_API_DOMAIN;


const Carrier = () => {
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

  let { pagename,id } = useParams();
  
  const handleKeyChange = () => {
    setKey((prevKey) => prevKey + 1);
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
   
    try {
      if (!editedOffice) {
        throw new Error("No file selected");
      }

    
      const formData = {
        serial: editedOffice.serial, // Assuming section is defined somewhere in your code
        designation: editedOffice.designation,
        summary: editedOffice.summary,
        description: editedOffice.description
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
      setKey((prevKey) => prevKey + 1);
      console.log("PDF file uploaded successfully");
      setIsEditDialogOpen(false);
    } catch (error) {
      setFailure(true);
      console.error("Error uploading PDF file:", error.message);
    }
  };

  useEffect(() => {
    // Function to fetch data
    setLoading(true)
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
                      onClick={()=>setIsEditDialogOpen(true)}
                    >
                      New
                    </Button>
                  </div>
                </Stack>

                {loading ? (
                  <CircularProgress />
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

export default Carrier;
