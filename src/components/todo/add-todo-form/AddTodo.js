import {useState} from "react";function AddTodo(props) {
    const [addText,changeText] = useState('')
    const textTodo = (e) =>  changeText(e.target.value)



    function submitForm(e){
        e.preventDefault()

        if (e.target.text.value){
            props.addTodo(e.target.text.value.trim())
            changeText('')
        }



    }
    return (
        <>
            <form className="mb-3" onSubmit={submitForm}>
                <div className="form-group">
                    <input type="text"
                           className="form-control"

                           value={addText}
                           onChange={textTodo}
                           name='text'
                           id="exampleInputText1"
                           aria-describedby="textHelp"
                           placeholder="Enter text">

                    </input>

                </div>
                <button className="btn btn-primary mt-3" type="submit">Save</button>
                </form>

        </>
    )
}

export default AddTodo