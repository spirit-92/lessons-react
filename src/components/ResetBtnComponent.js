import './ResetBtnSyle.css'
function ResetBtnComponent (setCount){
    let count = setCount.count
    setCount = setCount.setCount

    const resetCount = ()=>{
        setCount(0)
    }
    return (
        <div className='resetBtn'>
            {!!count && (<button onClick={resetCount} >Reset</button>)}

        </div>
    )

}
export default ResetBtnComponent