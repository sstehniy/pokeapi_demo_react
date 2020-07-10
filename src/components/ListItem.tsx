import React from 'react';
import { Pokemon } from '../types';
import photoAlt from '../assets/pokeball_ph.svg';

const ListItem: React.FC<{ item: Pokemon }> = ({
  item: { name, order, photo, types },
}) => {
  return (
    <div
      className='card position-relative m-3 shadow-md rounded'
      style={{ height: '300px', width: '225px' }}>
      {photo ? (
        <img
          className='carg-img-top'
          style={{ objectFit: 'contain', height: '50%' }}
          src={photo}
          alt='pokemon-front-sprite'
        />
      ) : (
        <img
          className='carg-img-top my-2'
          style={{ objectFit: 'contain', height: '40%' }}
          src={photoAlt}
          alt='pokemon-ph'
        />
      )}

      <div className='card-body'>
        <h5 className='card-title' style={{ textTransform: 'capitalize' }}>
          {name}
        </h5>
        <p className='card-text my-2'>Order: {order}</p>
        <p className='card-text my-2'>Types: {types.join(', ')}</p>
      </div>
    </div>
  );
};

export default ListItem;
