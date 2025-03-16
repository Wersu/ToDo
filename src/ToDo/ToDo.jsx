import React, { useState } from "react";
import './ToDo.css'
import ToDoItem from "./ToDoItem";

const ToDo = () => {
    const [name, setName] = useState('')
    const [todos, setTodos] = useState([
        {
            _id: 1,
            name: 'Купить молоко',
            isChecked: true,
        },
    ])

    const addTodoHandler = e => {
        if (e.key === 'Enter') {
            e.preventDefault()
            setTodos(prev => [...prev,{
                    _id: todos.length,
                    name,
                    isChecked: false,
            }])
            setName('')
        }
    }

    const toggleCheckedTodo = idx => {
        const newArray = [].concat(todos)
        newArray[idx].isChecked = !newArray[idx].isChecked
        setTodos(newArray)
    }

    return (
        <>
            <h1 className="title">ToDo приложение</h1>
            {todos && todos.map((todo,idx) => 
                <ToDoItem 
                    key={todo._id} 
                    idx={idx}
                    name={todo.name} 
                    isChecked={todo.isChecked} 
                    toggleCheckedTodo={toggleCheckedTodo}
                />)}
            <input
                className="text-input"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                onKeyDown={addTodoHandler}
                placeholder="Название"
            />
        </>
    )
}

export default ToDo