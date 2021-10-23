import React from 'react';
import '../styles/SearchBox.css';


const SearchBox = ({searchValue, setSearchValue}) => {
    const handleSearchChange = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <section className="header container">
            <div className="searchbox">
            <p className={`searchbox_text ${searchValue ? "searchbox_text2" : ""}`}>Discover Recipes</p>
            <input 
                type="search" 
                className={`input ${searchValue ? "input2" : ""}`}
                placeholder="Search" 
                value={searchValue}
                onChange={handleSearchChange}
            />
            </div>
        </section>
        
    ) 
}

export default SearchBox;