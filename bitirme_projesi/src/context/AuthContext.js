import React, {useContext, createContext, useState, useEffect} from "react";


const AuthContext = createContext()
const useAuth = () => useContext(AuthContext)

const AuthContextProvider = ({children}) => {

    const[isLogin, setIsLogin]=useState((sessionStorage.getItem('isLogin') && sessionStorage.getItem('isLogin')==='true') ? true : false)
    const[userData, setUserData]=useState({
        'id':sessionStorage.getItem('id') ? sessionStorage.getItem('id') : undefined,
        'username':sessionStorage.getItem('username') ? sessionStorage.getItem('username') : undefined,
        'email':sessionStorage.getItem('email') ? sessionStorage.getItem('email') : undefined,
        'password':sessionStorage.getItem('password') ? sessionStorage.getItem('password') : undefined,
        'user_type':sessionStorage.getItem('user_type') ? sessionStorage.getItem('user_type') : undefined,
        'user_avatar':sessionStorage.getItem('user_avatar') ? sessionStorage.getItem('user_avatar') : undefined,
    })

    const authItems = {isLogin, setIsLogin, userData, setUserData}

    useEffect(()=>{
        if (isLogin) {
            sessionStorage.setItem('id',userData.id)
            sessionStorage.setItem('username',userData.username)
            sessionStorage.setItem('email',userData.email)
            sessionStorage.setItem('password',userData.password)
            sessionStorage.setItem('user_type',userData.user_type)
            sessionStorage.setItem('user_avatar',userData.user_avatar)
        }
    },[isLogin,userData])
    
    return(
        <AuthContext.Provider value={authItems}>
            {children}
        </AuthContext.Provider>
    )
}
export{
    AuthContextProvider,
    useAuth,
}