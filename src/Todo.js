import React, { useState } from 'react';
import { useFormInput } from './formsHook';

const Todo = (props) => {
    const inputState = useState('');

    const todoInput = useFormInput();

    const inputChangeHandler = (event) => {
        inputState[1](event.target.value);
    }

    return (
        <React.Fragment>
            <input type="text" placeholder="Todo" onChange={inputChangeHandler} value={inputState[0]} />
            <input type="text" placeholder="Todo" onChange={todoInput.onChange} value={todoInput.value} style={{ backgroundColor: todoInput.valid ? 'lightgreen' : 'pink' }} />
            <p>{inputState[0]}</p>
        </React.Fragment>
    );
};

export default Todo;