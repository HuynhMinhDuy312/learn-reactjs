import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Duy';
  const age = 18;
  const isMale = true;
  const student = {
    name: 'Easy Frontend'
  };
  const colorList = ['red', 'green', 'blue']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Duy Huynh
        </p>
        <p>Xin chao {name} - {age} - {isMale ? 'Male' : 'Female'} </p>

        {isMale && (
          <div>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </div>
        )}

        <p>{student.name}</p>

        <ul>
          {colorList.map(color => (
            <li style={{ color }}>{color}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
