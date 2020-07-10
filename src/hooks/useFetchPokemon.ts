import { useState, useEffect } from 'react';
import { Filter, Pokemon, HookReturnType } from '../types';

const fetchDataFromResource = async (url: string) => {
  const rawData = await fetch(url);
  const formattedData = await rawData.json();
  return formattedData;
};
/*A custom hook to fetch pokemons depending on filters Array that is
passed in as argument.
*/
export const useFetchPokemon = (filtersArray: Filter[]): HookReturnType => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState(false);

  let baseUrl = 'https://pokeapi.co/api/v2';

  useEffect(() => {
    if (!filtersArray.length) return;
    const fetchData = async () => {
      setLoading(true);
      let pokemons: Pokemon[] = [];
      //Fetch pokemons urls for each filter that has link to certain type
      for (const filter of filtersArray) {
        try {
          const allPokemons: any = await fetchDataFromResource(
            `${baseUrl}${filter.link}`
          );
          // For each url fetch the full pokemon object and put it into resulting array
          if (filter.name === 'all') {
            for (const pokemon of allPokemons.results) {
              const data: any = await fetchDataFromResource(pokemon.url);
              pokemons.push(data);
            }
          } else {
            for (const pokemon of allPokemons.pokemon) {
              console.log(pokemon);
              const data: any = await fetchDataFromResource(
                pokemon.pokemon.url
              );
              pokemons.push(data);
            }
          }
        } catch (err) {
          setError(true);
          setData([]);
        }
      }
      //Format the final array to contain certain infos
      let dataToState: Pokemon[] = pokemons.map((p: any) => ({
        name: p.name,
        order: p.order,
        photo: p.sprites.front_default,
        types: p.types.map((t: any) => t.type.name),
      }));
      //Find the intersection of pokemons depending on the chosen filters
      if (filtersArray[0].name !== 'all') {
        for (const pokemon of dataToState) {
          for (const filter of filtersArray) {
            if (!pokemon.types.find((t) => t === filter.name))
              dataToState = dataToState.filter((d) => d.name !== pokemon.name);
          }
        }
        dataToState = dataToState.reduce((acc, curr) => {
          if (acc.find((p) => p.name === curr.name)) return acc;
          else return [...acc, curr];
        }, new Array());
      }
      setData(dataToState.filter((_, i) => i < 150));
      setLoading(false);
    };
    fetchData();
    //Each time filters change the effect is called to return new array of objects
  }, [filtersArray, baseUrl]);
  /*Hook returns data, loading status to display placeholders while processing request 
  and an error flag if an error occured while fetching the data*/
  return { data, loading, error };
};
