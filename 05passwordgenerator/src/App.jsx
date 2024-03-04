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
      <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >
          Copy
      </button>
    </div>

    <div
      className='flex text-sm gap-x-2'
    >
      <div className='flex items-center gap-x-1'>
        <input 
          type='range'
          min={6}
          max={100}
          value={length}
          name=''

        />
      </div>
    </div>
   </div>
  )
}

export default App
