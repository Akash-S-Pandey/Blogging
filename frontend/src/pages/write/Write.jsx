import React from 'react'
import { Link } from 'react-router-dom'
import './write.css'

export default function Write() {
    return (
        <div className="write">
            <img src="https://source.unsplash.com/1600x900/?caifornia,nature,beach" alt="loading" className="writeImg"/>
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput"><i className=" writeIcon fas fa-plus"></i></label>
                    <input type="file" id="fileInput" style={{display:'none'}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Write Your Story....,. " type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit btn btn-sm btn-primary ">
                    <Link to="/" className="link">Publish</Link>
                </button>
            </form>
        </div>
    )
}
