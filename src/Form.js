import React from "react";
import "./SASS/Form.scss";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RESTurl: "",
      Method: "",
    };
  }

  handleURL = (event) => {
    event.preventDefault();
    let valueURL = event.target.value;
    const UserInput = { ...this.state, RESTurl: valueURL };
    this.setState(UserInput);
  };

  handleMethod = (event) => {
    event.preventDefault();
    let valueMethod = event.target.value;
    const UserInput = { ...this.state, Method: valueMethod };
    this.setState(UserInput);
  };

  handelSubmit = async (e) => {
    e.preventDefault();
    let header = await fetch(`${this.state.RESTurl}`);
    let body = await header.json();

    let results = header.results;
    let count = header.count;
    this.props.handler(results, count, body, header);
  };

  render() {
    return (
      <React.Fragment>
        <form className="from" onSubmit={this.handelSubmit}>
          <textarea
            onChange={this.handleURL}
            placeholder="Enter URL"
          ></textarea>

          <button> SUBMIT </button>

          <div className="buttons">
            <button onClick={this.handleMethod} className="get" value="GET">
              GET
            </button>

            <button onClick={this.handleMethod} className="post" value="POST">
              POST
            </button>

            <button onClick={this.handleMethod} className="put" value="PUT">
              PUT
            </button>

            <button
              onClick={this.handleMethod}
              className="delete"
              value="DELETE"
            >
              DELETE
            </button>
          </div>
        </form>

        <div className="result">
          <p> URL: {this.state.RESTurl} </p>
          <p> METHOD: {this.state.Method} </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
