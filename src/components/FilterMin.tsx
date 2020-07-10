import React from 'react';
import { FilterMinProps } from '../types';
import styled from 'styled-components';
import { ReactComponent as Close } from '../assets/close.svg';

const StyledFilterMin = styled.div`
  height: 30px;
  padding: 0 10px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.5);
  margin-left: 10px;
  display: flex;

  & p {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    margin-right: 15px;
  }

  & svg {
    width: 10px;
    cursor: pointer;
  }
`;

const FilterMin: React.FC<FilterMinProps> = ({ filter, onDelete }) => {
  return (
    <StyledFilterMin className='d-flex align-items-center justify-content-between'>
      <p>{filter.name}</p>
      <Close onClick={onDelete} />
    </StyledFilterMin>
  );
};

export default FilterMin;
