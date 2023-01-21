import { Button, Input, OutlinedInput } from '@mui/material'
import React, { useState } from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {isAuth,setIsAuth}=useContext(AuthContext)
    const admins=['bhavik@apnamall.com','aniket@apnamall.com','harshal@apnamall.com','vinay@apnamall.com','vicky@apnamall.com']

    const login=()=>{
        if(admins.includes(email) && password=='apnamall'){
            setIsAuth(true)
        }else{
            alert('Please enter correct admin credentials')
        }
    }

    if(isAuth){
        return <Navigate to='/'/>
    }

  return (
    <div
      style={{ textAlign: "center", alignItems: "center", marginTop: "150px" }}
    >
      <h1>Login</h1>
      <input
        style={{ padding: "10px", borderRadius: "7px", border: "none" }}
        type="email"
        placeholder="Admin Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <br />
      <br />
      <input
        style={{ padding: "10px", borderRadius: "7px", border: "none" }}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <Button onClick={login} variant="contained">
        Login
      </Button>
    </div>
  );
}

export default Login