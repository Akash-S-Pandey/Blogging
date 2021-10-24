import React from 'react'
import './sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg" src="https://source.unsplash.com/1600x900/?laptop,billgates" alt=""  />
                <p></p>Information Technology is the current big thing and businesses are embracing it on a vast scale. People from all walks of life are intrigued by the way IT is progressing at an overwhelming rate and transforming the digital world. If you are someone who is keen to learn about the newest technologies, digital industry, and the web in general, then keep reading. Here, we have rounded up fifteen best information technology blogs, which bring to you the latest in the field from across the world.
Mashable — mashable.com
One of the most influential blogs on technology that we have orm
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
