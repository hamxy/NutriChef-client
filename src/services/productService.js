import axios from "axios";
const API_URL = "http://localhost:3000/product";

const searchProducts = async (keyword) => {
  try {
    const response = await axios.post(
      `${API_URL}/search`,
      { keyword },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching product", error);
    throw error;
  }
};

export { searchProducts };
