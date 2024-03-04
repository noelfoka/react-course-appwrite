import './App.css'
import { useState } from 'react';

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    <h1 className='text-white my-3 text-center'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
        type='text'
        value={password}
        className='outline-none px-3 py-1 w-full'
        placeholder='Password'
        readOnly
      />
    </div>
   </div>
  )
}

export default App
