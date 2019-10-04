import React from "react";

//<p> Established in: {park.Established} </p>
//<p> Land Area: {park.Area} </p>
//<p> Annual Visitors: {park["Recreation visitors"]}</p>

export default class DisplayTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  DisplayItems = props => {
    const parks = this.props.displayedParks;
    const list = parks.map(park => {
      var parkShortDesc = park.Description.split(".")[0];
      return (
        <div className={"DataItem"}>
          <a href={park.link}>
            <div className="spaceContainer">
              <img src={park.Image} />
            </div>
          </a>
          <div id="textDataItem">
            <a href={park.link}>
              <h3>
                {park.Name.toUpperCase()} - {park.Location.toUpperCase()}
              </h3>
            </a>
            <p>{parkShortDesc + "."}</p>
          </div>
        </div>
      );
    });
    return <div className="DataContainer"> {list} </div>;
  };

  render() {
    var displayitmes = this.DisplayItems();
    return <div>{displayitmes}</div>;
  }
}
