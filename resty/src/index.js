import React from "react";
import ReactDOM from "react-dom";
import "./SASS/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

class Main extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

const root = document.getElementById("root");

ReactDOM.render(<Main />, root);

reportWebVitals();
