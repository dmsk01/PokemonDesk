import React, { useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';
import s from './Pokedex.module.scss';
import req from '../../utils/request';

const usePokemons = (): IUsePokemons => {
  const [data, setData] = useState<IPokemonsApi>({
    total: 0,
    count: 0,
    limit: 0,
    offset: 0,
    pokemons: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const result = await req('getPokemons');

        setData(result);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

interface IPokemonsStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

interface IPokemon {
  name_clean: string;
  abilities: string[];
  stats: IPokemonsStats;
  types: string[];
  img: string;
  name: string;
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
}
interface IPokemonsApi {
  total: number;
  count: number;
  limit: number;
  offset: number;
  pokemons: IPokemon[];
}

interface IUsePokemons {
  data: IPokemonsApi;
  isLoading: boolean;
  isError: boolean;
}

interface IPokedexPageProps {
  title?: string;
}

const Pokedex: React.FC<IPokedexPageProps> = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Something went wrong ...</div>;
  }
  return (
    <div>
      <div className={s.root}>
        <div className={s.wrapper}>
          <Heading tag="h1" size="36px" className={s.pageTitle}>
            {data.total} <b>Pokemons</b> for you to choose your favorite
          </Heading>
          <div className={s.cards}>
            {data.pokemons.map(({ name, stats, types, img, id }) => (
              <PokemonCard key={id} name={name} attack={stats.attack} defence={stats.defense} types={types} img={img} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
