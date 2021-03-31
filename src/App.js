import "./App.css";
import React from "react";
import ToDo from "./components/To Do List - Moz/ToDo";
import Form from "./components/To Do List - Moz/Form";
import FilterButton from "./components/To Do List - Moz/FilterButton";

function App(props) {
  const addTask = (name) => {
    alert(name);
  };
  const taskList = props.tasks.map((task) => (
    <ToDo
      name={task.name}
      id={task.id}
      completed={task.completed}
      key={task.id}
    />
  ));

  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
