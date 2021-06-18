import "./SASS/Historysnip.scss";
import React from "react";

class SnippetHistory extends React.Component {
  getDate(history) {
    if (!history) {
      return null;
    }

    return history.map((element, ind) => {
      return (
        <div className="hisSnip" key={ind}>
          <p> METHOD: {element.Method}</p>
          <p
            onClick={(e) => {
              e.preventDefault();
              this.props.refill(element.Method, element.RESTurl);
            }}
            className="urlPara"
          >
            {" "}
            URL: {element.RESTurl}
          </p>
        </div>
      );
    });
  }

  render() {
    return <>{this.getDate(this.props.hist)}</>;
  }
}

export default SnippetHistory;
