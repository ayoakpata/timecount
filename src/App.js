import React, { Component } from "react";
import "./App.css";
import Timer from "./Timer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>Timer</h2>
        </div>
        <p className="App-intro">Time</p>
        <Timer start={Date.now()} />
      </div>
    );
  }
}

export default App;
