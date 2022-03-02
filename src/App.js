import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import Input from './components/Input';
import TodoItem from './components/TodoItem';

const App = () => {
  const todos = useSelector(state => state.todos.todoList);
  return (
    <div className='app'>
      <Input />

      <div className='todos__container'>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo}/>
        ))}
      </div>
    </div>
  )
}

export default App;