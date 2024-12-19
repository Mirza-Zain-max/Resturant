// import React, { createContext, useContext, useEffect, useState } from 'react'
// import { auth } from 'Components/Config/firebase'
// import { onAuthStateChanged, signOut } from 'firebase/auth'
// import { message } from 'antd'


// const AuthContext = createContext()
// const isLogin = localStorage.getItem('user-login')
// const initialState = { isAuth: isLogin || false, user: {} }
// const AuthProvider = ({ children }) => {
//     const [state, dispatch] = useState(initialState)
//     const [isAppLoading,setIsAppLoading] = useState(true)
//     useEffect(()=>{
//         onAuthStateChanged(auth, (user) => {
//            if (user) {
//             dispatch(s=>({...s , isAuth:true , user}))
//             // User is signed in, see docs for a list of available properties
//               // https://firebase.google.com/docs/reference/js/auth.user
//             //   const uid = user.uid;
//               // ...
//               console.log('user', user)
//             } else {
//               // User is signed out
//               // ...
//                 console.log('User is log out')
//             }
//            setTimeout(()=>{setIsAppLoading(false)},1000)
//           });
//     },[])

//     const handleLogout = () =>{
//       dispatch(initialState)  
//       signOut(auth)
//         .then(()=>{
//             message.success("Logout successfull")
//             localStorage.removeItem('user-login')
//             localStorage.removeItem('user-uid')
//         })
//         .catch(error =>{
//             message.error("Something went wrong while loging out the user")
//         })

//     }
//     return (
//         <AuthContext.Provider value={{ ...state,  isAppLoading, dispatch , handleLogout }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }
// export const useAuthContext = () => useContext(AuthContext)

// export default AuthProvider


import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from 'Components/Config/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { message } from 'antd';
import Screenloader from '../FrontEnd/Screenloader';

const AuthContext = createContext({
    isAuth: false,
    user: {},
    isAppLoading: true,
    dispatch: () => {},
    handleLogout: () => {},
});

const initialState = { isAuth: false, user: {} };

const AuthProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    const [isAppLoading, setIsAppLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setState({ isAuth: true, user });
                console.log('User logged in:', user);
            } else {
                setState({ isAuth: false, user: {} });
                console.log('User logged out');
            }
            setIsAppLoading(false);
        });
        return () => unsubscribe(); // Cleanup subscription
    }, []);

    const handleLogout = () => {
        setState({ isAuth: false, user: {} });
        signOut(auth)
            .then(() => {
                message.success('Logout successful');
                localStorage.removeItem('user-login');
                localStorage.removeItem('user-uid');
            })
            .catch(() => {
                message.error('Something went wrong while logging out');
            });
    };

    return (
        <AuthContext.Provider value={{ ...state, isAppLoading, dispatch: setState, handleLogout }}>
            {isAppLoading ? <Screenloader/> : children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
