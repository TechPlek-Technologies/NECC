import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Snackbar,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Scrollbar } from "../../components/Scrollbar";
import { getInitials } from "../../utils/get-initials";
import { useState } from "react";
import { RiDeleteBin2Line, RiExpandRightFill } from "react-icons/ri";
import { FormGroup, Input } from "reactstrap";
import { capitalizeFirstLetterOfEachWord } from "../../utils/capitalise-word";
import axios from "axios";

export const PdfTable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange = () => {},
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
    section = "",
    key=0,
    handleKeyChange=()=>{}
  } = props;
  console.log(items);

  const [isEditOpen, setEditOpen] = useState(false);
  const [editedOffice, setEditedOffice] = useState({});
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [file, setFile] = useState(null); 
  

  const handleEditClick = (customer) => {
    console.log(customer);
    setEditedOffice({
      ...customer,
      name: customer.name,
    });

    setEditOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setFailure(false);
    setSuccess(false);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedOffice((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };


  const handleUpload = async () => {
    const token = window.localStorage.getItem("Token");
    const domain = process.env.REACT_APP_API_DOMAIN;
    try {
      
        if (!editedOffice|| !file) {
            throw new Error("No office data available for upload");
        }
  
        const formData = new FormData();
        formData.append("name", editedOffice.name); // Assuming name is part of the office data
        formData.append("eventID", editedOffice.eventID); // Assuming name is part of the office data
        formData.append("file", file); // Assuming file is a new file to upload

  
      const response = await axios.put(`${domain}/uploads/pdfFiles/${editedOffice.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
      });
  
      if (response.status !== 200) {
        setFailure(true);
        throw new Error("Failed to update PDF file");
      }
  
      // Handle successful upload
      setSuccess(true)
      handleKeyChange();
      console.log("PDF file updated successfully");
      setEditOpen(false);
    } catch (error) {
        setFailure(true);
      console.error("Error uploading PDF file:", error.message);
    }
  };
  const handleDelete = async (officeId) => {
    const token = window.localStorage.getItem("Token");
    const domain = process.env.REACT_APP_API_DOMAIN;
    try {
      const response = await axios.delete(`${domain}/uploads/pdfFiles/${officeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.status !== 200) {
        setFailure(true);
        throw new Error("Failed to delete PDF file");
      }
  
      // Handle successful delete
      setSuccess(true);
      handleKeyChange(); // Trigger re-render
      console.log("PDF file deleted successfully");
    } catch (error) {
      setFailure(true);
      console.error("Error deleting PDF file:", error.message);
    }
  };
  
  return (
    <Card key={key}>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>File Name</TableCell>
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  direction="row"
                  spacing={2}
                >
                  <TableCell>Action</TableCell>
                </Stack>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((customer) => {
                return (
                  <TableRow hover key={customer.id}>
                    <TableCell>
                      <Stack alignItems="center" direction="row" spacing={2}>
                        <Avatar src={customer.avatar}>
                          {getInitials(customer.name)}
                        </Avatar>
                        <Typography variant="subtitle2">
                          {customer.name}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{customer.pdfFileName}</TableCell>

                    <Stack
                      alignItems="center"
                      justifyContent="center"
                      direction="row"
                      spacing={2}
                    >
                      <TableCell>
                        <Tooltip title="Edit" arrow>
                          <IconButton
                            sx={{
                              "&:hover": {
                                backgroundColor: "#e8f5e9", // Light green background on hover
                              },
                            }}
                            onClick={() => {
                              handleEditClick(customer);
                            }}
                          >
                            <RiExpandRightFill />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete" arrow>
                          <IconButton
                            sx={{
                              "&:hover": {
                                backgroundColor: "#ffebee", // Light red background on hover
                              },
                            }}
                            onClick={()=>{
                              handleDelete(customer.id);
                            }}
                          >
                            <RiDeleteBin2Line />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </Stack>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
      <Dialog open={isEditOpen} onClose={handleEditClose}>
        <DialogTitle>Edit PDF</DialogTitle>
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
                defaultValue={capitalizeFirstLetterOfEachWord(section) || ""}
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
                onChange={handleInputChange}
                value={editedOffice.name || ""}
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
            }}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            // disabled={!file || !name}
            onClick={() => {
              console.log(editedOffice);
              handleUpload();
            }}
            color="primary"
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          File Uploaded Successfully
        </Alert>
      </Snackbar>
      <Snackbar open={failure} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          File Upload Failed
        </Alert>
      </Snackbar>
    </Card>
  );
};
