import React, { useState } from 'react'
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

import './index.css';
import Sidebar from '../Components/Sidebar';


export default function Index() {
  const [stories, setservices] = useState([
    {"image": "./images/cat.jpg","profilename":"ayush__"},{ "image": "./images/flower.jpg","profilename":"unknown_"},{"image": "./images/forest.jpg","profilename":"kajal_15"},{"image": "./images/concept.jpg","profilename":"_stranger_"},{"image": "./images/leaf.jpg","profilename":"modi_22"},{"image": "./images/photography.jpg","profilename":"_varun__"},{"image": "./images/lamp.jpg","profilename":"_viratk_18"},{"image": "./images/elephant.jpg","profilename":"__ruhi_5"},{"image": "./images/hands.jpg","profilename":"sona_li_1"}
  ])
  const [posts, setpost] = useState([

  {"postname":"naturephotography_77","time":"2d", "postimage": "./images/seashells.jpg","dp":"./images/profile.jpg","likedby":"236 likes","likeprofile":"./images/leaves.jpg"},{"postname":"virat_kohlifanpage__","time":"10h","postimage": "./images/kohli.jpg","dp":"./images/cricket.jpg","likedby":"800 likes","likeprofile":"./images/architecture.jpg"}

])
  return (
    <>
      
        

{/* feed part */}
<div className='fullcontainer'>
<Sidebar/>
<div className='feedbase'>
        <div className='feed d-flex justify-content-around' >
        {stories.map((item)=>(
        <Figure>          
          <Figure.Image src={item.image} className='profileimg' />
        <Figure.Caption className='profiletext'>{item.profilename}</Figure.Caption>

        </Figure>
        ))}
        </div>  

        {posts.map((item1)=>(
        <div className='feedpost'>
        
          <div className='profilename'>
                <Image variant="top" className='postimg' src={item1.dp}/>
                <p className='postname'>{item1.postname}</p>
                <p className='time'>{item1.time}</p>
                <p className='postsetting'><i class="fa-solid fa-ellipsis"></i></p>
          </div>
         
           <Card className='postcontent'>
            <Card.Body>
            <Card.Img src={item1.postimage}></Card.Img>
            </Card.Body>
          </Card>

        <div className='iconsection'>
          <p className='likeicon'><i class="fa-regular fa-heart"></i></p>
          <p className='commenticon'><i class="fa-regular fa-comment"></i></p>
          <p className='shareicon'><i class="fa-regular fa-paper-plane"></i></p>
          <p className='saveicon'><i class="fa-regular fa-bookmark"></i></p>       
        </div>
            <div className='likecomment'>
            <Image src={item1.likeprofile} className='likeprofile'/>
            <p className='likedby'>{item1.likedby}</p> 
            </div>
           
        </div>
 ))}
       
</div>
        

{/* suggestion part */}

        <div className='suggestion'>
        
        </div>
  
    </div>

    
    </>
  )
}
