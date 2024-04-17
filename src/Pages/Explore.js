import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Image from 'react-bootstrap/Image'

import './Explore.css';
export default function Explore() {
    const [explore, setexplore] = useState([{"image1":"./images/makeup.jpg","image2":"./images/shubman.jpg","image3":"./images/photography.jpg","image4":"./images/cat.jpg","image5":"./images/concept.jpg","image6":"./images/elephant.jpg","image7":"./images/flower.jpg","image8":"./images/hands.jpg","image9":"./images/leaf.jpg","image10":"./images/lost-places.jpg","image11":"./images/road.jpg","image12":"./images/infant.jpg","image13":"./images/andman.jpg","image14":"./images/lamp.jpg","image15":"./images/map.jpg","image16":"./images/piano.jpg","image17":"./images/post.png","image18":"./images/profile.jpg","image19":"./images/kedarnath.jpg","image20":"./images/new-zealand.jpg","image21":"./images/temple.jpg","image22":"./images/wedding.jpg","image23":"./images/cricket_india.jpg","image24":"./images/peacock-feather.jpg","image25":"./images/bangles.jpg","image26":"./images/shivling.jpg","image27":"./images/software.jpg","image28":"./images/photography.jpg","image29":"./images/leaves.jpg","image30":"./images/showpiece.jpg","image":"./images/pasta.jpg"}])
  return (
    <>
    <div className='fullcontainer'>
        <Sidebar/>
        {explore.map((item)=>(
        <div className='partcontainer'>
            <div className='explorepart'>
           
                <Image src={item.image1} className='imgdiv'/>
                <Image src={item.image2} className='imgdiv'/>
                <Image src={item.image3} className='imgdiv'/>
                <Image src={item.image4} className='imgdiv'/>
                <Image src={item.image5} className='imgdiv'/>
                <Image src={item.image6} className='imgdiv'/>
                <Image src={item.image7} className='imgdiv'/>
                <Image src={item.image8} className='imgdiv'/>
                <Image src={item.image9} className='imgdiv'/>
                <Image src={item.image10} className='imgdiv'/>
            </div>
            <div className='explorepart'>
                <Image src={item.image11} className='imgdiv'/>
                <Image src={item.image12} className='imgdiv'/>
                <Image src={item.image13} className='imgdiv'/>
                <Image src={item.image14} className='imgdiv'/>
                <Image src={item.image15} className='imgdiv'/>
                <Image src={item.image16} className='imgdiv'/>
                <Image src={item.image17} className='imgdiv'/>
                <Image src={item.image18} className='imgdiv'/>
                <Image src={item.image19} className='imgdiv'/>
                <Image src={item.image20} className='imgdiv'/>
            </div>
            <div className='explorepart'>
                <Image src={item.image21} className='imgdiv'/>
                <Image src={item.image22} className='imgdiv'/>
                <Image src={item.image23} className='imgdiv'/>
                <Image src={item.image24} className='imgdiv'/>
                <Image src={item.image25} className='imgdiv'/>
                <Image src={item.image26} className='imgdiv'/>
                <Image src={item.image27} className='imgdiv'/>
                <Image src={item.image28} className='imgdiv'/>
                <Image src={item.image29} className='imgdiv'/>
                <Image src={item.image30} className='imgdiv'/>
            </div>
        </div>
          ))}
    </div>
      
    </>
  )
}
