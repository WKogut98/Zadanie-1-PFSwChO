import React, { Component } from "react";

import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import Fib from "./Fib";
import Docs from "./Docs";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Aplikacja Zadanie 1</h1>
          <ul className="header">
            <li><NavLink to="/">Strona główna</NavLink></li>
            <li><NavLink to="/fib">Fibonacci</NavLink></li>
            <li><NavLink to="/docs">Dokumentacja</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/fib" element={<Fib/>}/>
              <Route path="/docs" element={<Docs/>}/>
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;