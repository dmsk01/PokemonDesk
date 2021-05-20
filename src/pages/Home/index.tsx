import React from 'react';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../routes';

import Layout from '../../components/Layout';
import Button from '../../components/Button';

import s from './Home.module.scss';
import Parallax from '../../components/Paralax';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading tag="h1" size="72px" className={s.title}>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Heading tag="p" size="36px" className={s.paragraph}>
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </Heading>
          <Button
            onClick={() => {
              navigate(LinkEnum.POKEDEX);
            }}
            size="normal"
            color="green"
            display="block">
            See pokemons
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
