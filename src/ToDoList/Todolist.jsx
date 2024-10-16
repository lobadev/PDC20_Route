import React, { useState, useRef } from "react";
import TodoItems from "./Todoitems.jsx";

const TodoList = () => {
  const [items, setItems] = useState([]); // State for managing todo items
  const inputRef = useRef(null); // Reference to the input element

  const addItem = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (inputRef.current.value !== "") {
      const newItem = {
        text: inputRef.current.value,
        key: Date.now(),
      };

      // Update the state with the new item
      setItems((prevItems) => prevItems.concat(newItem));
      inputRef.current.value = ""; // Clear the input field
    }
  };

  const deleteItem = (key) => {
    // Filter out the item to be deleted
    const filteredItems = items.filter((item) => item.key !== key);
    setItems(filteredItems); // Update the state with the filtered items
  };

  return (
    <div className="todoListMain">
      <div className="header">
        <form onSubmit={addItem}>
          <input ref={inputRef} placeholder="Enter task" />
          <button type="submit">add</button>
        </form>
        <TodoItems entries={items} delete={deleteItem} />
      </div>
    </div>
  );
};

export default TodoList;
