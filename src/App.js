import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App()  {

  try {
    const url = 'https://jsonplaceholder.typicode.com/todos/12'
    axios.get(url)
    .then(res => {
      const persons = res.data;
      console.log(persons)
    })
    .catch(error => console.log(error));
  } catch (error) {
    console.log('Fail to fetch Data:', error)
  }

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
      </header>
    </div>
  );
}

export default App;
