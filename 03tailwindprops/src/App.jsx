import './App.css'
import Card from './components/Card'

function App() {

  return (
    <div>
      <h1 className='text-3xl bg-green-400 p-3 rounded-lg'>Vite with tailwind</h1>
      <Card username="noelfoka" post="FullStack Developer" />
      <Card />
      <Card />
    </div>
  )
}

export default App
