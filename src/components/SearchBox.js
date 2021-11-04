import React, { useState } from 'react';
import '../styles/SearchBox.css';


const SearchBox = ({searchValue, setSearchValue, getRecipes}) => {
    const [value, setValue] = useState('');
    
    const handleSearchChange = (event) => {
        if (event.key === 'Enter') { 
            setSearchValue(value);
            getRecipes();
        }
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    

    return (
        <section className="header container">
            <div className="searchbox">
            <p className={`searchbox_text ${searchValue ? "searchbox_text2" : ""}`}>Discover Recipes</p>
            <input 
                type="search" 
                className={`input ${searchValue ? "input2" : ""}`}
                placeholder="Search" 
                value={value}
                onChange={handleChange}
                onKeyPress={handleSearchChange}
            />
            </div>
        </section>
    ) 
}

export default SearchBox;