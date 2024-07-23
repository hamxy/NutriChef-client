import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile, updateProfile } from "../services/profileService";
import { Snackbar } from "@mui/joy";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    weight: "",
  });
  const [updateStatus, setUpdateStatus] = useState(null); // Track update status
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Control Snackbar visibility

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

  const handleSubmit = async (e) => {
    e.preventDefault();
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

  const handleSnackClose = () => {
    setSnackbarOpen(false);
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while fetching profile
  }

  return (
    <>
      <h1>Profile</h1>
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
        <div>
          <label htmlFor="weight">Weight:</label>
          <input
            id="weight"
            type="number"
            name="weight"
            min="1"
            max="200"
            value={formData.weight}
            onChange={handleChange}
          />
        </div>

        {/* Add other fields as needed */}
        <button type="submit">Update Profile</button>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackClose}
        color={updateStatus === "success" ? "success" : "warning"}
      >
        {updateStatus === "success"
          ? "Profile updated successfully!"
          : "Failed to update profile."}
      </Snackbar>
    </>
  );
};

export default Profile;
