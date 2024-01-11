import React from 'react'

const ToDoItem = (props) => {
  return (
    <div>
        <ul>
            <li>{props.todoitems}</li>
        </ul>
    </div>
  )
}

export default ToDoItem