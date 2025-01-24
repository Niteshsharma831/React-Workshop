import React, { useState } from "react";

function CounterApp() {
  const [counter, setCounter] = useState(0);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <div>
        <h1>This is Counter App</h1>
        <h2>Counter Value: {counter}</h2>
        <button
          onClick={() => setCounter(counter + 1)}
          style={{
            backgroundColor: "green",
            textAlign: "center",
            height: "5vh",
            width: "40%",
            borderRadius: "5px",
            border: "none",
            color: "white",
          }}
        >
          Increment
        </button>
        <button
          onClick={() => setCounter(counter - 1)}
          style={{
            margin: "5px",
            color: "white",
            backgroundColor: "red",
            textAlign: "center",
            height: "5vh",
            width: "40%",
            borderRadius: "5px",
            border: "none",
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
