import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { BrowserRouter as Router,Route, Link,Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
  body {
    position: fixed;
    overflow: hidden;
  }
  a {
    text-decoration: none;
  }
`;

ReactDOM.render(
  <Router>
    <GlobalStyle/>
    <Routes/>
  </Router>,
  document.getElementById('root')
);
