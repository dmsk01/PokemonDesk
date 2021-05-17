import React from 'react';

import s from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        Make with <span> ❤</span>
      </div>
    </div>
  );
};

export default Footer;
