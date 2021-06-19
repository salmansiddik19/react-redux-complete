import React, { Component } from "react";
import Info from "./Info";
import AddInfo from "./AddInfo";

class App extends Component {
  state = {
    infos: [
      { name: "kazal", age: "29", id: 1 },
      { name: "siddik", age: "30", id: 2 },
      { name: "salman", age: "31", id: 3 },
    ],
  };

  addInfo = (info) => {
    info.id = Math.random();
    let infos = [...this.state.infos, info];
    this.setState({
      infos: infos,
    });
  };

  deleteInfo = (id) => {
    let infos = this.state.infos.filter((info) => info.id !== id);
    this.setState({
      infos: infos,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <p>this is a single page app</p>
        <Info infos={this.state.infos} deleteInfo={this.deleteInfo} />
        <AddInfo addInfo={this.addInfo} />
      </div>
    );
  }
}

export default App;
