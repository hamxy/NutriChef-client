import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const ProductCreationForm = ({ onAddProduct }) => {
  const [name, setName] = useState("");
  const [kcal, setKcal] = useState("");
  const [carbs, setCarbs] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [gramInTableSpoon, setGramInTableSpoon] = useState("");
  const [gramInTeaSpoon, setGramInTeaSpoon] = useState("");
  const [gramInItem, setGramInItem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      kcal,
      carbs,
      protein,
      fat,
      gramInTableSpoon,
      gramInTeaSpoon,
      gramInItem,
    };
    onAddProduct(newProduct);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h6">Add New Product</Typography>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Calories (kcal)"
        value={kcal}
        onChange={(e) => setKcal(e.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Carbs (g)"
        value={carbs}
        onChange={(e) => setCarbs(e.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Protein (g)"
        value={protein}
        onChange={(e) => setProtein(e.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Fat (g)"
        value={fat}
        onChange={(e) => setFat(e.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Gram in Tablespoon"
        value={gramInTableSpoon}
        onChange={(e) => setGramInTableSpoon(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Gram in Teaspoon"
        value={gramInTeaSpoon}
        onChange={(e) => setGramInTeaSpoon(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Gram in Item"
        value={gramInItem}
        onChange={(e) => setGramInItem(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        onClick={handleSubmit}
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Add Product
      </Button>
    </Box>
  );
};

export default ProductCreationForm;
