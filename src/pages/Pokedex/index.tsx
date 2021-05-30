import React, { useState } from 'react';
import { A } from 'hookrouter';
import { LinkEnum } from '../../routes';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';
import s from './Pokedex.module.scss';
import useData from '../../hook/getData';
import Input from '../../components/Input';
import { IPokemons, PokemonRequest } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';

interface IPokedexPageProps {
  title?: string;
}

interface IQuery {
  name?: string;
  limit: number;
}

const Pokedex: React.FC<IPokedexPageProps> = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const [query, setQuery] = useState<IQuery>({ limit: 12 });

  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((prevState: IQuery) => ({
      ...prevState,
      name: e.target.value,
    }));
  };
  // const onClick = (id: string | number) => navigate(`${LinkEnum.POKEDEX}/${id}`);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  if (isError) {
    return <div>Something went wrong ...</div>;
  }
  return (
    <>
      <div className={s.root}>
        <div className={s.wrapper}>
          <Heading size="m" className={s.pageTitle}>
            {!isLoading && data && data.total} <b>Pokemons</b> for you to choose your favorite
          </Heading>
          <Input onChange={handleSearchChange} value={searchValue} />
          <div className={s.cards}>
            {!isLoading &&
              data &&
              data.pokemons.map((item: PokemonRequest) => (
                <A key={item.id} href={`${LinkEnum.POKEDEX}/${item.id}`}>
                  <PokemonCard
                    name={item.name}
                    attack={item.stats.attack}
                    defence={item.stats.defense}
                    types={item.types}
                    img={item.img}
                    // onClick={onClick}
                  />
                </A>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokedex;
