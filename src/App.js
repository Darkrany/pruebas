import logo from './logo.svg';
import './App.css';
import {Year} from './components/Year';
import Books from './components/Books';
       
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Year/>
       <hr/>
       <h4>Formulario LocalStorage</h4>
       <Books/>
      </header>
    </div>
  );
}

export default App;
