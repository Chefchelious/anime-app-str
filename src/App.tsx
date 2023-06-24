import React from 'react';
import './App.css';
import Toolbar from "./components/Toolbar/Toolbar";
import Home from "./containers/Home/Home";

const App = () => {
  return (
    <>
      <Toolbar/>
      <Home/>
    </>
  );
};

export default App;
