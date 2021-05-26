import React from 'react';

import cn from 'classnames';

import s from './Modal.module.scss';
import closeIcon from './assets/closeIcon.png';
import cardImg from './assets/cardImg.png';

interface IModal {
  id: string | number;
}

const Modal: React.FC<IModal> = ({ id }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.close}>
        <img src={closeIcon} alt="close card" />
      </div>
      <div className={s.body}>
        <div className={s.row}>
          <div className={s.imageWrapper}>
            <img className={s.image} src={cardImg} alt={cardImg} />
            <div className={s.labelWrap}>
              <span className={s.label}>Fire</span>
            </div>
          </div>
          <div className={s.info}>
            <div className={s.header}>
              <h2 className={s.pokemonName}>Charizard</h2>
              <div className={s.rate}>
                <div className={s.generation}>Generation 1</div>
                <div className={s.idLabel}>{id}</div>
              </div>
            </div>
            <div className={s.abilities}>
              <h2 className={s.abilitiesTitle}>Abilities</h2>
              <div className={s.abilitiesText}>Overgrow - Chlorophyll</div>
            </div>
            <div className={s.strength}>
              <div className={s.strengthColumn}>
                <h3 className={s.strengthTitle}>Healthy Points</h3>
                <div className={s.strengthValue}>1 000 000</div>
                <div className={cn(s.strengthProgress, s.strengthProgressHp)}>
                  <progress value="60" max="100" />
                </div>
              </div>
              <div className={s.strengthColumn}>
                <h3 className={s.strengthTitle}>Experience</h3>
                <div className={s.strengthValue}>1 000 000</div>
                <div className={cn(s.strengthProgress, s.strengthProgressExp)}>
                  <progress value="90" max="100" />
                </div>
              </div>
            </div>
            <div className={s.capabilities}>
              <div className={s.capability}>
                <div className={s.capabilityValue}>49</div>
                <div className={s.capabilityName}>Defense</div>
              </div>
              <div className={s.capability}>
                <div className={s.capabilityValue}>165</div>
                <div className={s.capabilityName}>Attack</div>
              </div>
              <div className={s.capability}>
                <div className={s.capabilityValue}>130</div>
                <div className={s.capabilityName}>Sp Attack</div>
              </div>
              <div className={s.capability}>
                <div className={s.capabilityValue}>271</div>
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
