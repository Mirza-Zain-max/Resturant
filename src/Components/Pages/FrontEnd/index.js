import React from 'react'
import NavHeader from '../../navHeader/navHeader'
import { Route, Routes } from 'react-router-dom'
// import Screenloader from './ScreenLoader/Screenloader'
import Home from './Home'
import MyTodos from '../../Dashboard/Todos/MyTodos';
// ...existing code...

const FrontEndIndex = () => {
  return (
    <>
      <NavHeader />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todos' element={<MyTodos />} />
        </Routes>
      </main>
    </>
  )
}

export default FrontEndIndex