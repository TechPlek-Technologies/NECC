import {
  Alert,
  Snackbar,
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
import axios from "axios";



export const BranchTable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange = () => {},
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
    handleKeyChange = () => {},
    key = 0,
  } = props;
  const token = window.localStorage.getItem("Token");
const domain = process.env.REACT_APP_API_DOMAIN;

  const [isEditOpen, setEditOpen] = useState(false);
  const [editedOffice, setEditedOffice] = useState({  });
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleEditClick = (customer) => {
    setEditedOffice({ ...customer });
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedOffice((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    console.log(token)
    try {
      if (!editedOffice) {
        throw new Error("No file selected");
      }

      const formData = {
        gtag: editedOffice.gtag,
        branchCode: editedOffice.branchCode,
        email: editedOffice.email,
        mobile: editedOffice.mobile,
        phone: editedOffice.phone,
        address2: editedOffice.address2,
        address1: editedOffice.address1,
        city: editedOffice.city,
        country: editedOffice.country,
        state: editedOffice.state,
        personName: editedOffice.personName,
        branch: editedOffice.branch,
      };

      const response = await axios.put(
        `${domain}/branch/${editedOffice.id}`,
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
        setSuccessMsg(response.data.message);
        throw new Error("Failed to update PDF file");
      }

      // Handle successful upload
      setSuccess(true);

      setSuccessMsg("Edit Successfull");
      //   wait 2 sec beforererender
      setTimeout(() => {
        handleKeyChange(); // Trigger re-render
      }, 2000);

      setEditOpen(false);
    } catch (error) {
      setFailure(true);
      setSuccessMsg(error.response.data.message);
      console.error("Error uploading PDF file:", error.message);
    }
  };

  const handleDelete = async (officeId) => {
    try {
      const response = await axios.delete(`${domain}/branch/${officeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status !== 200) {
        setFailure(true);
        setSuccessMsg(response.data.message);
        throw new Error("Failed to delete PDF file");
      }

      // Handle successful delete
      setSuccess(true);
      setSuccessMsg(response.data.message);

      //   wait 2 sec beforererender
      setTimeout(() => {
        handleKeyChange(); // Trigger re-render
      }, 2000);
    } catch (error) {
      setFailure(true);
      setSuccessMsg(error.response.data.message);
      console.error("Error deleting PDF file:", error.message);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setFailure(false);
    setSuccess(false);
  };

  return (
    <Card key={key}>
      <Scrollbar>
        <Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Branch Name</TableCell>
                <TableCell>Contact Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Address 1</TableCell>
                <TableCell>Address 2</TableCell>
                <TableCell>City</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>Branch Code</TableCell>
                <TableCell>GTAG</TableCell>
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
                          {customer.branch}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{customer.personName}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.phone}</TableCell>
                    <TableCell>{customer.mobile}</TableCell>
                    <TableCell  sx={{ maxHeight: '30px', maxWidth: '120px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{customer.address1}</TableCell>
                    <TableCell  sx={{ maxHeight: '30px', maxWidth: '120px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{customer.address2}</TableCell>
                    <TableCell>{customer.city}</TableCell>
                    <TableCell>{customer.state}</TableCell>
                    <TableCell>{customer.country}</TableCell>
                    <TableCell>{customer.branchCode}</TableCell>
                    <TableCell  sx={{ maxWidth: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{customer.gtag}</TableCell>
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
      <Dialog open={isEditOpen} onClose={handleEditClose}>
        <DialogTitle>Edit Branch Details</DialogTitle>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Branch Name*"
              name="branch"
              onChange={handleInputChange}
              defaultValue={editedOffice.branch}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Contact Person*"
              name="personName"
              onChange={handleInputChange}
              defaultValue={editedOffice.personName}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Email"
              name="email"
              onChange={handleInputChange}
              defaultValue={editedOffice.email}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Phone"
              name="phone"
              onChange={handleInputChange}
              defaultValue={editedOffice.phone}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Mobile"
              name="mobile"
              onChange={handleInputChange}
              defaultValue={editedOffice.mobile}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Branch Code*"
              name="branchCode"
              onChange={handleInputChange}
              defaultValue={editedOffice.branchCode}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Address Line 1*"
              name="address1"
              onChange={handleInputChange}
              defaultValue={editedOffice.address1}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Address Line 2*"
              name="address2"
              onChange={handleInputChange}
              defaultValue={editedOffice.address2}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="City*"
              name="city"
              onChange={handleInputChange}
              defaultValue={editedOffice.city}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="State*"
              name="state"
              onChange={handleInputChange}
              defaultValue={editedOffice.state}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Country*"
              name="country"
              onChange={handleInputChange}
              defaultValue={editedOffice.country}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Google Maps Embed API*"
              name="gtag"
              onChange={handleInputChange}
              defaultValue={editedOffice.gtag}
              fullWidth
            />
          </Grid>
        </Grid>

        <DialogActions>
          <Button onClick={handleEditClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleUpdate();
            }}
            color="primary"
          >
            Save
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
          {successMsg}
        </Alert>
      </Snackbar>
      <Snackbar open={failure} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {successMsg}
        </Alert>
      </Snackbar>
    </Card>
  );
};
