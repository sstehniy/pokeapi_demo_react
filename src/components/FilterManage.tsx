import React from 'react';
import { Filter } from '../types';
import styled from 'styled-components';
import FilterMin from './FilterMin';

type FilterManageProps = {
  filters: Filter[];
  removeFilter: (name: string) => void;
};

const StyledFilterManage = styled.div``;

const FilterManage: React.FC<FilterManageProps> = ({
  filters,
  removeFilter,
}) => {
  return (
    <StyledFilterManage className='d-flex align-items-center'>
      {filters.map((f, i) =>
        f.name === 'all' ? null : (
          <FilterMin key={i} filter={f} onDelete={() => removeFilter(f.name)} />
        )
      )}
    </StyledFilterManage>
  );
};

export default FilterManage;
