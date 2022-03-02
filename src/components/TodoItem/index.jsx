import { Checkbox } from '@material-ui/core';
import React from 'react';
import { FaTrashAlt, FaPenAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { checkTodo, editTodo, removeTodo } from '../../features/todoSlice';
import './TodoItem.scss';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const handleCheck = () => {
        dispatch(checkTodo(todo.id))
    }

    const handleRemoveTodoClick = () => {
        dispatch(removeTodo(todo.id))
    }

    const handleEditTodoClick = () => {
        dispatch(editTodo(todo.id))
    }
    return (
        <div className='todo-item'>
            <Checkbox checked={todo.isFinish} color='primary' onChange={handleCheck}
                inputProps={{ 'aria-label': 'secondary checkbox' }} />

            <p className={todo.isFinish ? 'todo-item__title todo-item__finish' : 'todo-item__title'}>{todo.task}</p>
            <div className='icon'>
                <FaTrashAlt className='icon__remove' onClick={handleRemoveTodoClick} />
                <FaPenAlt className='icon__edit' onClick={handleEditTodoClick}/>
            </div>

        </div>
    )
}

export default TodoItem;