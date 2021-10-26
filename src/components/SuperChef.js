import React, {useState} from 'react';
import Drawer from 'rc-drawer';
import SearchBox from './SearchBox';
import Banner from './Banner';
import '../styles/SuperChef.css';
import RecipeCard from './Recipe_card';
import RecipeDetailsCard from './Recipe_Details_Card';

const SuperChef = () => {
    const [searchValue, setSearchValue] = useState("");

    return ( 
        <main className={`main ${!searchValue ? "Home_Page_Background" : ""}`}>
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            {searchValue ? <RecipeCard /> : <Banner />}
            {/*<RecipeCard />*/}
            {/*<RecipeDetailsCard text={text} />*/}
            
            <Drawer 
                open={true}
                width="20vw"
                placement="left"
            >
                {/* <RecipeDetailsCard  /> */}
                <div>Drawer</div>
            </Drawer>
        </main>
    )
}

export default SuperChef;
