import React, {useState} from 'react';


const SearchBox = () => {
    
    const [searchValue, setSearchValue] = useState("");

   const handleSearchChange = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div className='searchbox'>
            <input 
                type='search' 
                placeholder='Search' 
                value={searchValue}
                onChange={handleSearchChange}
            />
        </div>
        
    ) 
}

export default SearchBox;