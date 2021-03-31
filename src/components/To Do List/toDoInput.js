import React from "react";

const ToDoInput = () => {
  const handleOnChange = (event) => {
    let newItem = event.target.value;
    console.log("New item:", newItem);
  };

  function handleOnClick({ items, setItems, newItem }) {
    const array = [items];
    const newArray = array.push(newItem);
    setItems(newArray);
  }

  return (
    <div>
      <input
        type="text"
        name="to-do input"
        onChange={(event) => handleOnChange(event)}
      ></input>
      <button onClick={handleOnClick}>Add</button>
    </div>
  );
};

export default ToDoInput;
