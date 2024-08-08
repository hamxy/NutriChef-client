import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getProfile,
  updateProfile,
  uploadPhoto,
} from "../services/profileService";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    weight: "",
  });
  const [photoFile, setPhotoFile] = useState(null); // State to store the selected file
  const [updateStatus, setUpdateStatus] = useState(null); // Track update status
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Control Snackbar visibility
  const [modalOpen, setModalOpen] = useState(false); // Control modal visibility

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();

        if (data.authenticated) {
          setProfile(data.user);
          setFormData(data.user);
          setLoading(false); // User is authenticated, render profile
        } else {
          navigate("/auth/login"); // Not authenticated, redirect to login
        }
      } catch (error) {
        navigate("/auth/login"); // Error occurred, redirect to login
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setPhotoFile(e.target.files[0]); // Store the selected file
    console.log(e.target.files[0]); // Log the file to ensure it is captured
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleModalClose();
    try {
      const data = await updateProfile(formData);

      if (data.authenticated) {
        setProfile(data.user); // Update profile with new data
        setFormData(data.user); // Update formData with new data
        setUpdateStatus("success"); // Set update status to success
      } else {
        navigate("/auth/login"); // Not authenticated, redirect to login
      }
    } catch (error) {
      setUpdateStatus("error"); // Set update status to error
    } finally {
      setSnackbarOpen(true); // Show the Snackbar
    }
  };

  const handlePhotoUpload = async (e) => {
    e.preventDefault();
    if (!photoFile) {
      console.error("No file selected");
      setUpdateStatus("error");
      setSnackbarOpen(true);
      return;
    }

    const formData = new FormData();
    formData.append("profilePhoto", photoFile);

    try {
      const response = await uploadPhoto(formData);
      console.log(response.status);
      const data = response.data;

      if (response.status === 200) {
        setProfile({ ...profile, profilePhoto: data.profilePhoto });
        setUpdateStatus("success");
        handleModalClose();
      } else {
        setUpdateStatus("error");
      }
    } catch (error) {
      setUpdateStatus("error");
    } finally {
      setSnackbarOpen(true); // Show the Snackbar
    }
  };

  const handleSnackClose = () => {
    setSnackbarOpen(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while fetching profile
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 4,
        }}
      >
        {(profile.profilePhoto && (
          <Avatar
            alt="Profile"
            src={`http://localhost:3000/${profile.profilePhoto}`}
            sx={{ width: 200, height: 200, mb: 2 }}
          />
        )) || (
          <Avatar
            alt="Profile"
            src={`http://localhost:3000/uploads/placeholder.png`}
            sx={{ width: 200, height: 200, mb: 2 }}
          />
        )}
        <Typography variant="h4" gutterBottom>
          {profile.name} {profile.surname}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {profile.email}
        </Typography>

        <Button variant="text" color="primary" onClick={handleModalOpen}>
          Edit Profile
        </Button>
      </Box>

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="edit-profile-modal"
        aria-describedby="edit-profile-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="edit-profile-modal" variant="h6" component="h2">
            Edit Profile
          </Typography>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Surname:</label>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
              />
            </div>

            <button type="submit">Update Profile</button>
          </form>
          <form onSubmit={handlePhotoUpload} style={{ marginTop: "20px" }}>
            <div>
              <label>Profile Photo:</label>
              <input
                type="file"
                name="profilePhoto"
                onChange={handleFileChange}
                style={{ display: "block", marginTop: "10px", border: "none" }}
              />
            </div>
            <button type="submit">Upload Photo</button>
          </form>
        </Box>
      </Modal>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }} // Position the Snackbar
      >
        <Alert
          onClose={handleSnackClose}
          severity={updateStatus === "success" ? "success" : "warning"}
        >
          {updateStatus === "success"
            ? "Profile updated successfully!"
            : "Failed to update profile."}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Profile;

// Wednesday 10:30
