import "../../App.css";

const ToDoContainer = ({ items, done, setDone }) => {
  const handleClick = () => {
    console.log(done);
    setDone(!done);
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={id}
          className="todo-container_item"
          style={{ color: done ? `green` : `red` }}
        >
          {item + "  "}
          <button onClick={handleClick}>Done ✅</button>
        </div>
      ))}
    </div>
  );
};

export default ToDoContainer;
