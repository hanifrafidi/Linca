import React, { useState, createContext } from 'react';
import { useNavigate } from "react-router-dom"

export const UserContext = createContext({
    user : {
        userData : '',
        accessToken: '',
    },    
    login : () => {},
    logout : () => {},
})

const UserProvider = (props) => {
    const [user, setUser] = useState({
        userData : localStorage.getItem("user") != null ? JSON.parse(localStorage.getItem("user")) : '',
        accessToken : localStorage.getItem("token") != null ? localStorage.getItem("token") : ''
        // userData : '',
        // accessToken : ''
    })    
    const navigate = useNavigate()

    const login = response => {loginUser(user,response,setUser,navigate)}
    const logout = () => {logoutUser(user,setUser,navigate)}

    return(
        <UserContext.Provider 
        value={{
            user,
            login,
            logout
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

const loginUser = (user,response,setUser,navigate) => {        
    
    if(response.error != null){
        console.log(user)
        return console.log('error : ', response)
    }else{
        console.log(response)
        localStorage.setItem("token", response.accessToken)
        localStorage.setItem("user", JSON.stringify(response.profileObj))
        setUser( {
                ...user,
                userData : JSON.parse(localStorage.getItem("user")),
                accessToken : localStorage.getItem("token")            
        })    
        return navigate("/", {replace: true})    
    }
}

const logoutUser = (user,setUser,navigate) => {    
    localStorage.clear();
    setUser(  {
        ...user,
        userData : '',
        accessToken : ''
    })

    return navigate('/', {replace : true})
}

export default UserProvider;
