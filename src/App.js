import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line max-len
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member,no-unused-vars
import Button from './components/Button/button';

function App() {
  return (
    <div className="App">
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <header className="App-header">
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <img src={logo} className="App-logo" alt="logo"/>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <p>
          {/* eslint-disable-next-line react/react-in-jsx-scope */}
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <Button className='button' onClick={() => {
          // eslint-disable-next-line no-alert
          alert('First button clicked!');
        }}>Click me to open an alert</Button>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <Button className='button' onClick={() => {
          // eslint-disable-next-line no-alert
          alert('Second button clicked!');
        }} disabled>
          Click me to open an alert
        </Button>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <Button className='button' active href="test">Click me to open an alert</Button>
      </header>
    </div>
  );
}

export default App;
