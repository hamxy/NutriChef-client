import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/recipes/${recipe._id}`);
  };

  return (
    <Card onClick={handleCardClick} style={{ cursor: "pointer" }}>
      {recipe.photo ? (
        <CardMedia
          component="img"
          height="140"
          image={`http://localhost:3000/${recipe.photo}`} // Adjust the path as needed
          alt={recipe.title}
        />
      ) : (
        <CardMedia
          component="img"
          height="140"
          image={`http://localhost:3000/uploads/placeholderRecipe.jpg`} // Adjust the path as needed
          alt={recipe.title}
        />
      )}

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {recipe.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
