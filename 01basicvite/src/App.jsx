import Youtube from './youtube';

function App() {

  const username = 'Noel FOKA';
  const age = 33;
  return (
    <>
      <h1>My name is {username}</h1>
      <h1>My age is {age}</h1>
      <h1>{(username && (age === 33)) ? 'yes' : 'no'} </h1>
      <Youtube />
    </>
  )
}

export default App
