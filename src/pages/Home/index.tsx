import React from 'react';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Button from '../../components/Button';

import s from './Home.module.scss';
import Parallax from '../../components/Paralax';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading tag="h1" size="16px">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Heading tag="p" size="36px">
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </Heading>
          <Button
            onClick={(event) => {
              event.preventDefault();
            }}
            size="normal"
            color="green"
            display="block">
            See pokemons
          </Button>
          <Button
            onClick={(event) => {
              event.preventDefault();
            }}
            size="small"
            color="yellow"
            display="block">
            Donate!
          </Button>
        </div>
        <div className={s.contentParalax}>
          <Parallax />
        </div>
      </Layout>
      <Footer />
    </div>
  );
};
export default HomePage;
