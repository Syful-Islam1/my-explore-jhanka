import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';


function App() {
  function handleClick(){
    alert('button clicked');
  }
  const handleClick2 =() =>{
    alert('button clicked 2');
  }
  const addToFive = (num) =>{
    alert(num+5);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=> {alert('third Clicked')}} >Third</button>
      {/* vejailla */}
      <button onClick={() => addToFive(5)} >Four</button>
     </>
  )
}

export default App
