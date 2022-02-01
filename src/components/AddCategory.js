import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
  
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue?.trim().length > 2){
            setCategories(categories => [inputValue, ...categories]);
            setInputValue('');
        }
    }

    return (
    <form onSubmit={handleSubmit}>
        <h1>Add Category</h1>
        <input 
            value={inputValue}
            onChange={handleInputChange}

            type= "text"
        />
    </form>);
};


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};