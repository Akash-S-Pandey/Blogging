import React from 'react'
import './post.css'

export default function Post() {
    return (
        <div className='post'>
            <img src="https://source.unsplash.com/1600x900/?nature," alt="" className="postImg" />
          <div className="postInfo">
              <div className="postCats">
                  <span className="postCat">Music</span>
                  <span className="postCat">Life</span>
              </div>
              <span className="postTitle">“Nature is not a place to visit. It is home.”</span>
              <hr/>
              <span className="postDate">1 hour ago</span>
          </div>
          <div className="postDesc">In a very real sense, mountains and valleys, the seas and the skies, 
          the sun and the earth, the trees and the flowers constitute our home, our natural habitat.

Growing up in the modern developed world we can easily come to believe that towns and cities – 
the urban and artificial environment – is where we naturally belong. But our brains and bodies,
 which evolved over thousands of years, were designed by and designed for an environment very different to the one we live in now.

Throughout our evolutionary history we lived in very close connection to the land, with a very close kinship
 with other creatures. Our physiological system evolved to survive in wild, natural environments and developed a love and kinship for these places that lives on in our DNA.

This connection with the land combined with the kinship we would have felt with other living things that shared
 the land as their home has hardwired in us a strong sense of the natural world as ‘home’, and the importance of connection with all of life as being essential to our well-being.

This ‘love for life’ or biophilia, is a basic need in human beings. But unfortunately, because of the increasingly
rbanised nature of the modern world, many of us have become disconnected from nature and suffer from what Richard Louv calls ‘Nature-deficit disorder’. We have been left deprived
 of something that was a source of so much spiritual sustenance and nourishment since we first walked the earth, a loss which has undoubtedly effected our collective health and well-being</div>
        </div>
    )
}
