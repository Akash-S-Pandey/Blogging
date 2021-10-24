import React from 'react'
import './sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg" src="https://source.unsplash.com/1600x900/?Nature,mountains,Assam,nepal" alt=""  />
                <p>The health benefits of mindfulness practice and time spent connecting with nature are now scientifically well established. They are complimentary and are the foundation for my own personal health and well-being. I am passionate about sharing this message with others and helping them to experience the peace and beauty that is always waiting for us outside in the natural world</p>

            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
               <ul className="sidebarList">
                   <li className="sidebarListitem">Life</li>
                   <li className="sidebarListitem">Music</li>
                   <li className="sidebarListitem">Style</li>
                   <li className="sidebarListitem">Sports</li>
                   <li className="sidebarListitem">Education</li>
                   <li className="sidebarListitem">Tech</li>
                   <li className="sidebarListitem">Cinema</li>
               </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW & CONNECT WITH US</span>
                <div className="sidebarSocial">
                <i className="sidebaricon fab fa-facebook-square "></i>
                <i className="sidebaricon fab fa-twitter-square "></i>
                <i className="sidebaricon  fab fa-pinterest-p  "></i>
                <i className="sidebaricon  fab fa-instagram-square "></i>

                </div>
            </div>

        </div>
    )
}
