import React from 'react'
import NavHeader from '../../navHeader/navHeader'
import { Route, Routes } from 'react-router-dom'
// import Screenloader from './ScreenLoader/Screenloader'
import Home from './Home'


const FrontEndIndex = () => {
  return (
    <>
      <NavHeader />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </>
  )
}

export default FrontEndIndex