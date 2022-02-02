import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';
import PropTypes from 'prop-types';

export const GiftExpertApp = ({defaultCategories = []}) => {

    const [categories, setCategories] = useState(defaultCategories);
    
    return (<>
        <h2>GiftExpertApp</h2>
        <AddCategory setCategories={setCategories}></AddCategory>
        <hr></hr>
        
        <ol>
            {
               categories.map((category) => {
                   return <GifGrid category={category} key={category}/>
               })
            }
        </ol>
    </>);
};

GiftExpertApp.propTypes = {
    defaultCategories: PropTypes.array
}