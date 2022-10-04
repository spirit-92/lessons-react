import './RandomNumberComponent.css';
import {useState} from "react";
import getRandNumber from "./shared/getRandNumber";

function RandomNumberComponent(props) {
    let maxNumber = props.maxNumber

    const [stateRandNum, setRandNum] = useState(getRandNumber(maxNumber));
    const setUIRandomNum = () => {
        setRandNum(getRandNumber(maxNumber))
    }
    return (
        <div className='container'>
            <h1>{stateRandNum}</h1>
            <button onClick={setUIRandomNum}>New number</button>
        </div>
    )
}

export default RandomNumberComponent