import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "../../../theme";
import Layout from "../layout/Layout";
import { Box, Button, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Stack, SvgIcon, TextField, Typography } from "@mui/material";
import { InvestorsInnerTab } from "../sections/InvestorsTab/investors-tab-inner";
import { Link } from "react-router-dom";
import axios from "axios";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { ContentInnerTab } from "../sections/Content/content-inner-tab";

function Content() {
  const theme = createTheme();
  const domain = process.env.REACT_APP_API_DOMAIN;
const token = window.localStorage.getItem("Token");
  
  const [tabs, setTabs] = useState([]);
  const [isEditOpen, setEditOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [key, setKey] = useState(0);
  const [loading, setLoading] = useState(false);


  const handleUpload = async () => {
    setLoading(true);
    try {
      if (category.length===0) {
        throw new Error("No name selected");
      }

    
      const formData = {
        name: category,
      };


      const response = await axios.post(`${domain}/page`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 200) {
        throw new Error("Failed to create page");
      }

      // Handle successful upload
      
      setKey((prevKey) => prevKey + 1);
      console.log("created  successfully");
      setEditOpen(false);
    } catch (error) {
      console.error("Error uploading PDF file:", error.message);
      setLoading(false);
    }
  };


  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${domain}/page`);
        setTabs(response.data); // Set the fetched data into state
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
          <>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                py: 8,
              }}
            >
              <Container maxWidth="lg">
                <Stack spacing={4}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={4}
                  >
                    <Stack spacing={1}>
                      <Typography variant="h4">Content Section</Typography>
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
                 
                    <Grid container spacing={3}>
                      {tabs.map((tab, index) => (
                        <Grid
                          item
                          key={index}
                          xs={12}
                          sm={6}
                          lg={3}
                          style={{ margin: "4px 0" }}
                        >
                          <Link
                            to={`/admin/content/${tab.name}/${tab.id}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            <ContentInnerTab
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
                      ))}
                    </Grid>
                 
                </Stack>
              </Container>
            </Box>
          </>

        
          <Dialog open={isEditOpen} onClose={()=>{setEditOpen(false)}}>
            <DialogTitle>Add New Page</DialogTitle>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <TextField
                    label="Name"
                    name="name"
                    onChange={(e)=>setCategory(e.target.value)}
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
              <Button
                onClick={() => {
                  handleUpload();
                }}
                color="primary"
              >
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default Content;
