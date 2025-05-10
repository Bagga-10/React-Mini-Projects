import React, { useState, useEffect } from "react";
import "../style.css";

function generateId() {
  return Math.floor(Math.random() * 1000000);
}

const LOCAL_STORAGE_KEY = "my-todo-app";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = () => {
    if (input.trim() === "") {
      setHasError(true);
      return;
    }

    const newTodo = {
      text: input,
      id: generateId(),
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInput("");
    setHasError(false);
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
  };

  return (
    <div>
        <h1>A goal without a plan is just a wish.</h1>
      <div className="container">
        <input
          className={`input ${hasError ? "error" : ""}`}
          type="text"
          value={input}
          placeholder="New Todo"
          onChange={(e) => {
            setInput(e.target.value);
            if (hasError) setHasError(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
        <button onClick={handleSubmit}>Submit</button>

        <ul className="todos-list">
          {todos.map(({ text, id }) => (
            <li key={id} className="todo">
              <span>{text}</span>
              <button onClick={() => removeTodo(id)} className="close">
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
