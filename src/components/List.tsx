import React from 'react';
import ListItem from './ListItem';
import LoadingItemSkeleton from './SkeletonItem';
import { ListProps, Pokemon } from '../types';
import styled from 'styled-components';

const StyledListWrapper = styled.div`
  background-color: ${({ theme }) => theme.blue};
  width: 100%;
  & h5#total-count {
    margin: 0;
    padding: 5px 10px;
    display: inline-block;
    color: ${({ theme }) => theme.dark};
    background-color: ${({ theme }) => theme.charcoal};
    border-radius: 5px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  }
`;

const StyledList = styled.ul`
  width: 100%;
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
    <StyledListWrapper className='position-relative flex-grow-1 mt-3 p-4 shadow-lg rounded '>
      {!loading && (
        <h5 id='total-count'>
          Total count: <span>{items.length}</span>
        </h5>
      )}
      <StyledList className='my-3 d-flex flex-wrap justify-content-center'>
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
    </StyledListWrapper>
  );
};

export default List;
