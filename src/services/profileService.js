import axios from "axios";

const API_URL = "http://localhost:3000";

const getProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/profile`, {
      withCredentials: true, // Include credentials (cookies)
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching profile", error);
    throw error;
  }
};

const updateProfile = async (profileData) => {
  try {
    const response = await axios.put(`${API_URL}/profile`, profileData, {
      withCredentials: true, // Include credentials (cookies)
    });
    return response.data;
  } catch (error) {
    console.error("Error updating profile", error);
    throw error;
  }
};

const uploadPhoto = async (formData) => {
  const response = await axios.post(
    `${API_URL}/profile/upload-photo`,
    formData,
    {
      withCredentials: true, // Include credentials (cookies)
    }
  );

  return response;
};

export { getProfile, updateProfile, uploadPhoto };
