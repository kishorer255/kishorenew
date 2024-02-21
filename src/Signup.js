import {useState} from 'react';
import './signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faEnvelope , faLock} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Route,Routes,Link} from "react-router-dom";

// export function Check(){
//   let pass=document.querySelector(".password").value;
//   let email=document.querySelector(".email").value;
//   if(pass==null || email==null){
//   <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>

// }
// else{
//   <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}><Link to="/home">Login</Link></div>
// }
// }
const Signup=()=>{

  const[action,setAction]=useState("Sign up");
  
  return(
    <div className='log-bg'>
    <div className='log-container'>
      <div className='log-header'>
        <div className='log-text'>{action}</div>
        <div className='log-underline'></div>
      </div>
      <div className='log-inputs'>
        {action==='Login'?<div></div>:<div className='log-input'>
          <div className='log-img'>
          <FontAwesomeIcon icon={faUser} />
          </div>
          <input type='text' placeholder='Name'/>
        </div>}
        <div className='log-input'>
        <div className='log-img'>
          <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <input className="email" type='email' placeholder='Email ID'/>
        </div>
        <div className='log-input'>
        <div className='log-img'>
          <FontAwesomeIcon icon={faLock} />
          </div>
          <input className="password" type='password' placeholder='Password'/>
        </div>
      </div>
      {action==='Sign Up'?<div></div>:<div className='log-pass'>Forgot Password? <span>Click here </span></div>}
      <div className='submit-con'>
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
  <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}><Link to="/home">Login</Link></div>
  
      </div>
    </div>
    </div>
  )
}
export default Signup;