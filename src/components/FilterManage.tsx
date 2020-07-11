import React, { useContext } from 'react';
import { Context } from '../context';
import { Filter } from '../types';
import FilterMin from './FilterMin';

const FilterManage: React.FC = () => {
  const { selectedFilters, toggleFilterHandler } = useContext(Context);
  return (
    <div className='d-flex align-items-center'>
      {(selectedFilters as Filter[]).map((f, i) =>
        f.name === 'all' ? null : (
          <FilterMin
            key={i}
            filter={f}
            onDelete={() => toggleFilterHandler(f.name)}
          />
        )
      )}
    </div>
  );
};

export default FilterManage;
