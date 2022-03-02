import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: [],
    todoEdit: {},
    isEditing: false
}

const findIndex = (arr, item) => {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === item) {
            index = i;
        };
    }
    return index;
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            let result = findIndex(state.todoList, action.payload.id);
            if (result !== -1) {
                state.todoList[result] = action.payload; 
                state.isEditing = false;
            } else {
                state.todoList.push(action.payload);
            }
        },

        checkTodo: (state, action) => {
            state.todoList.map(item => {
                if (action.payload === item.id) {
                    item.isFinish = !item.isFinish;
                }
                return item.isFinish;
            })
        },

        removeTodo: (state, action) => {
            let result = findIndex(state.todoList, action.payload);
            if (result !== -1) {
                state.todoList.splice(result, 1);
            }
        },

        editTodo: (state, action) => {
            let result = findIndex(state.todoList, action.payload);
            if (result !== -1) {
                state.todoEdit = state.todoList[result];
                state.isEditing = true;
            }
        }
    }
})

export const { saveTodo, checkTodo, removeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;