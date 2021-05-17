import React from 'react';

import cn from 'classnames';

import { A, usePath } from 'hookrouter';

import s from './Header.module.scss';

import { ReactComponent as PokemonLogo } from './assets/logo.svg';
import { GENERAL_MENU } from '../../routes';

const Header = () => {
  const path = usePath();
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogo />
        </div>
        <div className={s.menuWrap}>
          {GENERAL_MENU.map(({ title, link }) => (
            <A key={title} href={link} className={cn(s.menuLink, { [s.activeLink]: link === path })}>
              {title}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
