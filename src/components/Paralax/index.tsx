import React, { useEffect, useState } from 'react';

import s from './Paralax.module.scss';

import SmallPokeBallPng from './assets/PokeBall1.png';
import CloudPng from './assets/Cloud1.png';
import PokeBallPng from './assets/PokeBall2.png';
import CloudBigPng from './assets/Cloud2.png';
import PikachuPng from './assets/Pikachu.png';

const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  const handleMouseMove = (event: MouseEvent) => {
    setScreenX(event.screenX);
    setScreenY(event.screenY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [screenX, screenY]);
  return (
    <div className={s.root}>
      <div className={s.smallPokeBall}>
        <img
          src={SmallPokeBallPng}
          alt="Small PokeBall"
          style={{ transform: `translate(${screenY * 0.05}px, ${screenX * 0.05}px)` }}
        />
      </div>
      <div className={s.cloudSmall}>
        <img
          src={CloudPng}
          alt="Cloud PokeBall"
          style={{ transform: `translate(${screenY * 0.04}px, ${screenX * 0.04}px)` }}
        />
      </div>
      <div className={s.cloudBig}>
        <img
          src={CloudBigPng}
          alt="Cloud Big PokeBall"
          style={{ transform: `translate(${screenY * 0.03}px, ${screenX * 0.03}px)` }}
        />
      </div>
      <div className={s.pokeBall}>
        <img
          src={PokeBallPng}
          alt="Big PokeBall"
          style={{ transform: `translate(${screenY * 0.02}px, ${screenX * 0.02}px)` }}
        />
      </div>
      <div className={s.pikachu}>
        <img
          src={PikachuPng}
          alt="Cloud PokeBall"
          style={{ transform: `translate(${screenY * 0.01}px, ${screenX * 0.01}px)` }}
        />
      </div>
    </div>
  );
};

export default Parallax;
