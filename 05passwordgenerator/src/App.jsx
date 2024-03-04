import './App.css'
import { useState } from 'react';

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  return (
   <h1 className='bg-red-400'>Setup started</h1>
  )
}

export default App
