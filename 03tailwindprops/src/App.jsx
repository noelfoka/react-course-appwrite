import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='text-3xl bg-green-400 p-3 rounded-full'>Vite with tailwind</h1>
      <Card username="noelfoka" />
      <Card />
      <Card />
    </>
  )
}

export default App
