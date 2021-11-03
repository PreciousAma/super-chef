import React from 'react';
import food from "../images/breakfast.jpg";
import '../styles/Recipe_card.css';
import RecipeCard from "./Recipe_card";

const RecipeCards = ({ toggleDrawer }) => {
        return (
            <section className="container">
                <div className="recipe_cards" >
                   <RecipeCard toggleDrawer={toggleDrawer}  /> 
                </div>
            </section>
        )
    }

    export default RecipeCards;