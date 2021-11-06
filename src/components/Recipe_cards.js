import React from 'react';
import food from "../images/breakfast.jpg";
import '../styles/Recipe_card.css';
import RecipeCard from "./Recipe_card";

const RecipeCards = ({ toggleDrawer, recipes }) => {
    console.log({ recipes });

        return (
            <section className="container">
            <div className="recipe_cards" >
                {recipes.map((recipe) => {
                    return <RecipeCard toggleDrawer={toggleDrawer} name={recipe.strMeal} key={recipe.idMeal} image={recipe.strMealThumb} /> 
                })}
            </div>
            </section>
        )
    }

    export default RecipeCards;