// import React from 'react'
// import { Navigate, Route, Routes } from 'react-router-dom'
// import FrontEndIndex from 'Pages/FrontEnd/Home'
// import Auth from 'Pages/Auth'
// import Login from '../Auth/login'
// import Register from '../Auth/Register'
// import Forgot from '../Auth/Forgot'
// import About from '../AboutPage/About';
// import Service from '../Services/Service';
// import { useAuthContext } from 'Pages/Context/Auth';
// // import Myindex from '../Todos/Myindex';
// // import MyTodos from '../Todos/MyTodos';
// // import MyDashBoard from 'Pages/Dashboard/MyDashBoard';

// // ...rest of the code


// const Index = () => {

//   const {isAuth} = useAuthContext()
//   return (
//     <>
//       <Routes>
//         <Route path='/*' element={<FrontEndIndex />} />
//         <Route path='/about' element={<About/>}/>
//         <Route path='/service' element={<Service/>}/>
//         {/* <Route path='/todos/*' element={<Myindex/>}/> */}
//         {/* <Route  path='/mytodos'  element={<MyTodos />} /> */}
//         {/* <Route path='/mydashboard' element={<MyDashBoard/>}/> */}
//         {/* <Route path='/private' element={<PrivateRoutes />}>
//         </Route> */}
//         <Route path='/auth/*' element={!isAuth ? <Auth /> : <Navigate to="/"/>}>
//           <Route path='login' element={<Login />} />
//           <Route path='register' element={<Register />} />
//           <Route path='forgot' element={<Forgot />} />
//         </Route>
//       </Routes>
//     </>
//   )
// }

// export default Index


import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import FrontEndIndex from '../FrontEnd/Home';
import Auth from '../Auth';
import Login from '../Auth/login';
import Register from '../Auth/Register';
import Forgot from '../Auth/Forgot';
import About from '../AboutPage/About';
import Service from '../Services/Service';
import { useAuthContext } from '../Context/Auth';
// import Myindex from '../Todos/Myindex';
// import MyTodos from '../Todos/MyTodos';
// import MyDashBoard from '../Dashboard/MyDashBoard';

const Index = () => {
  const { isAuth } = useAuthContext();
  return (
    <>
      <Routes>
        <Route path='/*' element={<FrontEndIndex />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        {/* <Route path='/todos/*' element={<Myindex/>}/> */}
        {/* <Route  path='/mytodos'  element={<MyTodos />} /> */}
        {/* <Route path='/mydashboard' element={<MyDashBoard/>}/> */}
        {/* <Route path='/private' element={<PrivateRoutes />} /> */}
        <Route path='/auth/*' element={!isAuth ? <Auth /> : <Navigate to="/" />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='forgot' element={<Forgot />} />
        </Route>
      </Routes>
    </>
  );
};

export default Index;