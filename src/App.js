import logo from './logo.svg';
import './App.css';
import {Year} from './components/Year';
       
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Year/>
      </header>
    </div>
  );
}

export default App;
