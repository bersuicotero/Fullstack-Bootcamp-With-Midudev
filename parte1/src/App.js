import './App.css';
import Mensaje from './Mensaje';
const App = () => {
  return (
    <div className="App">
      <Mensaje color="red" message="estamos trabajando"/>
      <Mensaje color="blue" message="en una aplicación"/>
      <Mensaje color="green" message="con React"/>
    </div>
  );
}

export default App;
