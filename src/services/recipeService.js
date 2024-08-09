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

export const updateRecipe = async (id, formData) => {
  const response = await axiosInstance.put(`/recipe/${id}`, formData);
  return response.data;
};

export const deleteRecipe = async (id) => {
  return await axiosInstance.delete(`/recipe/${id}`);
};

export const getRecipeById = async (id) => {
  const response = await axiosInstance.get(`/recipe/${id}`);
  return response.data;
};
