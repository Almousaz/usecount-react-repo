import logo from './logo.svg';
import './App.css';
import { useCount } from './useCount';


function App() {

  const {count , increase , decrease , reset} = useCount()
  return (
    <div className="App">
      {count}

      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>reset</button>
      


    </div>
  );
}

export default App;

