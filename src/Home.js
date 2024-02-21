import React from 'react';
import './home.css';
import { BrowserRouter, Route,Routes,Link} from "react-router-dom";
import back from './images/back.jpg';
import Calender from './calender';

const Login = () => {
    return (
        <>
          <div>

<div>
  <nav class="navbar">
  <div class="navbar-container container">
     <input type="checkbox" name="" id=""/>
   <div class="hamburger-lines">
       <span class="line line1"></span>
      <span class="line line2"></span>
     <span class="line line3"></span>

</div>
<ul class="menu-items">
    <li><a href="/">Home</a></li>
    <li><a>About</a></li>
    <li><a href="/">Calender</a></li>
    <li><a href="/">Menu</a></li>
    <li><a href="/">Rating</a></li>
    <li><a href="/">Contact</a></li>
</ul>
<h1 class="logo"></h1>
</div>  
</nav>
<div id="wrapper">


<div id="sidebar-wrapper">
<ul class="sidebar-nav">
    <li class="sidebar-brand">
        <a href="/">
            
        </a>
    </li>
    <li>
        <a href="/">Dashboard</a>
    </li>
    <li>
        <a href="/">Booking</a>
    </li>
    <li>
        <a href="/">Calender</a>
    </li>
    <li>
        <a href="/">Token</a>
    </li>
    <li>
        <a href="/">Cancel</a>
    </li>
    <li>
        <a href="/">Reschedule</a>
    </li>
    <li>
        <a href="/">Payment</a>
    </li>
</ul>
</div>



<div id="page-content-wrapper">
<div class="container-fluid">
    <div class="row">
        <div class="col-lg-12">
            
            
           
        </div>
    </div>
</div>
</div>
</div>

</div>


</div>

<div className='mid-co'>

</div>

</>
        
    );
} 

export default Login;