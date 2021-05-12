import React from 'react';

import cn from 'classnames';

import styles from './App.module.scss';

const App = () => {
  console.log('asfasfsafasdffads');

  return <div className={cn(styles.header, 'color')}>Hello world from App Component</div>;
};

export default App;
