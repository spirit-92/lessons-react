import './App.css';
import InfoPets from "./components/InfoPets";

function App() {
  return (
    <div className="App">
        <InfoPets infoPets={{
            animal:'dog',
            year:3
        }} />

        <InfoPets infoPets={{
            animal:'cat',
            year:5
        }} />
    </div>
  );
}

export default App;
