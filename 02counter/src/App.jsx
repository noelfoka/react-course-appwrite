import './App.css'

function App() {

  let counter = 50;

  const addValue = () => {
    counter + 1;
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
      <button>Remove Value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
