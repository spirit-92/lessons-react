
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [todo,setTodo] = useState(null)

    useEffect( ()=>{
        console.log('laceholder')
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setTodo(json))
    },[])

  return (
    <div className="App">
      <h1>{todo?todo.title:'loader '}</h1>
    </div>
  );
}

export default App;
