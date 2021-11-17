import React from 'react';
import food from "../images/breakfast.jpg";

const RecipeCard = ({ toggleDrawer, name, image, setRecipeId, recipeId }) => {

    const handleClick = () => {
        setRecipeId(recipeId);
        toggleDrawer();
    }

    return (
        <div className="recipe_card" onClick={handleClick}>
            <img className="recipe_card__image" src={image} alt="recipe"/>
            <div className="recipe_card__texts">
                <p className="texts">{name}</p>
            </div>
        </div>   
    )
}

export default RecipeCard;