function ButtonComponent({setCounter,nameBtn}){
    return (
        <button onClick={setCounter} className="btn">{nameBtn}</button>
    )
}
export default ButtonComponent