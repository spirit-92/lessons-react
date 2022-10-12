import './WrapperStyle.css'
function WrapperComponent(props){
    return (
        <div style={{color:props.color}} className='WrapperClass'>
            {props.children}
        </div>
    )
}
export default WrapperComponent