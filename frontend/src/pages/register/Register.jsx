import React from 'react'
import { Link }  from 'react-router-dom';
import './register.css'

export default function Register() {
    return (
        <div className='register'>
            <span className="registerTitle" >register & Login to iCoder</span>
            <form className="registerForm">

                <label >Username</label>
                <input type="text" className="registerInput" placeholder="username" autoFocus={true} />

                <label >Email</label>
                <input type="text"  className="registerInput" placeholder="Enter your email...."  />

                <label >Password</label>
                <input type="password" className="registerInput" placeholder="******" />

                <label>Phone</label>
                <input type="phone" className="registerInput" placeholder="+91." />

                <button className="registerButton btn btn-sm btn-info">
                <Link to="/login" className="link">Register</Link></button>
            </form>
            <button className="registerLoginButton btn  btn-primary">
            <Link to="/login" className="link">Login</Link>
            </button>
            
        </div>
    ) 
}
