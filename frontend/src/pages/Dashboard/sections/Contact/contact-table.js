import {
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

export const ContactTable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange = () => {},
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
  } = props;

  const [isEditOpen, setEditOpen] = useState(false);
  const [editedOffice, setEditedOffice] = useState({});


  const handleEditClick = (customer) => {
    setEditedOffice({
        id:customer.id,
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      location: `${customer.address.city}`,
    });
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };


  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedOffice((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Phone</TableCell>
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
                  <TableRow hover key={customer.id} >
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
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>
                      {customer.address.city}
                    </TableCell>
                    <TableCell>
                      {customer.phone}
                    </TableCell>
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
                          onClick={()=>{
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
        <DialogTitle>Edit Office Address</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Name"
                name="name"
                defaultValue={editedOffice.name}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="E-mail"
                name="email"
                defaultValue={editedOffice.email}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Phone"
                name="phone"
                defaultValue={editedOffice.phone}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Location"
                name="location"
                defaultValue={editedOffice.location}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
           
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={()=>{setEditOpen(false)}} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>{
            console.log(editedOffice)
          }} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};
