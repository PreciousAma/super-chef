import React, {useState} from 'react';
import { Api } from '../utils/Api';
import SearchBox from './SearchBox';
import Banner from './Banner';
import '../styles/SuperChef.css';
import RecipeCards from './Recipe_cards';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import RecipeDetailsCard from './Recipe_Details_Card';

const SuperChef = () => {
    const [searchValue, setSearchValue] = useState("");
    const [isOpen, setIsOpen] = React.useState(false);
    const [recipes, setRecipes] = useState();

    const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)    
    }


    const getRecipes = async () => {
        try {
          const { data } = await Api.get(`/search.php?s=${searchValue}`);
            setRecipes(data.meals);  
            console.log(data.meals);
        } catch (error) {
          const errorMessage = error.isAxiosError ? error.response.data.status_message : error.message;
          console.error({ errorMessage });
        }
      }


    return ( 
        <main className={`main ${!searchValue ? "Home_Page_Background" : ""}`}>
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}  getRecipes={getRecipes}/>
            {searchValue ? <RecipeCards toggleDrawer={toggleDrawer} /> : <Banner />}
            {/*<RecipeCard />*/}
            {/*<RecipeDetailsCard text={text} />*/}
            <Drawer
            open={isOpen}
            direction='right'
            onClose={toggleDrawer}
            >
                <button onClick={toggleDrawer} className="toggle_button"> <i className="fas fa-times toggle_icon"></i>Close</button>
                <RecipeDetailsCard />
            </Drawer>
        </main>
    )
}

export default SuperChef;
