import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { RiDeleteBin2Line, RiExpandRightFill } from "react-icons/ri";

const token = window.localStorage.getItem("Token");
const domain = process.env.REACT_APP_API_DOMAIN;

export const CompanyCard = ({office,key,handleKeyChange,id}) => {

  const [isEditOpen, setEditOpen] = useState(false);
  const [editedOffice, setEditedOffice] = useState({ ...office });
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const handleEditClick = () => {
    setEditedOffice({ ...office });
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
    try {
      if (!editedOffice) {
        throw new Error("No file selected");
      }

      console.log("editedOffice.tollfree",editedOffice)
      const formData = {
        type: editedOffice.type,
        tollfreeNo: editedOffice.tollfreeNo,
        pincode: editedOffice.pincode,
        phone: editedOffice.phone,
        name: editedOffice.name,
        email: editedOffice.email,
        addressLine3: editedOffice.addressLine3,
        addressLine2: editedOffice.addressLine2,
        addressLine1: editedOffice.addressLine1,
        city: editedOffice.city,
      };

      const response = await axios.put(
        `${domain}/office/${editedOffice.id}`,
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
      setEditOpen(false);
    } catch (error) {
      setFailure(true);
      console.error("Error uploading PDF file:", error.message);
    }
  };

  const handleDelete = async (officeId) => {
    try {
      const response = await axios.delete(`${domain}/office/${officeId}`, {
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

  useEffect(() => {
    // Function to fetch data
   
  }, [success]);

  return (
    <Card
      key={key}
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
        {office?.name && (
  <>
    {office.name}
    {","}
    <br />
  </>
)}
{office?.addressLine1 && (
  <>
    {office.addressLine1}
    {","}
    <br />
  </>
)}
{office?.addressLine2 && (
  <>
    {office.addressLine2}
    {","}
    <br />
  </>
)}
{office?.addressLine3 && (
  <>
    {office.addressLine3}
    {","}
    <br />
  </>
)}
{office?.addressLine3 && office?.pincode && (
  <>
    {"-"}
    {office.pincode}
    <br />
  </>
)}
{office?.tollfreeNo && (
  <>
    {"Toll Free No : "}
    {office.tollfreeNo}
    <br />
  </>
)}
{office?.phone && (
  <>
    {"Phone : "}
    {office.phone}
    <br />
  </>
)}
{office?.email && (
  <>
    {"E-mail : "}
    {office.email}
    {" "}
  </>
)}
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
            Edit
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
          onClick={()=>{
            handleDelete(id);
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
            Delete
          </Typography>
        </Stack>
      </Stack>
      <Dialog open={isEditOpen} onClose={handleEditClose}>
        <DialogTitle>Edit Office Address</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="City"
                name="city"
                defaultValue={office.city}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
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
                name="tollfreeNo"
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

            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="type"
                  label="Category"
                  name="type"
                  value={office.type || ""} // Make sure to bind the value of the Select to the state
                  onChange={handleInputChange}
                >
                  <MenuItem value={"Corporate office"}>
                    Corporate office
                  </MenuItem>
                  <MenuItem value={"Regional office"}>Regional office</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>

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
    </Card>
  );
};
