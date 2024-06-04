/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import logo from '../Pictures/tc_logo.jpg'
import '../App.css'
import pic1 from "../Pictures/pic1.jpg"
import pic2 from "../Pictures/pic2.jpg"
import pic3 from "../Pictures/pic3.jpg"
import pic4 from "../Pictures/pic4.webp"
import pic5 from "../Pictures/pic5.webp"
import pic6 from "../Pictures/pic6.webp"
import pic7 from "../Pictures/pic7.jpg"
import pic8 from "../Pictures/pic8.jpg"
import pic9 from "../Pictures/pic9.jpg"
import pic10 from "../Pictures/pic10.jpg"
import pic11 from "../Pictures/pic11.jpg"
import pic12 from "../Pictures/pic12.jpg"
import pic13 from "../Pictures/pic13.webp"
import pic14 from "../Pictures/pic14.webp"
import pic15 from "../Pictures/pic15.webp"
const Home = () => {
  let images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15]
  return (
    <div>  
      <div className='tagline flex mx-[330px] gap-[120px] whitespace-nowrap'>
      <h1 className='my-[30px]'>BRING YOUR CREATIVITY</h1>
      <h1 className='my-[30px] tagline2'>TO LIFE</h1>
      </div>
      <div>
        
        <img alt='logo' className='w-[70px] h-[70px] rounded-lg mx-auto my-[-56px] border border-b-[3px] border-black' src={logo}></img>
        <h1 className='solid my-[23px]'></h1>
      </div>
      <div className='fontstyle text-center my-16'>
        <h1 className='text-[35px]'>Tanoli</h1>
        <h1>Clicks</h1>
      </div>

    <div className='flex flex-wrap'>
      <div className='flex flex-wrap gap-10 mx-44'>
        {
          images.map((img, index)=>{
            return <img className='h-[350px] w-[350px] rounded-lg' alt='pic' key={index} src={img}></img>
          })
          
        }
      </div>
    </div>
    <div class="footer mt-24">
      <div class="row">
        <a href="#"><i class="facebook"></i></a>
        <a href="#"><i class="instagram"></i></a>
        <a href="#"><i class="youtube"></i></a>
        <a href="#"><i class="twitter"></i></a>
      </div>
      <div class="row">
        <ul>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Our Services</a></li>
          <li><a href="#">My Projects</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>         
        </ul>
      </div>
      <div class="row">
        TanoliClicks Copyright @ 2023 TanoliClicks - All rights reserved | Designed by Saad
      </div> 
    </div>
    </div>
  )
}

export default Home
