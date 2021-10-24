import React from 'react';
import './header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Welcome to iCoder</span>
                <span className='headerTitleLg'> iCoder's Blog</span>
            </div>
            <img className="headerImg"   src ="https://source.unsplash.com/1600x900/?Laptop,Code,Technology" alt="loading.."/>
        
        </div>
    )
}
