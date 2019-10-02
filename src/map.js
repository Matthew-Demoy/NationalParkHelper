import React from "react";
import USA from "@svg-maps/usa";
import { CheckboxSVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import parks from "../data/parks.json";
import DisplayTable from "./displayTable.js";
import "./styles.css";

class USAMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pointedLocation: null,
      focusedLocation: null,
      selectedLocations: [],
      parkData: parks,
      displayedParkData: []
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(selectedNodes) {
    var displayedParks = [];
    for (var i = 0; i < this.state.parkData.length; i++) {
      for (var j = 0; j < Object.keys(selectedNodes).length; j++) {
        if (
          this.state.parkData[i].Location ===
          selectedNodes[j].attributes.name.value
        ) {
          displayedParks.push(this.state.parkData[i]);
        }
      }
    }

    console.log("this.state.displayedParkData" + this.state.displayedParkData);
    this.props.callBackParent(displayedParks);

    this.setState(prevState => {
      return {
        ...prevState,
        displayedParkData: displayedParks,
        selectedLocations: selectedNodes.map(node => node.attributes.name.value)
      };
    });
  }

  render() {
    return (
      <div>
        <div className="mapContainer">
          <CheckboxSVGMap
            height="100%"
            overflow="auto"
            map={USA}
            onChange={this.handleOnChange}
          />
        </div>
      </div>
    );
  }
}

export default USAMap;
