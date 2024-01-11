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

  console.log(items)

  return (
    <div className="container">
      <div className="heading">
        <h1>ToDo-List</h1>
        <InputText addItem={addItem} />
        <ToDoItem />
       
      </div>
    </div>
  );
}

export default App;
