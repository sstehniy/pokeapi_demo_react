import React, { useState, useMemo } from 'react';
import { useFetchPokemon } from '../hooks/useFetchPokemons';
import ToolBar from '../components/ToolBar';
import List from '../components/List';
import { FullItemModal } from './FullItemModal';
import { filters } from '../constants';
import { Context } from '../context';
import { Route } from 'react-router-dom';
import { PokemonMin } from '../types';

const Main: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState([filters[0]]);
  const { data, loading, error } = useFetchPokemon();

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

  const filteredData = useMemo(() => {
    let filteredList: PokemonMin[] = [...data];
    if (selectedFilters[0].name !== 'all') {
      for (const pokemon of filteredList) {
        for (const filter of selectedFilters) {
          if (!pokemon.types.find((t) => t === filter.name))
            filteredList = filteredList.filter((d) => d.name !== pokemon.name);
        }
      }
      filteredList = filteredList.reduce((acc: PokemonMin[], curr) => {
        if (acc.find((p) => p.name === curr.name)) return acc;
        else return [...acc, curr];
      }, []);
    }
    return filteredList;
  }, [selectedFilters, data]);

  return (
    <Context.Provider
      value={{
        filters,
        selectedFilters,
        toggleFilterHandler,
      }}>
      <div
        className='position-relative container-fluid flex-grow-1 d-flex flex-column align-items-center align-items-start'
        style={{
          padding: '25px 20px',
          marginTop: '66px',
          height: 'calc(100vh - 66px)',
        }}>
        <ToolBar />
        <List items={filteredData} loading={loading} error={error} />
        <Route exact path='/:pokemonName' component={FullItemModal} />
      </div>
    </Context.Provider>
  );
};

export default Main;
