import { useState } from 'react';
import './App.css';
import InputText from './components/InputText'
import ToDoItem from './components/ToDoItem'

function App() {

  const [items,setItems] = useState([]);

  function addItem(newText){
    // setItems(newText)
    setItems((previousItems) => {
      return [...previousItems,newText]
    } )
  }

  function deleteItem(id){
    setItems((previousItems) =>{
      return previousItems.filter((item,index)=>{
        return index!==id;
      })
    })
  }
  console.log(items)

  return (
    <div className="container">
      <div className="heading">
        <h1>ToDo-List</h1>
        <InputText addItem={addItem} />
        <div>
          {
            items.map((todoitems,index) =>{
              return <ToDoItem key={index} todoitems={todoitems} id={index} deleteItem={deleteItem} />
            })
          }
        </div>
        {/* <ToDoItem /> */}
       
      </div>
    </div>
  );
}

export default App;
