import { useState, useEffect, useCallback } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import { getRecipes } from "../services/recipeService";
import RecipeCard from "../components/Recipe/RecipeCard"; // A component to display each recipe

const RecipeExplorer = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  const loadRecipes = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getRecipes(page, 10, searchTerm, filter);
      setRecipes((prevRecipes) => {
        const uniqueRecipes = new Map();
        prevRecipes.concat(data.recipes).forEach((recipe) => {
          uniqueRecipes.set(recipe._id, recipe);
        });
        return Array.from(uniqueRecipes.values());
      });
      setHasMore(data.recipes.length > 0);
    } catch (error) {
      console.error("Error loading recipes", error);
    } finally {
      setLoading(false);
    }
  }, [page, searchTerm, filter]);

  useEffect(() => {
    loadRecipes();
  }, [loadRecipes]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
    setRecipes([]);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setPage(1);
    setRecipes([]);
  };

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Recipe Explorer
      </Typography>
      <TextField
        label="Search"
        value={searchTerm}
        onChange={handleSearchChange}
        fullWidth
        margin="normal"
      />
      <Box mt={2} mb={2}>
        <Button onClick={() => handleFilterChange("")}>All</Button>
        <Button onClick={() => handleFilterChange("breakfast")}>
          Breakfast
        </Button>
        <Button onClick={() => handleFilterChange("lunch")}>Lunch</Button>
        <Button onClick={() => handleFilterChange("dinner")}>Dinner</Button>
        <Button onClick={() => handleFilterChange("snack")}>Snack</Button>
      </Box>
      <Grid container spacing={2}>
        {recipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} key={recipe._id}>
            <RecipeCard recipe={recipe} />
          </Grid>
        ))}
      </Grid>
      {loading && (
        <Box display="flex" justifyContent="center" mt={2}>
          <CircularProgress />
        </Box>
      )}
      {hasMore && !loading && (
        <Box display="flex" justifyContent="center" mt={2}>
          <Button onClick={handleLoadMore}>Load More</Button>
        </Box>
      )}
    </Box>
  );
};

export default RecipeExplorer;
