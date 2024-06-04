import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import VendingMachine from "./VendingMachine"
import Chips from './Chips';
import './App.css'
import Drinks from './Drinks';
import Chocolate from './Chocolate';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='chips' element={<Chips />} />
          <Route path='drinks' element={<Drinks />} />
          <Route path='chocolate' element={<Chocolate />} />
          <Route path='/' element={<VendingMachine />} />
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
