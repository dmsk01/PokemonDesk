import React from 'react';
import cn from 'classnames';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface IPokemonCardProps {
  // [key: string]: string | number | string[];
  types: string[];
  img: string;
  name: string;
  attack: number;
  defence: number;
}

const PokemonCard: React.FC<IPokemonCardProps> = ({ name, attack, defence, types, img }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading size="s" className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defence}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type) => (
            <span key={type} className={cn(s[type as keyof typeof s], s.label, s.colorWrap)}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={cn(s.pictureWrap, s.colorWrap, s[types[0] as keyof typeof s])}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
