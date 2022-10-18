import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee ,faCheckCircle } from '@fortawesome/fontawesome-free-solid'
import {GenerateTodo,Todo} from "./components/todo/generateClassTodo/Todo";
import {useState} from "react";

function App() {
  let todos = new Todo('My todo')
  const [todo,changeTodo] = useState('')


  console.log(todo)
  changeTodo('sd')
  console.log(todo)
  return (
    <div className="container">
      <h1>test</h1>
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faCheckCircle} />
        <button className="btn btn-primary">sd</button>
    </div>
  );
}

export default App;
