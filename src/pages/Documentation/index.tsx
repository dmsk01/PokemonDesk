import React from 'react';
import Header from '../../components/Header';

interface IPokedexPageProps {
  title?: string;
}

const Documentation: React.FC<IPokedexPageProps> = ({ title }) => {
  return (
    <div>
      <Header />
      <div>This is { title}</div>
    </div>
  );
};

export default Documentation;
