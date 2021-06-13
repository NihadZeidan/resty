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

  render() {
    return (
      <div>
        <form className="from">
          <input
            onChange={this.handleURL}
            type="text"
            placeholder="Enter URL"
          />
          <input  type="submit" value="GO !" />
          
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
      </div>
    );
  }
}

export default Form;
