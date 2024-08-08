import axiosInstance from "./axiosInstance";

const searchProducts = async (keyword) => {
  try {
    const response = await axiosInstance.post("/product/search", { keyword });
    return response.data;
  } catch (error) {
    console.error("Error fetching product", error);
    throw error;
  }
};

const createProduct = async (productData) => {
  const response = await axiosInstance.post("/product/create", productData);
  return response.data.product;
};

export { searchProducts, createProduct };
