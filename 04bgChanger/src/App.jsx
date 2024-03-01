import './App.css'

function App() {

  return (
    <div className="w-full h-screen duration-200">
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          >Test 1</button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          >Test 2</button>
        </div>
      </div>
    </div>
  )
}

export default App
