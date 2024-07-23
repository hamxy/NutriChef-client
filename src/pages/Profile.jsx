import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:3000/profile", {
          withCredentials: true, // Include credentials (cookies)
        });

        if (response.data.authenticated) {
          setProfile(response.data.user);
          setLoading(false); // User is authenticated, render profile
        } else {
          navigate("/auth/login"); // Not authenticated, redirect to login
        }
      } catch (error) {
        console.error("Error fetching profile", error);
        navigate("/auth/login"); // Error occurred, redirect to login
      }
    };

    fetchProfile();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while fetching profile
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
};

export default Profile;
