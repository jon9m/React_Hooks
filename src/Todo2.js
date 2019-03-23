import React, { useState, useEffect } from 'react';
const Todo = (props) => {

    //Using Array Destructuring
    const [todoName, setToDoName] = useState('');
    const [toDoList, setToDoList] = useState([]);

    const inputChangeHandler = (event) => {
        setToDoName(event.target.value);
    }

    const addtoDoHandler = () => {
        let todos = [...toDoList];
        todos.push(todoName);
        setToDoList(todos);
    }

    useEffect(() => {
        //Async stuff here
        setTimeout(() => {
            const toDOName = todoName;
            setToDoName(toDOName + ' updated');
        }, 2000);

        return () => {
            // cleanup work here - automatically callled by react
        }

    }, [toDoList]);  //remove second arg or use todoName to see infinite loop

    return (
        <React.Fragment>
            <input type="text" placeholder="Todo" onChange={inputChangeHandler} value={todoName} />
            <p>{todoName}</p>
            <input type="button" value="Add" onClick={addtoDoHandler} />
            {toDoList.map((item, index) => {
                return <p key={item+index}>{item}</p>
            })}
        </React.Fragment>
    );
};

export default Todo;