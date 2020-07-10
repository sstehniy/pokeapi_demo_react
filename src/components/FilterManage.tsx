import React from 'react';
import { FilterManageProps } from '../types';
import FilterMin from './FilterMin';

const FilterManage: React.FC<FilterManageProps> = ({
  filters,
  removeFilter,
}) => {
  return (
    <div className='d-flex align-items-center'>
      {filters.map((f, i) =>
        f.name === 'all' ? null : (
          <FilterMin key={i} filter={f} onDelete={() => removeFilter(f.name)} />
        )
      )}
    </div>
  );
};

export default FilterManage;
