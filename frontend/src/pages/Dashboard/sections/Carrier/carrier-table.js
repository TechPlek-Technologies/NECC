import React, { useMemo, useState } from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Dialog,
  DialogContent,
  IconButton,
  Input,
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
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

export const CarrierTable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange = () => {},
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
  } = props;

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editedItemId, setEditedItemId] = useState(null);
  const [editedDesignation, setEditedDesignation] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [text, setText] = useState("");

  const handleEditClick = (itemId, designation, description) => {
    setEditedItemId(itemId);
    setEditedDesignation(designation);
    setEditedDescription(description);
    setIsEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setIsEditDialogOpen(false);
    setEditedItemId(null);
    setEditedDesignation("");
    setEditedDescription("");
  };

  const handleSaveChanges = async () => {
    // Implement your logic to send the updated values via Axios
    // try {
    //   const response = await axios.put(`/api/items/${editedItemId}`, {
    //     designation: editedDesignation,
    //     description: editedDescription,
    //   });
    console.log(editedDesignation);
    console.log(editedDescription);

    // Handle the response, e.g., show success message
    console.log("Update successful");

    setText(editedDescription);
    // Close the edit dialog
    handleCloseEditDialog();
    // } catch (error) {
    //   // Handle errors, e.g., show error message
    //   console.error("Update failed", error);
    // }
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
      <div>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
              
                <TableCell>Designation</TableCell>
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
                      <Stack alignItems="center" direction="row" spacing={2}>
                        <Typography variant="subtitle2">
                          {customer.name}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell
                      style={{
                        width: "200px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <div className="fixed-width-column">{customer.email}</div>
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
                            onClick={() =>
                              handleEditClick(
                                customer.id,
                                customer.name,
                                customer.email
                              )
                            }
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
          <TextField
            label="Designation"
            name="designation"
            value={editedDesignation}
            onChange={(value) => setEditedDesignation(value)}
            fullWidth
          />
          
          <h6 style={{"marginTop":"15px"}} >Description</h6>
          <ReactQuill
            theme="snow"
            value={editedDescription}
            onChange={(value) => setEditedDescription(value)}
            style={{ minHeight: "200px" }}
            modules={modules}
          />
          <Button onClick={handleCloseEditDialog}>Close</Button>
          <Button onClick={handleSaveChanges}>Save Changes</Button>
        </DialogContent>
      </Dialog>
    </Card>
  );
};
