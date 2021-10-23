import React from 'react';
import food from "../images/breakfast.jpg";
import '../styles/Recipe_Details_Card.css';




const RecipeDetailsCard = () => { 
    return (
        <div className="recipe_details">
            <div className="details">
                <img className="img" src={food} alt="recipe"/>
                <div className="texts_details container">
                    <h1 className="Meal_name" >
                        Carrot bread with caramelized spiced banana
                    </h1>
                    <div className="Meal_type">
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
                    </div>
                    <h2 className="Meal_Area">
                        Italian
                    </h2>
                    <div className="Meal_ingredients">
                        <h3 className="subtitle">ingredients</h3>
                        <ul className="list">
                            <li>honey 1/2 cup </li>                  
                            <li>honey 1pc </li>                  
                            <li>honey 2tbsp</li>                  
                            <li>honey </li>                  
                        </ul>   
                    </div>
                    <p className="instructions">
                        BVGJSBVSGNSNGSNNNkkkkkkkkkkkkvvvvvv,
                        hfdbbbxnjskjcbxhjjkkixzhjnbzhzjkjkjkd,mn,jcxb,zjxkjdnj.Snskhudhnfdfhukirjnsjkflkwej
                        lkcxuydifdsnzfbujrfbuieiapoerhyergiweur9i
                    </p>                            
                    <a href="kfkjmgmgmgmm" className="link">
                        <span className="button">Watch Recipe Video</span>
                        <i  class="fab fa-youtube icon link_icon"></i>
                    </a>                
            </div>       
        </div>
    </div>
    )
    
}

export default RecipeDetailsCard;