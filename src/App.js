import React from 'react';
import logo from './logo.svg';
import './App.css';
// import {Route} from "react-router";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {DonateUser} from "./components/DonateUser";
import {Home} from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Route path="/donateuser" component={DonateUser} />
      <Route path="/home" component={Home} />
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
