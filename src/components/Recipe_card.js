import React from 'react';
import food from "../images/breakfast.jpg";

const RecipeCard = ({ toggleDrawer, name, image }) => {
    return (
        <div className="recipe_card" onClick={toggleDrawer}>
                <img className="img" src={image} alt="recipe"/>
            <div className="recipe_card__texts">
                <p className="texts">{name}</p>
            </div>
        </div>   
    )
}

export default RecipeCard;