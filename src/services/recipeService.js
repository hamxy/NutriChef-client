import axios from "axios";

const API_URL = "http://localhost:3000";

export const createRecipe = async (recipeData) => {
  try {
    const response = await axios.post(`${API_URL}/recipes`, recipeData, {
      withCredentials: true, // Include credentials (cookies)
    });
    return response.data;
  } catch (error) {
    console.error("Error creating recipe", error);
    throw error;
  }
};
