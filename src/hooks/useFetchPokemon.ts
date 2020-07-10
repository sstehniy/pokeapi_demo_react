import { useState, useEffect } from 'react';
import { Filter, Pokemon } from '../types';

type HookReturnType = {
  data: Pokemon[] | any[];
  loading: boolean;
  error: boolean;
};

const fetchDataFromResource = async (url: string) => {
  const rawData = await fetch(url);
  const formattedData = await rawData.json();
  return formattedData;
};

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

      for (const filter of filtersArray) {
        try {
          const allPokemons: any = await fetchDataFromResource(
            `${baseUrl}${filter.link}`
          );
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

      let dataToState: Pokemon[] = pokemons.map((p: any) => ({
        name: p.name,
        order: p.order,
        photo: p.sprites.front_default,
        types: p.types.map((t: any) => t.type.name),
      }));
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
      setData(dataToState);
      setLoading(false);
    };
    fetchData();
  }, [filtersArray]);

  return { data, loading, error };
};
