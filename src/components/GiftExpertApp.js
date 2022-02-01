import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    
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
