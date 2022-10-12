import './FormStyle.css'
import {useState} from "react";

function FormComponent() {

    const [stateData,changeData] = useState({
        name:'',
        password:''
    })
    function submitForm(e){
        e.preventDefault()

        console.log(stateData)
    }
    function changeStateF(text , name){
        changeData({...stateData , [name]:text})
    }



    return (
        <>
            <div className="container__form">
                <h3 style={{textAlign:'center'}}>Form login</h3>
                <form onSubmit={submitForm}>
                    <label htmlFor="name_input">First Name</label>
                    <input type="text" id="name_input" value={stateData.name} onChange={(e)=>changeStateF(e.target.value,'name')} placeholder="Your name.." />

                        <label htmlFor="password_input">Last Name</label>
                        <input type="password" id="password_input" value={stateData.password} onChange={(e)=>changeStateF(e.target.value,'password')}  placeholder="Your last name.." />
                        <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}

export default FormComponent