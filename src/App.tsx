import React from "react";
import { useRoutes } from 'hookrouter';
import NotFound from './pages/NotFound';

import routes from './routes';

const App = () => {
  const match = useRoutes(routes);
  return match || <NotFound />;
};

export default App;
