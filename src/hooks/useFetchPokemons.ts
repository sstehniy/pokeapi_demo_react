import { useState, useEffect } from 'react';
import {
  Filter,
  PokemonMin as Pokemon,
  HookReturnType,
  PokemonMin,
} from '../types';

const fetchDataFromResource = async (url: string) => {
  const rawData = await fetch(url);
  const formattedData = await rawData.json();
  return formattedData;
};
/*A custom hook to fetch pokemons depending on filters Array that is
passed in as argument.
*/
export const useFetchPokemon = (): HookReturnType => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let baseUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
      let pokemons: PokemonMin[] = [];
      const allPokemons: any = await fetchDataFromResource(baseUrl);
      try {
        for (const pokemon of allPokemons.results) {
          const data: any = await fetchDataFromResource(pokemon.url);
          pokemons.push(data);
        }
        setData(
          pokemons.map((p: any) => ({
            name: p.name,
            order: p.order,
            photo: p.sprites.front_default,
            types: p.types.map((t: any) => t.type.name),
          }))
        );
      } catch (err) {
        setError(true);
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  /*Hook returns data, loading status to display placeholders while processing request 
  and an error flag if an error occured while fetching the data*/
  return { data, loading, error };
};
