import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import "react-svg-map/lib/index.css";
import USAMap from "./map.js";
import SVG from "react-inlinesvg";

import LogoComponent from "./logo-svg.js";
import DisplayTable from "./displayTable.js";

//https://www.nationalparks.org/explore-parks
import "../fonts/Brandon_blk.otf";

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
        <div class="top">
          <div className="bg-img" />
          <div className="saturate-layer" />
          <div className="bg-gradient" />

          <div className="topContainer">
            <div id="topLogoContainer">
              <LogoComponent />
            </div>

            <div className="verticalContainer">
              <div className="arrowContainer">
                <h1 className="grit">EXPLORE PARKS</h1>
              </div>

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
                DONATE TO THE PARKS
              </a>
            </div>
          </div>

          <USAMap callBackParent={this.sendParks} />
        </div>

        <div className="downContainer">
          {this.state.selectedStates.length ? (
            <div>
              <a href="#scrollHere">
                <h2 className={"Text"}>Selected Parks</h2>
                <i class="fas fa-sort-down" />
              </a>
            </div>
          ) : (
            <div> </div>
          )}
        </div>

        <div className="scrollHere">
          <DisplayTable displayedParks={this.state.selectedStates} />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
