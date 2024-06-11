import React from 'react'
import insta from "../Pictures/Instagram_icon.png.webp"
import '../App.css'

const Footer = () => {
  return (
    <div>
        <div className="footer mt-24">
        <div className='w-8 h-8 mx-auto'>
          <a className='w-4 h-4' href="https://instagram.com/tanoliclicks"><img src={insta} alt='logo'></img></a>
        </div>
        <div className="row">
          <ul>
            <li><a href="#">Book Now</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="row relative md:top-0 top-5">
          TanoliClicks Copyright @ 2023 TanoliClicks - All rights reserved | Developed by Saad
        </div>
      </div>
      
    </div>
  )
}

export default Footer
