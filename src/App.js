import "./App.css";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import ToDo from "./components/To Do List - Moz/ToDo";
import Form from "./components/To Do List - Moz/Form";
import FilterButton from "./components/To Do List - Moz/FilterButton";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  const addTask = (name) => {
    const newTask = { id: "todo" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  };

  const taskList = tasks.map((task) => (
    <ToDo
      name={task.name}
      id={task.id}
      completed={task.completed}
      key={task.id}
    />
  ));

  const taskNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${taskNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
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
