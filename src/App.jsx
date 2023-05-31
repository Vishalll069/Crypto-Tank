import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import {Navbar} from './components/Navbar'
import { Intro } from './components/Intro';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App' style={{backgroundColor:'#242424'}} >
      <Navbar/>
      <Intro/>
    </div>
  )
}

export default App
