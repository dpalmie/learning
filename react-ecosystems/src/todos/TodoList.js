import React from 'react'
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';
import { markTodoComplete, removeTodo } from './actions';
import { connect } from 'react-redux';

function TodoList({ todos = [], onRemovePressed, onCompletedPressed }) {
  return (
    <div className='list-wrapper'>
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} onCompletedPressed={onCompletedPressed} onRemovePressed={onRemovePressed}/> )}
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
  onCompletedPressed: text => dispatch(markTodoComplete(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

