import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import "react-svg-map/lib/index.css";
import USAMap from "./map.js";

import SVG from "react-inlinesvg";

import LogoComponent from "./logo-svg.js";

function App() {
  return (
    <div className="App">
      <h1>United States National Parks</h1>
      <LogoComponent />
      <h2>Select one or more states to view</h2>
      <USAMap />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
