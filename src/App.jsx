import { useState } from 'react'
import './App.css'

function Button({onClick}){
  return (
    <button onClick={onClick}>
      Click me
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const counter = ()=>{
    setCount(count + 1);
  }

  return (
    <>
      <p>{count}</p>
      <Button onClick={counter}></Button>
    </>
  )
}

export default App
