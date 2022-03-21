import logo from './logo.svg';
import './App.css';
import Button from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button className='button' onClick={() => { alert('First button clicked!')}}>Click me to open an alert</Button>
        <Button className='button' onClick={() => { alert('Second button clicked!')}} disabled >
          Click me to open an alert
        </Button>
        <Button className='button' active href='test' >Click me to open an alert</Button>
      </header>
    </div>
  );
}

export default App;
