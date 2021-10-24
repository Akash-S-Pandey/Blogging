import React from 'react';
import { Link }  from 'react-router-dom';
import './topbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TopBar() {                                
    const user =true;
    return (
        <div className="top ">
            <div className="topLeft">
                <i className="fab fa-facebook-square "></i>
                <i className="fab fa-twitter-square "></i>
                <i className="fab fa-pinterest-p  "></i>
                <i className="fab fa-instagram-square "></i>
            </div>
            <div className="topCentre">
                <ul className="topList">
                  
                 <div className=" topListItems "><li ><Link className='link' to='/'>HOME</Link></li></div>
                  <div className=" topListItems "> <li ><Link className='link' to='/post'>POST</Link></li></div>
                  <div className=" topListItems "> <li ><Link className='link' to='/Setting'>{user && 'PROFILE'}</Link></li></div>
                  <div className=" topListItems "> <li ><Link className='link' to='/write'>WRITE</Link></li></div>
                 <div className=" topListItems "> <li ><Link className='link' to='/'>{user && 'LOGOUT'}</Link></li></div>
            
                </ul>
            </div>
            <div className="topRight">
                
                {
                user ? ( 
                    
                        <img className="topImg"
                        
                        src="https://source.unsplash.com/1600x900/?man,boy"  alt='Loading..'>
                        
                        </img>
    
                    
                        
                        
                        
                        ):( 
                             <>
                             <ul className="topList">
                                 <li className="topListItems">
                                  <Link className='link' to='/login'>LOGIN</Link>
                                  
                                 </li>
                                 <li className="topListItems">
                                  
                                  <Link className='link' to='/register'>REGISTER</Link>
                                 </li>
                            </ul>
                            </>
                        )
                } 
                 <i className=" topSearchIcon fas fa-search">
                     
                 </i>
                
               
        
            
            </div>

        </div>
    )
}
