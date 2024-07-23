import axios from "axios";

const url = "http://localhost:3000/auth/login";

export const login = async (email, password) => {
  try {
    await axios.post(
      url,
      { email, password },
      { withCredentials: true } // Important: Allow credentials (cookies)
    );
  } catch (error) {
    console.error("Error submitting form", error);
    throw error;
  }
};
