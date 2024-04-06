import {
  Alert,
  Snackbar,
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

export const BranchCard = ({ office, key, handleKeyChange, id }) => {
  const [isEditOpen, setEditOpen] = useState(false);
  const [editedOffice, setEditedOffice] = useState({ ...office });
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
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
          {office?.branch && (
            <>
              {office.branch}
              {","}
              <br />
            </>
          )}
        </Typography>
        <Typography align="center" variant="body1">
          {office?.personName && (
            <>
              Contact Person: {office.personName}
              {","}
              <br />
            </>
          )}
          {office?.email && (
            <>
              Email: {office.email}
              {","}
              <br />
            </>
          )}
          {office?.phone && (
            <>
              {"Phone : "}
              {office.phone} <br />
            </>
          )}
          {office?.mobile && (
            <>
              {"Mobile : "}
              {office.mobile} <br />
            </>
          )}
          {office?.branchCode && (
            <>
              {"Branch Code : "}
              {office.branchCode} <br />
            </>
          )}
          {office?.address1 && (
            <>
              {office.address1}
              {","}
              <br />
            </>
          )}
          {office?.address2 && (
            <>
              {office.address2}
              {","}
              <br />
            </>
          )}
          {office?.city && (
            <>
              {office.city}
              {", "}
            </>
          )}

          {office?.state && (
            <>
              {office.state}
              {", "}
            </>
          )}

          {office?.state && (
            <>
              {office.country}
              {","}
              <br />
            </>
          )}

          {office?.gtag && (
            <>
              {"Gtag : "}
              {office.gtag} <br />
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
          onClick={() => {
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
