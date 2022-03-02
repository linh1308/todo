import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { saveTodo } from '../../features/todoSlice';
import './Input.scss';

const Input = () => {
    const [todo, setTodo] = useState('');
    const todoEdit = useSelector(state => state.todos.todoEdit);
    const isEditing = useSelector(state => state.todos.isEditing);
    const dispatch = useDispatch();
    const inputRef = useRef();

    useEffect(() => {
        if (isEditing) {
            setTodo(todoEdit.task);
            inputRef.current.focus();
        }
    }, [todoEdit.task, isEditing])

    const handleAddTodoClick = () => {
        if (isEditing) {
            dispatch(saveTodo({
                id: todoEdit.id,
                task: todo,
                isFinish: todoEdit.isFinish
            }))
        } else {
            dispatch(saveTodo({
                id: uuidv4(),
                task: todo,
                isFinish: false
            }))
        }
        setTodo('');
    }
    return (
        <div className='input'>
            <input ref={inputRef} className='input__box' type='text' placeholder='Enter your input...' value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button className='input__btn' onClick={handleAddTodoClick}>{isEditing ? 'Edit' : 'Add'}</button>
        </div>
    )
}

export default Input;