import logo from './logo.svg';
import './App.css';
import TabMenu from './TabMenu/TabMenu'

function Header({props}) {
  const num = Math.random();
  console.log(props);
  return(
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
          Learn React from {props}
        </a>
      </header>
  );
}

function App() {
  const obj = {
    name: 'Emp 1',
    id: '1802',
    age: '26'
  }

  const name = 'Prakash'
  return (
    <div className="App">
      <Header props={name}></Header>
      <TabMenu></TabMenu>
    </div>
  );
}

export default App;
