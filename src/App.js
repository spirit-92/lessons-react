import './App.css';
import {ShardFunc} from "./components/ShardFunc";
import {ShardFunc2} from "./components/ShardFunc";
import MyFirstComponent from "./components/MyFirstComponent";


function App() {
    return (
        <div className="App">
            <h1>test</h1>
            <MyFirstComponent />
            <ShardFunc />
            <MyFirstComponent />
            <ShardFunc2 />
            <MyFirstComponent />
        </div>
    );
}

export default App;
