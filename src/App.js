import React from "react";

import cn from "classnames";

import "./custom.css";
import styles from "./App.modules.scss";

const App = () => {
  return <div className={cn(styles.header, "color")}>Hello world from App Component</div>;
};

export default App;
