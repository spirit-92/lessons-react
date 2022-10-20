import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import liStyle from './liTodoStyle.module.css'

function LiTodo(props) {

    let completeTodoLen = props.li.filter(todo =>{
        return  todo.state
    })

    return (
        <>
            {props.li.length ? props.li.map((item, index) => {
                return <li data-todo-id={item.id} onDoubleClick={props.deleteItem}
                           className={`list-group-item d-flex justify-content-between align-items-center mb-2 ${liStyle.fun_li}`}
                           key={index}>
                    <div
                        className={`list-group-item d-flex justify-content-between ${item.state ? 'disabled' : ''} ${liStyle.listTodo} ${liStyle.fun_li} `}>
                        <span>{item.name}</span>
                        <i onClick={props.deleteItem.bind(item.id)}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </i>
                    </div>

                    <i onClick={props.changeStatusTodo.bind(item.id)}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </i>

                </li>
            }) : <h3>Empty</h3>}
            {completeTodoLen.length ? <h3 className="h3 mt-3 text-center">Complete tasks {completeTodoLen.length}</h3>:''}
        </>
    )
}

export default LiTodo