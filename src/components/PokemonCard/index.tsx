import React from 'react';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface IPokemonCardProps {
  [key: string]: string | number | string[];
  types: string[];
  img: string;
  name: string;
}

interface IColor {
  [color: string]: string[];
}
const pokemonTypesColors: IColor = {
  '#a1a1a1': ['stile', 'dark', 'rock'],
  '#64D368': ['grass', 'bug'],
  '#3FBDFD': ['ice', 'water'],
  '#D33C2E': ['fire', 'fighting', 'dragon'],
  '#76aadb': ['normal', 'gosth', 'flying'],
  '#a974bc': ['poison', 'psychic', 'fairy', 'ghost'],
  '#9b897b': ['ground'],
  '#F2BB07': ['electric'],
};

const PokemonCard: React.FC<IPokemonCardProps> = ({ name, attack, defence, types, img }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading size="24px" className={s.titleName}>
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
          {types.map((type) => {
            let labelColor;
            for (const [color, pokemonTypes] of Object.entries(pokemonTypesColors)) {
              if (pokemonTypes.includes(type)) {
                labelColor = color;
                break;
              }
            }
            return (
              <span key={type} style={{ background: labelColor }} className={s.label}>
                {type}
              </span>
            );
          })}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
