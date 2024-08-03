import axiosInstance from "./axiosInstance";

const getProfile = async () => {
  try {
    const response = await axiosInstance.get("/profile");
    return response.data;
  } catch (error) {
    console.error("Error fetching profile", error);
    throw error;
  }
};

const updateProfile = async (profileData) => {
  try {
    const response = await axiosInstance.put("/profile", profileData);
    return response.data;
  } catch (error) {
    console.error("Error updating profile", error);
    throw error;
  }
};

const uploadPhoto = async (formData) => {
  try {
    const response = await axiosInstance.post(
      "/profile/upload-photo",
      formData
    );
    return response.data;
  } catch (error) {
    console.error("Error uploading photo", error);
    throw error;
  }
};

export { getProfile, updateProfile, uploadPhoto };
