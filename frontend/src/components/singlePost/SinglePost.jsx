import React from 'react';
import './singlePost.css';

export default function singlePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://source.unsplash.com/1600x900/?rasberrypi,Computer,Code,programing
                                      " alt="loading.." className="singlePostImg" />
             <h1 className="singlePostTitle">Making the Web safer and more secure for everyone WWW...
             <div className="singlePostEdit div">
                 <i className=" singlePostIcon far fa-edit"></i>
                 <i className= "singlePostIcon far fa-trash-alt"></i>
            </div>
             </h1>
             <div className="singlePostInfo">
                 <span className="singlePostAuthor">Author : <b> Gary Snyder</b></span>
                 <span className="singlePostAuthor">1 hour ago</span>

             </div>
             <p className="singlePostDesc">Today, across the world, communities, organizations, and individuals are celebrating Global Encryption Day. Organized by the Global Encryption Coalition (GEC), it’s a day to take stock of the crucial role that encryption plays in securing our communications on the Internet.

The Internet Society is a GEC Steering Committee member because access to encryption is a key tool for us to realize our mission of keeping the Internet a force for good. That’s why the Internet Society is also a proud financial sponsor of Internet Security Research Group (ISRG), which founded and operates Let’s Encrypt. Let’s Encrypt provides digital certificates to more than 260 million websites, making a more secure and privacy-respecting Web for users all over the world. In just five years, the percentage of Web pages loaded over HTTPS has risen from under 50% to more than 85% and climbing, principally because of the community that has coalesced around the importance of encryption everywhere. Encrypted Web traffic protects the confidentiality and integrity of information users share with, or learn from, websites. It makes us all safer online.

Let’s Encrypt is a great success story, and an outstanding example of how supporting public interest infrastructure, such as a certificate authority operated for the public’s benefit, helps ensure everyone has access to the benefits of encryption.

We depend on contributions from our community of users and supporters in order to provide our services. If your company or organization would like to sponsor Let’s Encrypt please email us at sponsor@letsencrypt.org. We ask that you make an individual contribution if it is within your means.</p>

            </div>
        </div>
    )
}
