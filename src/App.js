import logo from './logo.svg';
import './App.css';
import { useCount } from './useCount';
import { Form } from './Form';


function App() {

  const {count , increase , decrease , reset} = useCount()
  return (
    <div className="App">
      {count}

      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>reset</button>


      <Form />
      


    </div>
  );
}

export default App;

