import "./App.css";
import React from "react";
import GetOlder from "./components/getOlder";
import ToDoList from "./components/To Do List/toDoList";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Practice!</h1>
      <GetOlder />
      <hr></hr>
      <ToDoList />
    </div>
  );
}

export default App;
