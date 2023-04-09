import { useState } from 'react'
import {Routes,Route } from 'react-router-dom'
import About from './components/About'
const App=()=>{
  //TODO: Routes will be build here
  return (
    <Routes>
      {/*FIXME: This is temporary for guidence */}
      <Route path='about' element={<About/>}/>
    </Routes>
  )
}

export default App
