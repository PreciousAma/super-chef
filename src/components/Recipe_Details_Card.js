import React, {useState, useEffect} from 'react';
import { Api } from '../utils/Api';
import food from "../images/breakfast.jpg";
import '../styles/Recipe_Details_Card.css';
import Pill from './Pill.js';

const RecipeDetailsCard = ({ recipeId }) => { 
        console.log(recipeId);
    const[recipeDetails, setRecipeDetails] = useState({});

        // console.log ({recipeDetails});

        useEffect(() => {
            getRecipeDetails();

            return () => {
                setRecipeDetails({});
            }
        }, [recipeId]);


    const getRecipeDetails = async () => {
        try {
          const { data } = await Api.get(`/lookup.php?i=${recipeId}`);
          setRecipeDetails(data.meals ? data.meals[0] : {});  // set the state to the data from the API
        } catch (error) {
          const errorMessage = error.isAxiosError ? error.response.data.status_message : error.message;
          console.error({ errorMessage });
        }
      }

    return (
        <div className="recipe_details">
            <div className="details">
                <img className="img" src={recipeDetails.strMealThumb} alt="recipe"/>
                <div className="texts_details container">
                    <h1 className="Meal_name" >
                       {recipeDetails.strMeal}
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
                            {recipeDetails.strInstructions}
                        </p>   
                    </div>                                             
                    <a href={recipeDetails.strYoutube} className="link">
                        <span className="button">Watch Recipe Video</span>
                        <i className="fab fa-youtube icon link_icon"></i>
                    </a>                
            </div>       
        </div>
    </div>
    )
    
}

export default RecipeDetailsCard;