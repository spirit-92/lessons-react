import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {GenerateTodo, Todo} from "./components/todo/generateClassTodo/Todo";

import AddTodo from "./components/todo/add-todo-form/AddTodo";
import UlTodo from "./components/todo/todos-ul/UlTodo";
import {useState} from "react";
import ButtonsTodo from "./components/todo/buttons-todo/Buttons-todo";


function App() {
    const [todo, setTodo] = useState(new Todo('My todo').todos)

    function addTodo(text) {
        setTodo(oldArray => [...oldArray, new GenerateTodo(false, text)]);
    }

    function deleteItemHandler() {
        setTodo(todo.filter(item => item.id !== +this));
    }

    function changeStatusTodoHandler(){
        setTodo(todo.map(todo => {
            if (todo.id === this){
                todo.state = !todo.state
            }
            return todo
        }));
    }

    function trashAllTasksHandler(){
        this?  setTodo(todo.filter(item => item.state)):setTodo(todo.filter(item => !item.state))
    }


    return (
        <div className="container mt-5">
            <h1 className='text-center'>Todos</h1>
            <AddTodo addTodo={addTodo}></AddTodo>

            <ButtonsTodo list={todo}  trashAllTasks = {trashAllTasksHandler} />
            <UlTodo list={todo} setArr={setTodo} deleteItem = {deleteItemHandler} changeStatusTodo={changeStatusTodoHandler} />
        </div>
    );
}

export default App;
