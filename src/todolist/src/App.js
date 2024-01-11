import './App.css';
import InputText from './components/InputText'
import ToDoItem from './components/ToDoItem'

function App() {
  return (
    <div className="container">
      <div className="heading">
        <h1>ToDo-List</h1>
        <InputText />
        <ToDoItem />
      </div>
    </div>
  );
}

export default App;
