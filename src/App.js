
import './App.css';
import WrapperComponent from "./ components/wrapper/WrapperComponent";

function App() {
  return (
    <div className="App">
        <WrapperComponent color='red'>
            <div>
                <h1>hello for inside wrapper</h1>
                <button>Hello click</button>
            </div>
        </WrapperComponent>
        <WrapperComponent>
            <div>
                <h1>hello for inside wrapper 2 </h1>
                <button>Hello click 2</button>
            </div>
        </WrapperComponent>
    </div>
  );
}

export default App;
