import React from 'react'
import Typed from "react-typed"

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH WEB DEVELOPMENT</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'> Grow with web</h1>
            <div className='flex justify-center items-center'>
                
                <p className='md:text-4xl sm:text-3xl text-2xl font-bold'>Attractive,Responsive Designs for</p>
                <Typed 
                className="md:text-4xl sm:text-3xl text-2xl font-bold md:pl-4 pl-2" 
                strings={["clients","WebLovers"]} typeSpeed={120} backSpeed={140} loop />
            </div>
            
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Keep hustling and build projects for success</p>
            <button className='bg-[#00df9a] rounded-md w-[200px] font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero