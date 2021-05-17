import React from 'react';
import Header from '../../components/Header';

interface IPokedexPageProps {
  title?: string;
}

const Pokedex: React.FC<IPokedexPageProps> = ({ title }) => {
  return (
    <div>
      <Header />
      <div>This is page for {title}</div>
    </div>
  );
};

export default Pokedex;
