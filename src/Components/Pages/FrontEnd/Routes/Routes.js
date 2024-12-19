import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FrontEndIndex from '../index'
// import PrivateRoutes from './privateRoutes'
// import PublicRoutes from './publicRoutes'
import Auth from '../../Auth'
import Login from '../../Auth/login'
import Register from '../../Auth/Register'
import Forgot from '../../Auth/Forgot'

const Index = () => {
  return (
    <>
      <Routes>
        <Route path='/*' element={<FrontEndIndex />} />
        {/* <Route path='/private' element={<PrivateRoutes />}>
        </Route> */}
        <Route path='/auth/*' element={<Auth />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='forgot' element={<Forgot />} />
        </Route>
      </Routes>
    </>
  )
}

export default Index