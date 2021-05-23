import React from 'react';

interface IPokedexPageProps {
  title?: string;
}

const Legendaries: React.FC<IPokedexPageProps> = ({ title }) => {
  return (
    <div>
      <div>This is {title}</div>
    </div>
  );
};

export default Legendaries;
