import React, {useState} from 'react';
import '../styles/SearchBox.css';


const SearchBox = () => {
    
    const [searchValue, setSearchValue] = useState("");

   const handleSearchChange = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div className='searchbox'>
            <p className='searchbox_text'>Discover Recipes</p>
            <input 
                className='input'
                type='search'  
                placeholder='Search' 
                value={searchValue}
                onChange={handleSearchChange}
            />
        </div>
        
    ) 
}

export default SearchBox;