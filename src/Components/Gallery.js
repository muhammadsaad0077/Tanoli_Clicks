import React from 'react'
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

const Gallery = () => {
    const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15]
  return (
    <div>
        <div className='flex flex-wrap gap-10 mx-10 md:mx-44'>
          {
            images.map((img, index) => {
              return <img className='md:h-[350px] md:w-[350px] w-[300px] h-[300px] rounded-lg slide-in' alt='pic' key={index} src={img}></img>
            })
          }
        </div>
      
    </div>
  )
}

export default Gallery
