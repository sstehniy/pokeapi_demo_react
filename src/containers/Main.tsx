import React, { useEffect, useState } from 'react';
import { useFetchPokemon } from '../hooks/useFetchPokemon';
import ToolBar from '../components/ToolBar';
import List from '../components/List';
import { filters } from '../constants';

const Main: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState([filters[0]]);
  const { data, loading, error } = useFetchPokemon(selectedFilters);
  const [itemsToRender, setItemsToRender] = useState(data);

  useEffect(() => {
    if (!data) return;
    setItemsToRender(data.filter((_, i) => i < 150));
  }, [data]);

  const toggleFilterHandler = (name: string) => {
    const selectedFilter = filters.find((f) => f.name === name) || filters[0];
    if (selectedFilter.name === 'all') {
      if (selectedFilters[0].name === 'all') return;
      else {
        setSelectedFilters([selectedFilter]);
        return;
      }
    }
    if (selectedFilters.find((f) => f.name === selectedFilter.name)) {
      if (selectedFilters.length === 1) setSelectedFilters([filters[0]]);
      setSelectedFilters((prev) =>
        prev.filter((f) => f.name !== selectedFilter.name)
      );
    } else
      setSelectedFilters((prev) => [
        ...prev.filter((f) => f.name !== 'all'),
        selectedFilter,
      ]);
  };

  return (
    <div
      className='main container-fluid flex-grow-1 d-flex flex-column align-items-center align-items-start'
      style={{ padding: '25px 20px', marginTop: '66px' }}>
      <ToolBar
        filters={filters}
        selectedFilters={selectedFilters}
        toggleFilter={toggleFilterHandler}
      />
      <List items={itemsToRender} loading={loading} error={error} />
    </div>
  );
};

export default Main;
