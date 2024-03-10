import React, { useMemo, useState } from "react";
import {
  Box,
  Button,
  Card,
  DialogTitle,
  Dialog,
  DialogContent,
  IconButton,
  Grid,
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
  FormGroup,
} from "@mui/material";
import { RiDeleteBin2Line, RiExpandRightFill } from "react-icons/ri";
import { Scrollbar } from "../../components/Scrollbar";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { Input } from "reactstrap";

const token = window.localStorage.getItem("Token");
const domain = process.env.REACT_APP_API_DOMAIN;

export const CiPdftable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange = () => {},
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
    key=0,
    handleKeyChange=()=>{}
  } = props;

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editedItemId, setEditedItemId] = useState(null);
  const [editedOffice, setEditedOffice] = useState({});
  const [success, setSuccess] = useState(false);
  const [file,setFile]=useState(null)
  const [failure, setFailure] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleEditClick = (customer) => {
    setEditedOffice({
      id: customer.id,
      name: customer.name,
      file:customer.file,
    });

    setIsEditDialogOpen(true);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedOffice((prev) => ({ ...prev, [name]: value }));
  };
  

  const handleCloseEditDialog = () => {
    setIsEditDialogOpen(false);
    setEditedItemId(null);
  };

  const handleUpdate = async () => {
    try {
      if (!editedOffice) {
        throw new Error("No data available for upload");
      }

      const formData = new FormData();
      formData.append("name", editedOffice.name);
      formData.append("file", file);

      const response = await axios.put(
        `${domain}/cipdf/${editedOffice.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200) {
        setFailure(true);
        throw new Error("Failed to update PDF file");
      }

      // Handle successful upload
      setSuccess(true);
      handleKeyChange();
      console.log("PDF file updated successfully");
      setIsEditDialogOpen(false);
    } catch (error) {
      setFailure(true);
      console.error("Error uploading PDF file:", error.message);
    }
  };

  const handleDelete = async(id) => {
    try {
      const response = await axios.delete(`${domain}/cipdf/${id}`, {
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
      console.log("data deleted successfully");
    } catch (error) {
      setFailure(true);
      console.error("Error deleting PDF file:", error.message);
    }
  };

  return (
    <Card>
      <Scrollbar>
        <Box >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Filename</TableCell>
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
                      <div>{customer.name}</div>
                    </TableCell>
                    <TableCell>
                      <Stack alignItems="center" direction="row" spacing={2}>
                        <Typography variant="subtitle2">
                          {customer.pdfFileName}
                        </Typography>
                      </Stack>
                    </TableCell>

                   
                    <Stack
                      alignItems="center"
                      justifyContent="center"
                      direction="row"
                      spacing={2}
                    >
                      <TableCell>
                        {/* Add your edit and delete icons here */}
                        <Tooltip title="Edit" arrow>
                          <IconButton
                            sx={{
                              "&:hover": {
                                backgroundColor: "#e8f5e9", // Light green background on hover
                              },
                            }}
                            onClick={() => handleEditClick(customer)}
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
                            onClick={() => {
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

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onClose={handleCloseEditDialog}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <TextField
                label="Name"
                name="name"
                value={editedOffice.name}
                onChange={handleInputChange}
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

          <Button onClick={handleCloseEditDialog}>Close</Button>
          <Button onClick={handleUpdate}>Save Changes</Button>
        </DialogContent>
      </Dialog>
    </Card>
  );
};
