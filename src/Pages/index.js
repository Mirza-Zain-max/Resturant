// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Home from 'Pages/FrontEnd/Home'
// import MyTodos from 'Pages/Todos/MyTodos'
// import NavHeader from '../Components/navHeader/navHeader'


// const FrontEndIndex = () => {
//   return (
//     <>
//     <NavHeader/>
//       <main>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/mytodos' element={<MyTodos />} />
//           {/* <Route path='/mydashboard' element={<MyDashBoard/>}/> */}
//         </Routes>
//       </main>
//     </>
//   )
// }

// export default FrontEndIndex

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './FrontEnd/Home';
import MyTodos from './Todos/MyTodos';
import NavHeader from 'Components/NavHeader/NavHeader';

const FrontEndIndex = () => {
  return (
    <>
      <main>
        <NavHeader/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mytodos' element={<MyTodos />} />
          {/* <Route path='/mydashboard' element={<MyDashBoard/>}/> */}
        </Routes>
      </main>
    </>
  );
};

export default FrontEndIndex;