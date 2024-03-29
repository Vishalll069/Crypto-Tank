import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import {Navbar} from './components/Navbar'
import { Intro } from './components/Intro';
import { Market } from './components/Market';
import { Home } from './Pages/Home';
import { Coin } from './Pages/Coin';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App' >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
      </Routes>
    </div>
  )
}

export default App
