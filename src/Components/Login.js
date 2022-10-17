import React from 'react'
import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { loginRequest } from '../features/LoginSlice';
import { Link } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const data= useSelector(state=>state.login);
  useEffect(() => {
        if(data.error=="Invalid Credentials"){
            setError(data.error);
        }else{
            setError("");
        }
      }, [data]);
    
  
   
  function login(e){
    e.preventDefault();
    let user={identifier: email, password: password};
    dispatch(loginRequest(user));
    setEmail("");
    setPassword("");
    
    
  }
  //dispatch(fetchPosts());
  // const posts = useSelector(state => state.posts.posts);
  // console.log(posts);
  // const data= useSelector(state=>state.auth,shallowEqual);
  // console.log(data);
  return (
    <div className='login-page'>
      <div className='login-container'>
      <div className='login-logo'>
        <h2>Apple <span>Cart</span> </h2>
      </div>
      <div className="login-head">
        <h2>Login</h2>
        <p>Please Login to Get Magic Delivery to Your Door Step</p>
      </div>
      <div className="login-form">
        <form onSubmit={login}>
          <div className="form-group">
            <label htmlFor="Email">Email address</label>
            <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" value={email} placeholder="Enter email" onChange={($event)=>{setEmail($event.target.value)}} />
            </div>
            <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input type="password" className="form-control" id="Password" placeholder="Password" value={password} onChange={($event)=>{setPassword($event.target.value)}} />
            <small id="emailHelp" className="form-text  text-danger">{error}</small>
            </div>
            <button className='btn btn-block btn-primary login-btn' >Login</button>
            <p>Don't have an account? <a className='link' href="/register">Register</a></p>
        </form>
        </div>
    </div>
    </div>
  )
}

export default Login
{/* <button onClick={login}>Login</button>
<button onClick={()=>{dispatch(logout())}}>Logout</button> */}