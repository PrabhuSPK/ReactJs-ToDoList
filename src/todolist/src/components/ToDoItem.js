import React from 'react'

const ToDoItem = (props) => {
  return (
    <div >
        <ul>
            <li>{props.todoitems}{props.id}</li>
            <button onClick={()=>props.deleteItem(props.id)}>Delete</button>
        </ul>
    </div>
  )
}

export default ToDoItem