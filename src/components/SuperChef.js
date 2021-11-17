import React, {useState} from 'react';
import { Api } from '../utils/Api';
import SearchBox from './SearchBox';
import Banner from './Banner';
import capitalizeFirstLetter from './../helpers/Capitalize'
import '../styles/SuperChef.css';
import RecipeCards from './Recipe_cards';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import RecipeDetailsCard from './Recipe_Details_Card';

const SuperChef = () => {
    const [searchValue, setSearchValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [recipeId, setRecipeId] = useState(null);

    const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)    
    }


    const getRecipes = async (value) => {
      try {
        const { data } = await Api.get(`/search.php?s=${value}`);
          setRecipes(data.meals ?? []);  // set the state to the data from the API
      } catch (error) {
        const errorMessage = error.isAxiosError ? error.response.data.status_message : error.message;
        console.error({ errorMessage });
      }
    }


    return ( 
        <main className={`main ${!searchValue ? "Home_Page_Background" : ""}`}>
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} getRecipes={getRecipes}/>
            {searchValue ? <RecipeCards toggleDrawer={toggleDrawer} recipes={recipes} setRecipeId={setRecipeId} /> : <Banner />}

            <Drawer
            open={isOpen}
            direction='right'
            onClose={toggleDrawer}
            >
                <button onClick={toggleDrawer} className="toggle_button"> <i className="fas fa-times toggle_icon"></i>Close</button>
                <RecipeDetailsCard recipeId={recipeId} />
            </Drawer>
        </main>
    )
}

export default SuperChef;
