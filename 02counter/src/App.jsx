import './App.css'
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0)
  // let counter = 50;

  const addValue = () => {
    setCounter(counter + 1);
    console.log(counter);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  const resetValue = () => {
    setCounter(0);
  }

  return (
    <>
      <h1>React course with Joel</h1>
      <h2>Counter value: {counter}</h2>
      <button
        onClick={addValue}
      >
        Add Value
      </button> {" "}
      <button onClick={resetValue}>Reset</button> {""}
      <button onClick={removeValue}>
        Remove Value
      </button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
