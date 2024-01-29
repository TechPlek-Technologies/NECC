import { ThemeProvider } from "@emotion/react";
import { createTheme } from "../../../theme";
import Layout from "../layout/Layout";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useRef, useState } from "react";
import axios from "axios";



function AdminCorporateInformation() {
  const theme = createTheme();
  const domain = process.env.REACT_APP_API_DOMAIN;
  const [file, setFile] = useState(null); // State to store selected file
  const fileInputRef = useRef(null);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };



  const handleUpload = async () => {
    const token = window.localStorage.getItem("Token");
    try {
      if (!file) {
        throw new Error("No file selected");
      }
  
      const formData = new FormData();
      formData.append("file", file);
      formData.append("section", "section"); // Add demo data
      formData.append("page", "page"); // Add demo data
      formData.append("name", "name"); // Add demo data
  
      const response = await axios.post(`${domain}/uploads/pdfFiles`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
      });
  
      if (response.status !== 200) {
        throw new Error("Failed to upload PDF file");
      }
  
      // Handle successful upload
      console.log("PDF file uploaded successfully");
    } catch (error) {
      console.error("Error uploading PDF file:", error.message);
    }
  };
  
  const handleChange = (event) => {
    // Handle changes to other form fields (section, page, etc.)
  };

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
                <Stack spacing={3}>
                  <div>
                    <Typography variant="h4">Corporate Information</Typography>
                  </div>
                </Stack>
                <Stack>
                  <TextField
                    fullWidth
                    label="Last name"
                    name="lastName"
                    onChange={handleChange}
                    required
                    value={""}
                  />
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                    ref={fileInputRef} // Assign the ref to the file input element
                  />
                  <Button
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    onClick={() => fileInputRef.current.click()} // Trigger click on file input
                  >
                    Select File
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleUpload}
                    disabled={!file}
                  >
                    Upload
                  </Button>
                </Stack>
              </Container>
            </Box>
          </>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default AdminCorporateInformation;

