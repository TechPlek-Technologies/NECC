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

export const PdfTable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange = () => {},
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
    section = "",
  } = props;
  console.log(items);

  const [isEditOpen, setEditOpen] = useState(false);
  const [editedOffice, setEditedOffice] = useState({});
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [file, setFile] = useState(null); // Define file state

  const handleEditClick = (customer) => {
    console.log(customer)
    setEditedOffice({
      ...customer,
      name: customer.name,
      file:file // 
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

  return (
    <Card>
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
