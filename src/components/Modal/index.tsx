import React from 'react';
import cn from 'classnames';
import toCapitalizeFirstLetter from '../../utils/toCapitalizeFirstLetter';

import s from './Modal.module.scss';
import closeIcon from './assets/closeIcon.png';

interface IModal {
  id: string | number;
  name?: string;
  exp?: number;
  hp?: number;
  img?: string;
  def?: number;
  attack?: number;
  spDef?: number;
  spAttack?: number;
  types?: string[];
  abilities?: string[];
}

const Modal: React.FC<IModal> = ({ id, abilities, name, exp, hp, img, def, attack, spDef, spAttack, types }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.close}>
        <img src={closeIcon} alt="close card" />
      </div>
      <div className={s.body}>
        <div className={s.row}>
          <div className={cn(s.imageWrapper, s.colorWrap)}>
            <img className={s.image} src={img} alt={name} />
            <div className={s.labelWrap}>
              {types?.map((type: string) => (
                <span key={type} className={cn(s[type as keyof typeof s], s.label, s.colorWrap)}>
                  {type}
                </span>
              ))}
            </div>
          </div>
          <div className={s.info}>
            <div className={s.header}>
              <h2 className={s.pokemonName}>{name && toCapitalizeFirstLetter(name)}</h2>
              <div className={s.rate}>
                <div className={s.generation}>Generation 1</div>
                <div className={s.idLabel}>{id}</div>
              </div>
            </div>
            <div className={s.abilities}>
              <h2 className={s.abilitiesTitle}>Abilities</h2>
              <div className={s.abilitiesText}>{abilities?.join('-')}</div>
            </div>
            <div className={s.strength}>
              <div className={s.strengthColumn}>
                <h3 className={s.strengthTitle}>Healthy Points</h3>
                <div className={s.strengthValue}>{hp}</div>
                <div className={cn(s.strengthProgress, s.strengthProgressHp)}>
                  <progress value={hp} max="1000" />
                </div>
              </div>
              <div className={s.strengthColumn}>
                <h3 className={s.strengthTitle}>Experience</h3>
                <div className={s.strengthValue}>{exp}</div>
                <div className={cn(s.strengthProgress, s.strengthProgressExp)}>
                  <progress value={exp} max="1000" />
                </div>
              </div>
            </div>
            <div className={s.capabilities}>
              <div className={s.capability}>
                <div className={s.capabilityValue}>{def}</div>
                <div className={s.capabilityName}>Defense</div>
              </div>
              <div className={s.capability}>
                <div className={s.capabilityValue}>{attack}</div>
                <div className={s.capabilityName}>Attack</div>
              </div>
              <div className={s.capability}>
                <div className={s.capabilityValue}>{spAttack}</div>
                <div className={s.capabilityName}>Sp Attack</div>
              </div>
              <div className={s.capability}>
                <div className={s.capabilityValue}>{spDef}</div>
                <div className={s.capabilityName}>Sp Defense</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
