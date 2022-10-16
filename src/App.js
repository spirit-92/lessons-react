
import './App.css';
import CssTestComponent from "./comonents/cssTestComponent/cssTestComponent";
import StyleTest from "./comonents/cssTestComponent/cssTestStyle.module.css";


function App() {
  return (
    <div className="App">
      <h1>test</h1>
        <CssTestComponent />
        <button className="btn">CssTestComponent</button>
        <button className={StyleTest.btn}>CssTestComponent</button>
    </div>
  );
}

export default App;
