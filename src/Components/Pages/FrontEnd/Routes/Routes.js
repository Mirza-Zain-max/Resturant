import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FrontEndIndex from '../index' 

const Index = () => {
  return (
   <>
   <Routes>
    <Route path='/*' element={<FrontEndIndex/>}/>
   </Routes>
   </>
  )
}

export default Index