import React from 'react'
import './post.css'

export default function Post() {
    return (
        <div className='post'>
            <img src="https://source.unsplash.com/1600x900/?Hackathon,programing" alt="" className="postImg" />
          <div className="postInfo">
              <div className="postCats">
                  <span className="postCat">Music</span>
                  <span className="postCat">Life</span>
              </div>
              <span className="postTitle">PreparationTech At 2021 CogX Festival
June 15, 2021</span>
              <hr/>
              <span className="postDate">1 hour ago</span>
          </div>
          <div className="postDesc">Information Technology is the current big thing and businesses are embracing it on a vast scale. People from all walks of life are intrigued by the way IT is progressing at an overwhelming rate and transforming the digital world. If you are someone who is keen to learn about the newest technologies, digital industry, and the web in general, then keep reading. Here, we have rounded up fifteen best information technology blogs, which bring to you the latest in the field from across the world.
Mashable — mashable.com
One of the most influential blogs on technology that we have today, Mashable provides information about all thing tech, digital culture, and entertainment.
TechCrunch — techcrunch.com
TechCrunch provides interesting technology news and a reservoir of information on startups and Internet companies. The blog also gives reviews on new Internet products.
The Next Web — thenextweb.com
Get tech news, learn about technology trends, and explore the world of gadgets with detailed, genuine reviews from the experts. Do all this and much more by following TNW.</div>
        </div>
    )
}
