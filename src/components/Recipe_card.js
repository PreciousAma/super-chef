import React from 'react';
import food from "../images/breakfast.jpg";
import '../styles/Recipe_card.css';

const RecipeCard = ({ toggleDrawer }) => {
        return (
            <section className="container">
                <div className="recipe_cards" >
                    <div className="recipe_card" onClick={toggleDrawer}>
                        <div className="recipe_card__image">
                            <img className="img" src={food} alt="recipe"/>
                        </div>
                        <div className="recipe_card__texts">
                            <p className="texts">Mango Soup</p>
                        </div>
                    </div>
                    <div className="recipe_card"  onClick={toggleDrawer}>
                        <div className="recipe_card__image">
                            <img className="img"src={food} alt="recipe"/>
                        </div>
                        <div className="recipe_card__texts">
                            <p className="texts">Mango SoupMMMMMmmmmmmmmmmmmmmmmmmm</p>
                        </div>
                    </div>
                    <div className="recipe_card"  onClick={toggleDrawer}>
                        <div className="recipe_card__image">
                            <img className="img"src={food} alt="recipe"/>
                        </div>
                        <div className="recipe_card__texts">
                            <p className="texts">Mango Soup</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    export default RecipeCard;