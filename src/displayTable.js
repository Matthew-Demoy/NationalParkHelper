import React from "react";

export default class DisplayTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  DisplayItems = props => {
    const parks = this.props.displayedParks;
    console.log(parks);
    const list = parks.map(park => {
      return (
        <div className={"DataItem"}>
          <img src={park.Image} />
          <h3>
            {park.Name} - {park.Location}
          </h3>
          <p>{park.Description}</p>
          <p> Established in: {park.Established} </p>
          <p> Land Area: {park.Area} </p>
          <p> Annual Visitors: {park["Recreation visitors"]}</p>
        </div>
      );
    });
    console.log(list);
    return <div className="DataContainer"> {list} </div>;
  };

  render() {
    var displayitmes = this.DisplayItems();
    return (
      <div>
        <h2 className={"Text"}>Selected Parks</h2>
        {displayitmes}
      </div>
    );
  }
}
