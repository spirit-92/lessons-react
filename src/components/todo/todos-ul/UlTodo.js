import LiTodo from "../todo-li/LiTodo";


function UlTodo(props) {

    return (
        <>
            <ul className='list-group'>
                <LiTodo changeStatusTodo={props.changeStatusTodo} setTodo = {props.setArr} li = {props.list}  deleteItem={props.deleteItem}  />
            </ul>
        </>
    )
}

export default UlTodo