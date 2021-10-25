import React from 'react';
import '../styles/Pills.css';



const Pill = ({text, variant}) => {
    return (
        <div className={`Meal_type Meal_type-${variant}`}>
            <span className="Meal_tag">{text}</span>
        </div>
        
    )
            
}

export default Pill;
