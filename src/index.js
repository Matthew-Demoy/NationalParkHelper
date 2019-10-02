import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import "react-svg-map/lib/index.css";
import USAMap from "./map.js";

import SVG from "react-inlinesvg";

import LogoComponent from "./logo-svg.js";
import DisplayTable from "./displayTable.js";

//https://www.nationalparks.org/explore-parks
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStates: []
    };
  }

  sendParks = dataFromChild => {
    console.log("data" + dataFromChild);
    this.setState({ selectedStates: dataFromChild });
  };

  render() {
    return (
      <div className="App">
        <div id="top">
          <div className="topContainer">
            <div id="topLogoContainer">
              <LogoComponent />
            </div>

            <div className="verticalContainer">
              <h1>Explore Parks</h1>
              <h3>
                Explore America’s national parks. Discover our most treasured
                places, supported by people like you, and start your travel
                planning here.
              </h3>
            </div>

            <div id="donateButton">
              <a
                id="donateLink"
                href="https://donate.nationalparks.org/page/40194/donate/1?_ga=2.81891414.1731577169.1569891660-285251361.1568148816"
              >
                Donate to the Parks
              </a>
            </div>
          </div>

          <USAMap callBackParent={this.sendParks} />
        </div>
        <div>
          <DisplayTable displayedParks={this.state.selectedStates} />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
