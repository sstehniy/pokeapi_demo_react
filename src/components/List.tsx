import React from 'react';
import ListItem from './ListItem';
import LoadingItemSkeleton from './SkeletonItem';
import { ListProps, Pokemon } from '../types';
import styled from 'styled-components';

const StyledList = styled.ul`
  width: 100%;
  background-color: ${({ theme }) => theme.blue};
  overflow: scroll;

  & p.fallback {
    position: absolute;
    font-size: 25px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const List: React.FC<ListProps> = ({ items, loading = false, error }) => {
  return (
    <StyledList className='position-relative flex-grow-1 mt-3 py-3 shadow-lg rounded d-flex flex-wrap justify-content-center'>
      {loading ? (
        Array.from(new Array(10).keys()).map((_, i) => (
          <LoadingItemSkeleton key={i} />
        ))
      ) : items.length ? (
        (items as Pokemon[]).map((item, index) => (
          <ListItem key={index} item={item} />
        ))
      ) : (
        <p className='fallback m-0'>Nothing found :(</p>
      )}
      {error && <p className='fallback'>Error occured</p>}
    </StyledList>
  );
};

export default List;
