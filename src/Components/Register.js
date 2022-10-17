import React from 'react'
import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { registerRequest } from '../features/RegisterSlice';
import { Link } from "react-router-dom";
const Register = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const data= useSelector(state=>state.register);
    useEffect(() => {
          if(data.error!=null){
              setError("Email or Username are already taken");
              
          }else{
              setError("");
              
          }
        }, [data]);
      
    
     
    function register(e){
      e.preventDefault();
      let user={username: username,email: email, password: password};
      dispatch(registerRequest(user));
      setUsername("");
      setEmail("");
      setPassword("");
      
      
    }
    return (
      <div className='login-page'>
        <div className='login-container'>
        <div className='login-logo'>
          <h2>Apple <span>Cart</span> </h2>
        </div>
        <div className="login-head">
          <h2>Register</h2>
          <p>Please Register to Get Magic Delivery to Your Door Step</p>
        </div>
        <div className="login-form">
          <form onSubmit={register}>
          <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" aria-describedby="emailHelp" value={username} placeholder="Enter Username" onChange={($event)=>{setUsername($event.target.value)}} />
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email address</label>
              <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" value={email} placeholder="Enter email" onChange={($event)=>{setEmail($event.target.value)}} />
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input type="password" className="form-control" id="Password" placeholder="Password" value={password} onChange={($event)=>{setPassword($event.target.value)}} />
              <small id="emailHelp" className="form-text  text-danger">{error}</small>
            </div>
              <button className='btn btn-block btn-primary login-btn' >Register</button>
              <p>Already have an account? <a className='link' href="/register">Login</a></p>
          </form>
          </div>
      </div>
      </div>
    )
}

export default Register