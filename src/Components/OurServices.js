import React from 'react'
import pic1 from "../Pictures/pic1.jpg"
import pic2 from "../Pictures/pic2.jpg"
import pic3 from "../Pictures/pic3.jpg"
import pic4 from "../Pictures/pic4.webp"
import pic5 from "../Pictures/pic5.webp"
import pic6 from "../Pictures/pic6.webp"

const OurServices = () => {
    const images = [pic1, pic2, pic3, pic4, pic5, pic6];
    const details = ["We are a team of professionals photographers and will rise your event to next level. Our Photographers are well-skilled and trained", "We are a team of professionals photographers and will rise your event to next level. Our Photographers are well-skilled and trained", "We are a team of professionals photographers and will rise your event to next level. Our Photographers are well-skilled and trained", "We are a team of professionals photographers and will rise your event to next level. Our Photographers are well-skilled and trained", "We are a team of professionals photographers and will rise your event to next level. Our Photographers are well-skilled and trained", "We are a team of professionals photographers and will rise your event to next level. Our Photographers are well-skilled and trained"]
  return (
    <div className='mt-40 ml-32'>
        <div>
            {
                images.map((img, index)=>{
                  return (  <div className='mt-32' key={index}>
                        <img src={img} alt='services' className='md:h-[500px] md:w-[500px] w-[300px] h-[300px] rounded-lg'></img>
                    </div>    
                )})
            }
            <div className='relative bottom-[500vh] ml-[600px]'>
            {
                details.map((detail, index)=>{
                    return <p className='mt-52' key={index}>{detail}</p>
                })
            }
            </div>
        </div>
      
    </div>
  )
}

export default OurServices
