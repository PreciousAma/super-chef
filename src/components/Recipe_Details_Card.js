import React from 'react';
import food from "../images/breakfast.jpg";
import '../styles/Recipe_Details_Card.css';
import Pill from './Pill.js';

const RecipeDetailsCard = () => { 
    return (
        <div className="recipe_details">
            <div className="details">
                <img className="img" src={food} alt="recipe"/>
                <div className="texts_details container">
                    <h1 className="Meal_name" >
                        Carrot bread with caramelized spiced banana
                    </h1>
                    <div className="Meal_types">
                        <Pill text="vegeterian" variant="secondary" />
                        <Pill text="choke" variant="primary" />
                        <Pill text="pasta" variant="primary" />
                        <Pill text="curry" variant="secondary" />
                        <Pill text="pasta" variant="primary" />
                        <Pill text="pasta" variant="primary" />
                        <Pill text="pasta" variant="primary" />
                        </div>
                    {/*<div className="Meal_type">
                        <h2 className="Meal_Category">
                            vegetarian
                        </h2>
                        <p className="Meal_tags">
                            pasta
                        </p>
                        <p className="Meal_tags">
                            curry
                        </p>
                        <p className="Meal_tags">
                            pasta
                        </p>
                        <p className="Meal_tags">
                            pasta
                        </p>
    </div>*/}
                    <h2 className="Meal_Area">
                        Italian
                    </h2>
                    <div className="Meal_ingredients">
                        <h3 className="subtitle">Ingredients</h3>
                        <ul className="list">
                            <li>honey 1/2 cup </li>                
                            <li>honey 1pc </li>                  
                            <li>honey 2tbsp</li>                  
                            <li>honey </li>                  
                        </ul>   
                    </div>
                    <div className="instruction_texts">
                        <h3 className="instruction_title">Instructions</h3>
                        <p className="instructions">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>   
                    </div>                                             
                    <a href="kfkjmgmgmgmm" className="link">
                        <span className="button">Watch Recipe Video</span>
                        <i className="fab fa-youtube icon link_icon"></i>
                    </a>                
            </div>       
        </div>
    </div>
    )
    
}

export default RecipeDetailsCard;