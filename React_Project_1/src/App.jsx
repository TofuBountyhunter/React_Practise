import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0);
    // let counter=0;

  const add= ()=>{
    counter = counter+1;
    setCounter(counter);
    // setCounter(counter+1);
    // console.log(counter);
  }

  const remove= ()=>{
    if (counter === 0){ 
      setCounter(0);
    }   
    else{
      setCounter(counter-1);
    }

    // console.log(counter);
  }

  return (
    <>
    <h1>This is a Counter!!</h1>
    <h2>Count : {counter}</h2><br />
    <button onClick={add}>ADD</button><br/><br />
    <button onClick={remove}>REMOVE</button>
    </>
  )
}

export default App
