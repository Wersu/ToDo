import React from 'react'

const ToDoItem = ({idx, name, isChecked, toggleCheckedTodo}) => {
  return (
    <div className='todo-item' onClick={() => toggleCheckedTodo(idx)}>
        <input className="todo-item__checkbox" type="checkbox" checked={isChecked}  />
        <span className="todo-item__name">{name}</span>
    </div>
  )
}

export default ToDoItem