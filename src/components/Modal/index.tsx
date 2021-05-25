import React from 'react';

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
            <img className={s.image} src={cardImg} alt="card image pokemon" />
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
              <h3 className={s.infoTitle}>Abilities</h3>
              <span>Overgrow - Chlorophyll</span>
            </div>
            <div className={s.abilities}>
              <div className={s.healthyPoints}>
                <h3 className={s.infoTitle}>Healthy Points</h3>
                <span className={s.value}>1 000 000</span>
              </div>
            </div>
            <div className={s.abilities}>
              <div className={s.healthyPoints}>
                <h3 className={s.infoTitle}>Experience</h3>
                <span className={s.value}>1 000 000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
