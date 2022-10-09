import './App.css';
import CounterComponent from "./components/CounterComponent";
import ButtonComponent from "./components/ButtonComponent";
import {useState} from "react";
import DateMock from "./data/DateMock";
import PersonsComponent from "./components/PersonsComponent";
import ResetBtnComponent from "./components/ResetBtnComponent";

const nameBtn = ['take me','set me','click me']
function App() {
   const [count,setCount] = useState(0)
    const incrementCount= ()=>{
       setCount(count+1)
    }
    return (
        <div>
            <div className="App">
            <CounterComponent count={count}/>
            {nameBtn.map((name,index)=>{
                return (
                    <div key={index} className={"btn"+(index+1)}>
                        <ButtonComponent setCounter={incrementCount} nameBtn={name} />
                    </div>
                )
            })}
            </div>
            <ResetBtnComponent  setCount={setCount} count={count} />

            <PersonsComponent  {...DateMock}/>


        </div>
    );
}

export default App;
