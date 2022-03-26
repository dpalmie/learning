import React from 'react';
import './TodoListItem.css';

export default function TodoListItem({ todo, onRemovePressed, onCompletedPressed }) {
  return (
    <div className='todo-item-container'>
        <h3>{todo.text}</h3>
        <div className='buttons-container'>
        {todo.isCompleted ? null : 
        <button className='completed-button' onClick={() => onCompletedPressed(todo.text)}>
            Mark As Completed
        </button>}
        <button onClick={() => onRemovePressed(todo.text)} className='remove-button'>
            Remove
        </button>
        </div>
    </div>
  )
}
