import React from 'react'
import logo from '../Pictures/tc_logo.jpg'

const Header = () => {
  return (
    <div>
      <div className='tagline flex tracking-[-1px] md:tracking-[10px] mx-[5px] md:mx-[330px] gap-[120px] whitespace-nowrap'>
        <h1 className='my-[30px] hidden md:block animate-fadeIn'>BRING YOUR CREATIVITY</h1>
        <h1 className='my-[30px] mx-1 block md:hidden tracking-wider animate-fadeIn'>BRING YOUR</h1>
        <h1 className='my-[30px] hidden md:block tracking-[40px] animate-fadeIn'>TO LIFE</h1>
        <h1 className='my-[30px] tracking-normal block md:hidden animate-fadeIn'>CREATIVITY TO LIFE</h1>
      </div>
      <div>
        <img alt='logo' className='w-[70px] h-[70px] animate-fadeIn rounded-lg mx-auto my-[-56px] border border-b-[3px] border-black' src={logo}></img>
        <h1 className='solid my-[23px]'></h1>
      </div>
      <div className='fontstyle text-center my-16'>
        <h1 className='text-[35px] animate-fadeIn'>Tanoli</h1>
        <h1 className='animate-fadeIn'>Clicks</h1>
      </div>
    </div>
  )
}

export default Header
