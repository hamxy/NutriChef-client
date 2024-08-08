import React, { useState } from "react";
import {
  Modal,
  TextField,
  List,
  ListItem,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { searchProducts, createProduct } from "../../services/productService";
import ProductCreationForm from "./ProductCreationForm";

const ProductSearch = ({ onAddProduct }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreationModalOpen, setIsCreationModalOpen] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearchChange = async (e) => {
    setSearchTerm(e.target.value);
    setSearchPerformed(true);
    if (e.target.value.length > 2) {
      try {
        const results = await searchProducts(e.target.value);
        setSearchResults(results);
      } catch (error) {
        console.error("Error searching for products:", error);
      }
    } else {
      setSearchResults([]);
      setSearchPerformed(false);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setSearchPerformed(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSearchTerm("");
    setSearchResults([]);
  };

  const handleOpenCreationModal = () => {
    setIsCreationModalOpen(true);
  };

  const handleCloseCreationModal = () => {
    setIsCreationModalOpen(false);
  };

  const handleAddProduct = (product) => {
    onAddProduct(product);
    handleCloseCreationModal();
  };

  const handleAddNewProduct = async (productData) => {
    try {
      const createdProduct = await createProduct(productData);
      handleAddProduct(createdProduct);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <Box>
      <Button variant="contained" onClick={handleOpenModal}>
        Add product
      </Button>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            p: 2,
            bgcolor: "white",
            mt: "10vh",
            mx: "auto",
            maxWidth: 450,
            overflowY: "auto",
            maxHeight: "80vh",
          }}
        >
          <Box sx={{ textAlign: "right" }}>
            <Button variant="contained" onClick={handleCloseModal}>
              Close
            </Button>
          </Box>
          <TextField
            label="Search for a product"
            value={searchTerm}
            onChange={handleSearchChange}
            fullWidth
            margin="normal"
          />
          <List>
            {searchResults.length > 0
              ? searchResults.map((product) => (
                  <ListItem
                    button
                    key={product._id}
                    onClick={() => handleAddProduct(product)}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="body1">{product.name}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Calories: {product.kcal}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Carbs: {product.carbs}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Protein: {product.protein}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Fat: {product.fat}
                      </Typography>
                    </Box>
                  </ListItem>
                ))
              : searchPerformed && (
                  <Typography variant="body1">
                    Nothing found. Do you want to add a product?
                    <Button variant="text" onClick={handleOpenCreationModal}>
                      Add Product
                    </Button>
                  </Typography>
                )}
          </List>
          {searchResults.length > 0 && (
            <Typography variant="body1">
              Didn't find your product?
              <Button variant="text" onClick={handleOpenCreationModal}>
                Add Product
              </Button>
            </Typography>
          )}
        </Box>
      </Modal>
      <Modal open={isCreationModalOpen} onClose={handleCloseCreationModal}>
        <Box
          sx={{
            p: 2,
            bgcolor: "white",
            mt: "10vh",
            mx: "auto",
            maxWidth: 450,
            overflowY: "auto",
            maxHeight: "80vh",
          }}
        >
          <ProductCreationForm onAddProduct={handleAddNewProduct} />
        </Box>
      </Modal>
    </Box>
  );
};

export default ProductSearch;
