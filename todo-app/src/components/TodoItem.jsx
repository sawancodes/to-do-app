import React from 'react';

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(todo.id)}>
        {todo.text}
      </span>
      <button onClick={() => toggleComplete(todo.id)}>Complete</button>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </div>
  );
};

export default TodoItem;
