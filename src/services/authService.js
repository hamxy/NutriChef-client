import axios from "axios";

const url = "http://localhost:3000/auth";

export const login = async (email, password) => {
  try {
    await axios.post(
      `${url}/login`,
      { email, password },
      { withCredentials: true } // Important: Allow credentials (cookies)
    );
  } catch (error) {
    console.error("Error submitting form", error);
    throw error;
  }
};

export const register = async (email, password, name = "", surname = "") => {
  try {
    await axios.post(
      `${url}/signup`,
      { email, password, name, surname },
      { withCredentials: true } // Important: Allow credentials (cookies)
    );
  } catch (error) {
    console.error("Error submitting form", error);
    throw error;
  }
};
