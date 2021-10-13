import React, {useState} from 'react';
import SearchBox from './SearchBox';
import Banner from './Banner';
import '../styles/SuperChef.css';
import RecipeCard from "./Recipe_card";

const SuperChef = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <main className={`main ${!searchValue ? "Home_Page_Background" : ""}`}>
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            {searchValue ? <RecipeCard /> : <Banner />}
    {/*<RecipeCard />*/}
        </main>
    )
}

export default SuperChef;