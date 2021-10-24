import React from 'react'
import { Link }  from 'react-router-dom';
import './password.css'


export default function Password() {
    return (
        <div className='login'>
            <span className="loginTitle" >Change Password</span>
            <form className="loginForm">      
            <label className="password" >Current password</label>
                <input type="text"  className="loginInput" placeholder="Current password" autoFocus={true} />

                <label className="password" >New Password</label>
                <input type="password" className="loginInput" placeholder="******" />

                <label className="password" >Confirm Password</label>
                <input type="password" className="loginInput" placeholder="******" />

                
                <button className="loginButton btn btn-sm btn-info">
                <Link to ='/login' className="link">Submit</Link> 
                </button>
            </form>
            <button className="loginRegisterButton btn btn-sm btn-primary">

               <Link to ='/register' className="link">Register</Link> 
           
            </button>
            
        </div>

    )
}
