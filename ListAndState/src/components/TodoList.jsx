import React, { useState } from 'react';

export function TodoList() {
  const [todos, setTodos] = useState(["Fare la spesa", "Studiare React", "Portare a spasso il cane"]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue(''); 
    }
  };

  const handleResetTodos = () => {
    setTodos([]);  
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Rimuovi</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Aggiungi un nuovo todo"
      />
      <button onClick={handleAddTodo}>Aggiungi Todo</button>
      <button onClick={handleResetTodos}>Resetta Todo</button>
    </div>
  );
}

