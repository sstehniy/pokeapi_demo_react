import { useState, useEffect } from 'react';
import { PokemonFull } from '../types';

type HookReturnType = {
  data: PokemonFull | null;
  loading: boolean;
  error: boolean;
};

export const useFetchFullPokemon = (pokemonName: string): HookReturnType => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPokemonInfo = async (pokemonName: string): Promise<any> => {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    return data.json();
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const unformattedData: any = await fetchPokemonInfo(pokemonName);

        const {
          name,
          order,
          sprites,
          types,
          abilities,
          moves,
        } = unformattedData;
        const formattedData: PokemonFull = {
          name,
          order,
          photos: (Object.values(sprites) as string[]).filter(
            (v) => v !== null
          ),
          types: types.map((t: any) => t.type.name),
          abilities: abilities.map((a: any) => a.ability.name),
          moves: moves.map((m: any) => m.move.name),
        };
        setData(formattedData);
      } catch (error) {
        console.log(error);
        setError(true);
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [pokemonName]);

  return { data, loading, error };
};
