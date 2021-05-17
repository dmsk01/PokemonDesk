import { navigate } from 'hookrouter';
import React from 'react';
import Button from '../../components/Button';
import { LinkEnum } from '../../routes';

import ErrorCodePng from './assets/404.png';

import s from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <div className={s.bgImage}>
          <img className={s.error} src={ErrorCodePng} alt="404 Error" />
        </div>
        <h1 className={s.title}>
          <span style={{ color: '#f2f2f2' }}>The rocket team</span> has won this time.
        </h1>
        <div className={s.button}>
          <Button
            onClick={() => {
              navigate(LinkEnum.HOME);
            }}
            size="normal"
            color="yellow"
            display="block">
            Return
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
