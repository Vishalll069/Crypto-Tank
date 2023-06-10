import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import {Navbar} from './components/Navbar'
import { Intro } from './components/Intro';
import { Market } from './components/Market';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App' >
      <Navbar/>
      <Intro/>
      <Market/>
    </div>
  )
}

export default App
