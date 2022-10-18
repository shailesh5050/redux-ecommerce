import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Auth = ({Component}) => {
    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    },[])
  return (
    <div>
        <Component/>
    </div>
  )
}

export default Auth