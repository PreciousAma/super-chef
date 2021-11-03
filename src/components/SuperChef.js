import React, {useState} from 'react';
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

    const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)    
    }

    return ( 
        <main className={`main ${!searchValue ? "Home_Page_Background" : ""}`}>
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            {searchValue ? <RecipeCards toggleDrawer={toggleDrawer} /> : <Banner />}
            {/*<RecipeCard />*/}
            {/*<RecipeDetailsCard text={text} />*/}
            <Drawer
            open={isOpen}
            direction='right'
            onClose={toggleDrawer}
            >
                <button onClick={toggleDrawer} className="toggle_button"> <i class="fas fa-times toggle_icon"></i>Close</button>
                <RecipeDetailsCard />
            </Drawer>
        </main>
    )
}

export default SuperChef;
