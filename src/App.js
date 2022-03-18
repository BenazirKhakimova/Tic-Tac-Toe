import React from "react";
import "./App.css";
import Heading from "./components/Heading/Heading";
import TicTacToe from "./components/TicTacToe/TicTacToe";

function App() {
  return (
    <div className="App">
      <Heading />
      <TicTacToe />
    </div>
  );
}

export default App;
