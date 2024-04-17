import React from 'react'
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import '../index.css';
export default function Sidebar() {
  return (
<>
<div className='instagrammenu'>
              <p><Image src="./images/instagram_logo.png" className='mainlogo' /></p>
              <p className='menufont'><i class="fa-solid fa-house"></i>&nbsp;
              <Link to = "../home">Home</Link></p>
              <p className='menufont'><i class="fa-solid fa-magnifying-glass"></i>&nbsp;Search</p>
              <p className='menufont'><i class="fa-regular fa-compass"></i>&nbsp;
              <Link to = "../explore">Explore</Link></p>
              <p className='menufont'><i class="fa-solid fa-clapperboard"></i>&nbsp;Reels</p>
              <p className='menufont'><i class="fa-brands fa-facebook-messenger"></i>&nbsp;Messages</p>
              <p className='menufont'><i class="fa-regular fa-heart"></i>&nbsp;Notification</p>
              <p className='menufont'><i class="fa-solid fa-square-plus"></i>&nbsp;Create</p>
              <p className='menufont'><Image src='./images/woman.jpg' roundedCircle className='profilelogo'/>&nbsp;Profile</p>
              <div className='nextpart'>          
                <p className='menufont1'><i class="fa-brands fa-threads"></i>&nbsp;Threads</p>
                <p className='menufont1'><i class="fa-solid fa-bars"></i>&nbsp;More</p>
              </div>
          </div>  
          </>
  )
}
