import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import FrontEndIndex from '../index'
// import PrivateRoutes from './privateRoutes'
// import PublicRoutes from './publicRoutes'

import Auth from '../../Auth'
import Login from '../../Auth/login'
import Register from '../../Auth/Register'
import Forgot from '../../Auth/Forgot'
import About from 'Components/Pages/AboutPage/About'
import Service from 'Components/Pages/Services/Service'
import { useAuthContext } from 'Components/Pages/Context/Auth'

const Index = () => {

  const {isAuth} = useAuthContext()
  return (
    <>
      <Routes>
        <Route path='/*' element={<FrontEndIndex />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        {/* <Route path='/private' element={<PrivateRoutes />}>
        </Route> */}
        <Route path='/auth/*' element={!isAuth ? <Auth /> : <Navigate to="/"/>}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='forgot' element={<Forgot />} />
        </Route>
      </Routes>
    </>
  )
}

export default Index