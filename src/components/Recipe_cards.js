import React from 'react';
import food from "../images/breakfast.jpg";
import '../styles/Recipe_card.css';
import RecipeCard from "./Recipe_card";

const RecipeCards = ({ toggleDrawer, recipes, setRecipeId }) => {
        return (
            <section className="container">
            <div className="recipe_cards" >
                {recipes?.map((recipe) => {
                    return <RecipeCard key={recipe.idMeal} toggleDrawer={toggleDrawer} name={recipe.strMeal}  image={recipe.strMealThumb} setRecipeId={setRecipeId} recipeId={recipe.idMeal} /> 
                })}
            </div>
            </section>
        )
    }

    export default RecipeCards;