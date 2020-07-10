import React from 'react';
import FilterDropdown from './FilterDropdown';
import ResetButton from './ResetButton';
import { FilterProps } from '../types';
import styled from 'styled-components';
import FilterManage from './FilterManage';

const StyledToolBar = styled.div`
  background-color: ${({ theme }) => theme.charcoal};
  height: 65px;
  width: 100%;
`;

const ToolBar: React.FC<FilterProps> = ({
  filters,
  selectedFilters,
  toggleFilter,
}) => {
  return (
    <StyledToolBar className='m-0 px-5 d-flex justify-content-start align-items-center shadow-lg rounded flex-shrink-0'>
      <FilterDropdown
        filters={filters}
        selectedFilters={selectedFilters}
        toggleFilter={toggleFilter}
      />
      <ResetButton onClick={() => toggleFilter('all')} />
      <FilterManage filters={selectedFilters} removeFilter={toggleFilter} />
    </StyledToolBar>
  );
};

export default ToolBar;
