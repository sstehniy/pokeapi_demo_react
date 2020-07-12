import React from 'react';
import styled from 'styled-components';
import { PokemonMin } from '../types';
import { Link } from 'react-router-dom';
import photoAlt from '../assets/pokeball_ph.svg';

const StyledListItem = styled.div`
  height: 300px;
  width: 225px;
  border-radius: 10px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.7);

  & a#more-btn {
    position: absolute;
    right: 10px;
    bottom: 5px;
    background-color: ${({ theme }) => theme.blue};
    padding: 1px 5px;
    border-radius: 4px;
    font-size: 14px;
    color: ${({ theme }) => theme.dark} !important;
    text-decoration: none !important;
    &:hover {
    }
  }
`;

const ListItem: React.FC<{ item: PokemonMin }> = ({
  item: { name, order, photo, types },
}) => {
  return (
    <StyledListItem className='card position-relative m-3'>
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
      <Link to={`/${name}`} id='more-btn'>
        MORE
      </Link>
    </StyledListItem>
  );
};

export default ListItem;
