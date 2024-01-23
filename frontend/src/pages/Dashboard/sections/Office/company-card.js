import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Stack,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { RiDeleteBin2Line, RiExpandRightFill } from "react-icons/ri";

export const CompanyCard = (props) => {
  const { office } = props;

  const [isEditOpen, setEditOpen] = useState(false);
  const [editedOffice, setEditedOffice] = useState({ ...office });

  const handleEditClick = () => {
    setEditedOffice({ ...office });
    setEditOpen(true);
  };

  const handleEditClose = () => {
    console.log("editedOffice", editedOffice);
    setEditOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedOffice((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: 3,
          }}
        >
          {/* <Avatar src={office.logo} variant="circle" /> */}
        </Box>
        <Typography align="center" gutterBottom variant="h5">
          {office.city}
        </Typography>
        <Typography align="center" variant="body1">
          {office?.name}
          {","}
          <br />
          {office?.addressLine1}
          {","}
          <br />
          {office?.addressLine2}
          {","}
          <br />
          {office?.addressLine3}
          {"-"}
          {office?.pincode}
          <br />
          {"Toll Free No : "}
          {office?.tollfreeNo?.join(" & ")} <br />
          {"Phone : "}
          {office?.phone?.join(", ")} <br />
          {"E-mail : "}
          {office?.email}{" "}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-around"
        spacing={2}
        sx={{ p: 2 }}
      >
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={handleEditClick}
        >
          <SvgIcon color="action" fontSize="small">
            <RiExpandRightFill />
          </SvgIcon>
          <Typography
            color="text.secondary"
            display="inline"
            variant="body2"
            sx={{
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            edit
          </Typography>
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <SvgIcon color="action" fontSize="small">
            <RiDeleteBin2Line />
          </SvgIcon>
          <Typography
            color="text.secondary"
            display="inline"
            variant="body2"
            sx={{
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            delete
          </Typography>
        </Stack>
      </Stack>
      <Dialog open={isEditOpen} onClose={handleEditClose}>
        <DialogTitle>Edit Office Address</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Name"
                name="name"
                defaultValue={office.name}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Address Line 1"
                name="addressLine1"
                defaultValue={office.addressLine1}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Address Line 2"
                name="addressLine2"
                defaultValue={office.addressLine2}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Address Line 3"
                name="addressLine3"
                defaultValue={office.addressLine3}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Pincode"
                name="pincode"
                defaultValue={office.pincode}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Toll Free"
                name="pincode"
                defaultValue={office.tollfreeNo}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Phone"
                name="phone"
                defaultValue={office.phone}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="E-mail"
                name="email"
                defaultValue={office.email}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleEditClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};
