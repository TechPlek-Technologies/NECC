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
} from "@mui/material";
import { RiDeleteBin2Line, RiExpandRightFill } from "react-icons/ri";
import { Scrollbar } from "../../components/Scrollbar";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import ReactQuill from "react-quill";

const token = window.localStorage.getItem("Token");
const domain = process.env.REACT_APP_API_DOMAIN;

export const CiTable = (props) => {
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
  const [failure, setFailure] = useState(false);

  const handleEditClick = (customer) => {
    setEditedOffice({
        id:customer.id,
      position: customer.position,
      description: customer.description,
    });
    console.log(customer);

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

      const formData = {
        position: editedOffice.position,
        description: editedOffice.description,
      };

      const response = await axios.put(
        `${domain}/corporateInformation/${editedOffice.id}`,
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
      const response = await axios.delete(`${domain}/corporateInformation/${id}`, {
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

  const handleQuill = (value) => {
    setEditedOffice((prev) => ({ ...prev, description: value }));
  };

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

  return (
    <Card>
      <Scrollbar>
        <Box >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Position</TableCell>
                <TableCell>Description</TableCell>
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
                      <div>{customer.position}</div>
                    </TableCell>
                    <TableCell>
                      <Stack alignItems="center" direction="row" spacing={2}>
                        <Typography variant="subtitle2">
                        <div
                        className="fixed-width-column"
                        dangerouslySetInnerHTML={{
                          __html: customer.description,
                        }}
                      ></div>
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
                label="position"
                name="position"
                value={editedOffice.position}
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
                value={editedOffice.description}
                onChange={handleQuill}
                style={{ minHeight: "200px" }}
                modules={modules}
              />
            </Grid>
           
          </Grid>

          <Button onClick={handleCloseEditDialog}>Close</Button>
          <Button onClick={handleUpdate}>Save Changes</Button>
        </DialogContent>
      </Dialog>
    </Card>
  );
};
