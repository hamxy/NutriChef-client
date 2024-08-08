import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
} from "@mui/material";
import ProductSearch from "../Product/ProductSearch";
import { createRecipe } from "../../services/recipeService";

const RecipeCreationForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("breakfast");
  const [steps, setSteps] = useState([""]);
  const [products, setProducts] = useState([]);
  const [preparationTime, setPreparationTime] = useState(0);
  const [cookingTime, setCookingTime] = useState(0);

  const handleCourseSelection = (e) => {
    setCourse(e.target.value);
  };

  const handleAddStep = () => {
    setSteps([...steps, ""]);
  };

  const handleStepChange = (e, index) => {
    const newSteps = [...steps];
    newSteps[index] = e.target.value;
    setSteps(newSteps);
  };

  const handleDeleteLastStep = () => {
    if (steps.length > 1) {
      const newSteps = steps.slice(0, -1);
      setSteps(newSteps);
    }
  };

  const handleAddProduct = (product) => {
    setProducts([...products, { ...product, quantity: 100 }]);
  };

  const handleProductQuantityChange = (index, quantity) => {
    const newProducts = [...products];
    newProducts[index].quantity = quantity;
    setProducts(newProducts);
  };

  const handlePreparationTimeChange = (e) => {
    const value = e.target.value;
    // Ensure the input value is a number
    if (!isNaN(value)) {
      setPreparationTime(value);
    }
  };

  const handleCookingTimeChange = (e) => {
    const value = e.target.value;
    // Ensure the input value is a number
    if (!isNaN(value)) {
      setCookingTime(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recipeData = {
      title,
      description,
      course,
      steps,
      products,
      preparationTime: Number(preparationTime),
      cookingTime: Number(cookingTime), // Ensure the value is a number
    };
    try {
      const response = await createRecipe(recipeData);
      console.log("Recipe created successfully:", response);
    } catch (error) {
      console.error("Error creating recipe:", error);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Create a New Recipe
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
          autoComplete="off"
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={3}
          autoComplete="off"
        />
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Course
        </Typography>
        <Select
          labelId="course"
          id="course"
          value={course}
          label="Course"
          onChange={handleCourseSelection}
        >
          <MenuItem value={"breakfast"}>Breakfast</MenuItem>
          <MenuItem value={"lunch"}>Lunch</MenuItem>
          <MenuItem value={"dinner"}>Dinner</MenuItem>
          <MenuItem value={"snack"}>Snack</MenuItem>
        </Select>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Steps
        </Typography>
        {steps.map((step, index) => (
          <Box key={index} display="flex" alignItems="center">
            <TextField
              label={`Step ${index + 1}`}
              value={step}
              onChange={(e) => handleStepChange(e, index)}
              fullWidth
              margin="normal"
              autoComplete="off"
            />
          </Box>
        ))}
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button onClick={handleAddStep} variant="contained" color="primary">
            Add Step
          </Button>
          {steps.length > 1 && (
            <Button
              onClick={handleDeleteLastStep}
              variant="contained"
              color="error"
            >
              Delete Last Step
            </Button>
          )}
        </Box>
        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Products
        </Typography>
        <ProductSearch onAddProduct={handleAddProduct} />
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Quantity (grams or ml)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product, index) => (
                <TableRow key={index}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      value={product.quantity}
                      onChange={(e) =>
                        handleProductQuantityChange(index, e.target.value)
                      }
                      sx={{ width: "100px" }}
                      margin="normal"
                      autoComplete="off"
                      InputProps={{ inputProps: { min: 0 } }} // To ensure quantity is non-negative
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TextField
          label="Preparation Time (minutes)"
          type="number"
          value={preparationTime}
          onChange={handlePreparationTimeChange}
          fullWidth
          margin="normal"
          autoComplete="off"
          sx={{ mt: 2 }}
          InputProps={{ inputProps: { min: 0 } }} // To ensure preparation time is non-negative
        />
        <TextField
          label="Cooking Time (minutes)"
          type="number"
          value={cookingTime}
          onChange={handleCookingTimeChange}
          fullWidth
          margin="normal"
          autoComplete="off"
          sx={{ mt: 2 }}
          InputProps={{ inputProps: { min: 0 } }} // To ensure preparation time is non-negative
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Create Recipe
        </Button>
      </form>
    </Box>
  );
};

export default RecipeCreationForm;
