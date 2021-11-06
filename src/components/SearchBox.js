import React, { useState } from 'react';
import '../styles/SearchBox.css';


const SearchBox = ({searchValue, setSearchValue, getRecipes}) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleSearchChange = (event) => {
        if (event.key === 'Enter') { 
            setSearchValue(inputValue);
            getRecipes();
        }
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }
    

    return (
        <section className="header container">
            <div className="searchbox">
            <p className={`searchbox_text ${searchValue ? "searchbox_text2" : ""}`}>Discover Recipes</p>
            <input 
                type="search" 
                className={`input ${searchValue ? "input2" : ""}`}
                placeholder="Search" 
                value={inputValue}
                onChange={handleChange}
                onKeyPress={handleSearchChange}
            />
            </div>
        </section>
    ) 
}

export default SearchBox;