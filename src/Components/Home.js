import React, { useEffect, useState } from 'react'
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
import insta from "../Pictures/Instagram_icon.png.webp"

const Home = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollDirection = currentScrollTop > lastScrollTop ? 'down' : 'up'
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop)

      const elements = document.querySelectorAll('.slide-in')
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0 && !el.classList.contains('animated')) {
          el.classList.add('animated')
          el.classList.add(scrollDirection === 'down' ? 'animate-slideInLeft' : 'animate-slideInRight')
        }
      })
    }

    // Initial animation for images on page load
    const initialElements = document.querySelectorAll('.slide-in')
    initialElements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('animated', 'animate-slideInLeft')
      }
    })

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollTop])

  return (
    <div>
      <div className='tagline flex tracking-[-1px] md:tracking[10px] mx-[5px] md:mx-[330px] gap-[120px] whitespace-nowrap'>
        <h1 className='my-[30px] hidden md:block animate-fadeIn'>BRING YOUR CREATIVITY</h1>
        <h1 className='my-[30px] mx-1 block md:hidden tracking-wider animate-fadeIn'>BRING YOUR</h1>
        <h1 className='my-[30px] hidden md:block tracking-[40px] animate-fadeIn'>TO LIFE</h1>
        <h1 className='my-[30px] tracking-normal block md:hidden animate-fadeIn'>CREATIVITY TO LIFE</h1>
      </div>
      <div>
        <img alt='logo' className='w-[70px] h-[70px] rounded-lg mx-auto my-[-56px] border border-b-[3px] border-black' src={logo}></img>
        <h1 className='solid my-[23px]'></h1>
      </div>
      <div className='fontstyle text-center my-16'>
        <h1 className='text-[35px] animate-fadeIn'>Tanoli</h1>
        <h1 className='animate-fadeIn'>Clicks</h1>
      </div>

      <div className='flex flex-wrap'>
        <div className='flex flex-wrap gap-10 mx-10 md:mx-44'>
          {
            images.map((img, index) => {
              return <img className='md:h-[350px] md:w-[350px] w-[300px] h-[300px] rounded-lg slide-in' alt='pic' key={index} src={img}></img>
            })
          }
        </div>
      </div>
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

export default Home
