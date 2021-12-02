import React from 'react';
import {Routes,Route} from "react-router-dom"

function App() {
  
  return (
    <Routes>
      <Route exact to="/" element={<Home></Home>}/>
      <Route exact to="/items" element={<Products/>}/>
      <Route exact to="/items:id" element={<Product/>}/>
    </Routes>
  )
}

export default App
