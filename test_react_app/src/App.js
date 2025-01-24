import react, { Component } from "react";
export default class App extends Component {
  Abc(name, age) {
    return `My name is ${name} and age is ${age}`;
  }
  render() {
    const result = this.Abc("Nitesh Kumar Sharma", 25);
    console.log(result);
    return (
      <div>
        <h1>Hello World!</h1>
        <p>{result}</p>
      </div>
    );
  }
}
