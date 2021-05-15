import React from 'react';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Button from '../../components/Button';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <h1>
            <b>Find all your favorite Pokemon</b>
          </h1>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button
            onClick={(event) => {
              console.log('button clicked');
            }}>
            See pokemons
          </Button>
        </div>
        <div className={s.contentParalax}>We&apos;ll see Paralax here soon...</div>
      </Layout>
    </div>
  );
};
export default HomePage;
