import React from 'react';
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category);
  
    return (
      <>
        <h3 className="animate__fadeIn">{category}</h3>
        {loading && <p>Loading...</p>}
        <div className="card-grid">
          
          <ol>
            {
              images.map((item) => {
                return <GifGridItem 
                      {...item}
                      key={item.id}>
                    </GifGridItem>
              })
            }
          </ol>
        </div>
      </>
  );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};
