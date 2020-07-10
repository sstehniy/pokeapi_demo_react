import React from 'react';
import ListItem from './ListItem';
import LoadingItemSkeleton from './SkeletonItem';
import { ListProps, Pokemon } from '../types';
import styled from 'styled-components';

const StyledList = styled.ul`
  width: 100%;
  background-color: ${({ theme }) => theme.blue};
`;

const List: React.FC<ListProps> = ({ items, loading = false, error }) => {
  return (
    <StyledList className='list flex-grow-1 mt-3 py-3 overflow-scroll shadow-lg rounded d-flex flex-wrap justify-content-center overflow-scroll'>
      {loading
        ? Array.from(new Array(10).keys()).map((_, i) => (
            <LoadingItemSkeleton key={i} />
          ))
        : (items as Pokemon[]).map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
      {error && <p>Error occured</p>}
    </StyledList>
  );
};

export default List;
