import React from 'react'
import { Link }  from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

export default function Setting() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form  className="settingsForm ">
                    <label className="pp my-4">Profile Picture</label>
                    <div className="settingsPP ">
                        <img src="https://source.unsplash.com/1600x900/?albert,jonysins,meakhalifa,sunnyleone
                                      " alt="" />
                                     
                    </div>
                                      <label htmlFor="fileinput ">
                                      <i className="settingsPPIcon far fa-user-circle"></i>
                                      </label>
                                      <input type="file" id="fileinput" style={{display:'none'}}/>
                                      <br />
                                      

                                      <label className="usr ">Username</label>
                                      <input type="text"placeholder="Josep" />

                                    

                                      <label className="em " >Email</label>
                                      <input type="email"placeholder="Josep@gmail.com"  />

                            
                                      <label className="pas " > Education</label>
                                      <input type="text"placeholder="College\University"  />

                                      <label className="pas " >Interests</label>
                                      <input type="text"placeholder="Hobbies"  />

                                      <label className="pas " >Address</label>
                                      <input type="text"placeholder="Enter Address"/>

                                      <label className="pas " >About</label>
                                      <input type="text"placeholder="Max 120 words"/>


                                      <label className="pas " >Contact</label>
                                      <input type="text"placeholder="+91"  />





                                      <button className="settingsSubmit btn btn-sm btn-info " >
                                      <Link to ='/' className="link">Update</Link> </button>
                    
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
