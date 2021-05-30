import React from 'react';
import Modal from '../../components/Modal';
import useData from '../../hook/getData';
import { PokemonRequest } from '../../interface/pokemons';

import s from './Pokemon.module.scss';

export interface IPokemonProps {
  id: string | number;
}

const Pokemon: React.FC<IPokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<PokemonRequest>('getPokemon', { id });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={s.wrapper}>
      <Modal
        id={id}
        abilities={data?.abilities[0]}
        name={data?.name}
        exp={data?.base_experience}
        hp={data?.stats.hp}
        img={data?.img}
        def={data?.stats.defense}
        attack={data?.stats.attack}
        spDef={data?.stats['special-defense']}
        spAttack={data?.stats['special-attack']}
        type={data?.types[0]}
      />
    </div>
  );
};

export default Pokemon;
