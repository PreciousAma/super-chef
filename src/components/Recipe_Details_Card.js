import React, {useState, useEffect} from 'react';
import { Api } from '../utils/Api';
import food from "../images/breakfast.jpg";
import '../styles/Recipe_Details_Card.css';
import Pill from './Pill.js';

const RecipeDetailsCard = ({ recipeId }) => { 
    const [recipeDetails, setRecipeDetails] = useState({});

    useEffect(() => {
        getRecipeDetails();

        return () => {
            setRecipeDetails({});
        }
    }, [recipeId]);

    // [{ indgredient: 'honey', measure: '1/2 cup'}, { indgredient: 'honey', measure: '1/2 cup'}];

    const recipeArray = Object.entries(recipeDetails)
        .filter((detail) => {
            return (detail[0].startsWith('strIngredient') && !!detail[1]) || (detail[0].startsWith('strMeasure') && !!detail[1]) 
        });

    const mealIngredients = [];

    recipeArray.forEach(([key, value]) => {
        const arrayIndex = key.slice(-1);
        mealIngredients[arrayIndex] = {  ...mealIngredients[arrayIndex], [key]: value };
    });

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
                        <Pill text= {recipeDetails.strCategory} variant="secondary" />
                        {recipeDetails.strTags?.split(",").map((tag) => { return <Pill text={tag} key={tag} variant="primary" /> })}
                    </div>

                    <h2 className="Meal_Area">
                        {recipeDetails.strArea}
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