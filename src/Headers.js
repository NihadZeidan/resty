import React from "react";
import "./SASS/Headers.scss"


class Results extends React.Component {
  render() {
    return (
      <React.Fragment>
        
        
        <p id="headers"> {this.props.data.headers}</p>

      
      </React.Fragment>
    );
  }
}

export default Results;
