import logo from './logo.svg';
import './App.css';
import Click from './component/Click';
import News from './component/in-state async/News';
import SecondClock from './component/SecondClock';

function App() {
  return (
    <>
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
        </header>
        <Click />
        <News />
        <SecondClock />
      </div>
    </>
  );
}

export default App;
