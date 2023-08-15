import React from 'react'
import pexelsmichelangelo from '../assets/pexelsmichelangelo.png'

const Hero = () => {
  return (
    <div>
        <div className='container mx-auto'>
            <div className='flex justify-center lg:justify-between items-center flex-col lg:flex-row space-y-[50px] lg:space-y-0'>
                <div className='flex-1 gap-[20px] space-y-[20px]'>
                <h1 className='text-white font-semibold text-5xl'>
                <span>Dive</span> Into The Depths
                Of <span>Virtual Reality  </span>
                </h1>
                <p className='w-[60%] text-[14px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit sit beatae laudantium sint nam nesciunt nostrum autem amet non perspiciatis! Esse iste unde alias doloremque iusto tempore. Quasi, doloremque velit!</p>
                <button className='btn'>BUILD YOUR WORLD</button>
                </div>
                <div className='flex-1'>
                    <img src={pexelsmichelangelo} alt="VR girl" className='max-w-full rounded hero-img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero