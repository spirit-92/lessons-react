import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowsRotate} from "@fortawesome/free-solid-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
function ButtonsTodo(props) {
    let activeTodo = 0;
    let todo=0;
    props.list.forEach(item =>{
        if (item.state){
            activeTodo =true
        }else {
            todo =true
        }
    })

    return (
        <div className="mb-4">
            <button  onClick={props.trashAllTasks.bind(true)} className={`btn btn-primary ${todo? '':'disabled'}`}>
                <FontAwesomeIcon icon={faArrowsRotate} />
            </button>
            <button onClick={props.trashAllTasks.bind(false)}  className={`btn btn-primary m-2 ${activeTodo? '':'disabled'}`}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    )
}

export default ButtonsTodo