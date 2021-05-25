import React from 'react';
import Modal from '../../components/Modal';

import s from './Pokemon.module.scss';

export interface IPokemonProps {
  id: string | number;
}

const Pokemon: React.FC<IPokemonProps> = ({ id }) => {
  return (
    <div className={s.wrapper}>
      <Modal id={id} />
    </div>
  );
};

export default Pokemon;
