import './FormStyle.css'

function FormComponent() {
    function submitForm(e){
        e.preventDefault()
        const saveDate = {
            name:e.target.name.value,
            password:e.target.password.value
        }
        console.log(saveDate)
    }
    return (
        <>
            <div className="container__form">
                <h3 style={{textAlign:'center'}}>Form login</h3>
                <form onSubmit={submitForm}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="name" placeholder="Your name.." />

                        <label htmlFor="lname">Last Name</label>
                        <input type="password" id="lname" name="password" placeholder="Your last name.." />
                        <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}

export default FormComponent