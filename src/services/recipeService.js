import axiosInstance from "./axiosInstance";

export const createRecipe = async (recipeData) => {
  try {
    const response = await axiosInstance.post(`/recipe/create`, recipeData);
    return response;
  } catch (error) {
    console.error("Error creating recipe", error);
    throw error;
  }
};

export const getRecipes = async (page, limit, searchTerm, filter) => {
  try {
    const response = await axiosInstance.get("/recipe", {
      params: { page, limit, search: searchTerm, course: filter },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};
