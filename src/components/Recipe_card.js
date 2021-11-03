import React from 'react';
import food from "../images/breakfast.jpg";

const RecipeCard = ({ toggleDrawer }) => {
    return (
        <div className="recipe_card" onClick={toggleDrawer}>
            <div className="recipe_card__image">
                <img className="img" src={food} alt="recipe"/>
            </div>
            <div className="recipe_card__texts">
                <p className="texts">Mango Soup</p>
            </div>
        </div>   
    )
}

export default RecipeCard;