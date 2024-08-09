import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../../services/recipeService";
import {
  Box,
  Typography,
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import styled from "styled-components";

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const data = await getRecipeById(id);
        console.log(data);
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={2}>
        <CircularProgress />
      </Box>
    );
  }

  if (!recipe) {
    return <Typography variant="h6">Recipe not found</Typography>;
  }

  return (
    <Container>
      <StyledCard>
        {recipe.photo ? (
          <CardMedia
            component="img"
            height="400"
            image={`http://localhost:3000/${recipe.photo}`}
            alt={recipe.title}
          />
        ) : (
          <CardMedia
            component="img"
            height="400"
            image={`http://localhost:3000/uploads/placeholderRecipe.jpg`}
            alt={recipe.title}
          />
        )}
        <CardContent>
          <Typography variant="h2" gutterBottom>
            {recipe.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            <strong>Created by: </strong>
            {recipe.createdBy.email}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            gutterBottom
            mb={5}
          >
            <strong>Course:</strong>{" "}
            {recipe.course.charAt(0).toUpperCase() + recipe.course.slice(1)}
          </Typography>
          <Typography variant="body1" gutterBottom mb={7}>
            {recipe.description}
          </Typography>

          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent="space-between"
            gap={1}
            mt={2}
          >
            <Typography variant="body2">
              <strong>Preparation Time:</strong> {recipe.preparationTime}{" "}
              minutes
            </Typography>
            <Typography variant="body2">
              <strong>Cooking Time:</strong> {recipe.cookingTime} minutes
            </Typography>
            <Typography variant="body2">
              <strong>Total Calories:</strong> {recipe.totalCalories}
            </Typography>
            <Typography variant="body2">
              <strong>Carbs:</strong> {recipe.totalCarbs}g
            </Typography>
            <Typography variant="body2">
              <strong>Protein:</strong> {recipe.totalProtein}g
            </Typography>
            <Typography variant="body2">
              <strong>Fat:</strong> {recipe.totalFat}g
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>
            Ingredients
          </Typography>
          <List>
            {recipe.products.map((item, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`${item.product.name} - ${item.quantity}g`}
                />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>
            Steps
          </Typography>
          <List>
            {recipe.steps.map((step, index) => (
              <ListItem key={index}>
                <ListItemText primary={`${index + 1}. ${step}`} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </StyledCard>
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 800px; /* Adjust this value to make the card wider */
  margin: 0 auto; /* Center the card */
`;

export default RecipePage;
