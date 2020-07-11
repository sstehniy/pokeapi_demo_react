import React, { useState } from 'react';
import { useFetchPokemon } from '../hooks/useFetchPokemon';
import ToolBar from '../components/ToolBar';
import List from '../components/List';
import { filters } from '../constants';
import { Context } from '../context';

const Main: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState([filters[0]]);
  const { data, loading, error } = useFetchPokemon(selectedFilters);

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
      //Set the default filter if any are selected
      if (selectedFilters.length === 1) setSelectedFilters([filters[0]]);
      setSelectedFilters((prev) =>
        prev.filter((f) => f.name !== selectedFilter.name)
      );
      //If any filter except for default is selected, add it to the filters array and unckeck the default filter
    } else
      setSelectedFilters((prev) => [
        ...prev.filter((f) => f.name !== 'all'),
        selectedFilter,
      ]);
  };

  return (
    <Context.Provider
      value={{
        filters,
        selectedFilters,
        toggleFilterHandler,
      }}>
      <div
        className='main container-fluid flex-grow-1 d-flex flex-column align-items-center align-items-start'
        style={{ padding: '25px 20px', marginTop: '66px' }}>
        <ToolBar />
        <List items={data} loading={loading} error={error} />
      </div>
    </Context.Provider>
  );
};

export default Main;
