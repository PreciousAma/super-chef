import React from "react";
import food from "../images/breakfast.jpg";
import "../styles/Recipe_card.css";
import RecipeCard from "./Recipe_card";

const RecipeCards = ({ openDrawer, recipes, setRecipeId }) => {
  return (
    <section className="container">
      {recipes.length === 0 ? (
        <div>No recipes</div>
      ) : (
        <div className="recipe_cards">
          {recipes?.map((recipe) => {
            return (
              <RecipeCard
                key={recipe.idMeal}
                openDrawer={openDrawer}
                name={recipe.strMeal}
                image={recipe.strMealThumb}
                setRecipeId={setRecipeId}
                recipeId={recipe.idMeal}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default RecipeCards;
