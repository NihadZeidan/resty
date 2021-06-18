import "./SASS/History.scss";
import React from "react";
import JSONPretty from "react-json-pretty";

class History extends React.Component {
  getDate(history) {
    if (!history) {
      return null;
    }
    return history.map((element, ind) => {
      return (
        <div className="his" key={ind}>
          <button
            onClick={(e) => {
              e.preventDefault();
              this.props.refill(element.Method, element.RESTurl);
              this.clicked();
            }}
          >
            {" "}
            Request Again !
          </button>
          <p id="para"></p>
          <p> METHOD: {element.Method}</p>
          <p> URL: {element.RESTurl}</p>
          <JSONPretty className="data" data={element.data}></JSONPretty>
        </div>
      );
    });
  }

  clicked() {
    let para = document.getElementById("para");
    para.innerHTML = "The Form has been refilled, Check Home page.";
  }

  render() {
    return (
      <>
        <div>{this.getDate(this.props.hist)}</div>
      </>
    );
  }
}

export default History;
