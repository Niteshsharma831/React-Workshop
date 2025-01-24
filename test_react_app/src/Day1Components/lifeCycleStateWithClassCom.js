import React, { Component } from "react";
export default class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nitesh Kumar Sharma",
    };
  }
  componentWillMount() {
    alert("componentWillMount() called.");
  }
  componentDidMount() {
    alert("componentDidMount() called.");
  }

  changeState() {
    this.setState({ name: "I am learning React Series" });
  }
  render() {
    return (
      <div>
        <h1>ReactJS Component Lifecycle</h1>
        <h3>State: {this.state.name}</h3>
        <button onClick={this.changeState.bind(this)}>Change State</button>
      </div>
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    alert("shouldComponentUpdate() called.");
    return true;
  }
}
