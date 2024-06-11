import React from 'react'

const BookNow = () => {
  return (
    <div className='m-10 mt-32 ml-40'>
        <div className='flex flex-col gap-10'>
            <input placeholder='Enter Your Name' className='p-3 w-1/2 border-gray-400 border rounded-lg'></input>
            <input placeholder='Your Event Location' className='p-3 w-1/2 border-gray-400 border rounded-lg'></input>
            <input placeholder='Event Type' className='p-3 w-1/2 border-gray-400 border rounded-lg'></input>
            <input placeholder='If Selected Other' className='p-3 w-1/2 border-gray-400 border rounded-lg'></input>
            <input placeholder='Your Phone Number' className='p-3  w-1/2 border-gray-400 border rounded-lg'></input>
            <input placeholder='Tell more about your event....' className='p-3 w-1/2 border-gray-400 border rounded-lg'></input>
            
        </div>
     <div className='mt-6'>
        <button className='bg-blue-500 text-white p-3 rounded-md hover:bg-blue-900' >Book Now</button>
     </div>
      
    </div>
  )
}

export default BookNow
// name, location, event, other, phone num, Description