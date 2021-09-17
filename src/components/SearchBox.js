import React, {useState} from 'react';
import '../styles/SearchBox.css';


const SearchBox = () => {
    const [searchValue, setSearchValue] = useState("");
    const handleSearchChange = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <section className="container">
            <div className="searchbox">
            <p className="searchbox_text">Discover Recipes</p>
            <input 
                type="search" 
                className="input"
                placeholder="Search" 
                value={searchValue}
                onChange={handleSearchChange}
            />
            </div>
        </section>    
    ) 
}

export default SearchBox;