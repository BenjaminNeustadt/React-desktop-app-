import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const addTodo = e => {
    e.preventDefault();
    if(value.trim() === '') return;
    setTodos([
      ...todos,
      {
        text: value,
        id: uuidv4(),
      },
    ]);
    setValue("");
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={addTodo}>
          <input
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Add todo..."
          />
          <button type="submit">Add</button>
        </form>
        {todos.map((todo) => (
          <div key={todo.id} className="todo">
            <p>{todo.text}</p>
            <span onClick={() => removeTodo(todo.id)}>X</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
