import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import Login from './login'
import Forgot from './Forgot'
import { Fade } from 'react-awesome-reveal'

const Index = () => {
  return (
    <>
      <Fade direction='center'>
        <Routes>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='forgot' element={<Forgot />} />
        </Routes>
      </Fade>
    </>
  )
}

export default Index