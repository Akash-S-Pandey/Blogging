/* eslint-disable react/jsx-no-undef */
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Link }  from 'react-router-dom';
import './login.css'

export default function Login() {
    return (
        <div className='login'>
            <span className="loginTitle" >Login to iCoder</span>
            <form className="loginForm">
                <label >Email</label>
                <input type="text"  className="loginInput" placeholder="Enter your email...." autoFocus={true} />

                <label >Password</label>
                <input type="password" className="loginInput" placeholder="******" />

                

                <Link to='/password' className='link Password '> forgot Password ?</Link>

                <button className="loginButton btn btn-sm btn-info">
                <Link to ='/' className="link"> Login</Link>
                   
                </button>
            </form>
            <button className="loginRegisterButton btn btn-sm btn-primary">

               <Link to ='/register' className="link">register</Link> 
           
            </button>
            
        </div>
    ) 
}
