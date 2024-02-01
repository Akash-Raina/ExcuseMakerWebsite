import React from 'react'

function Hero() {
  return (
    <div className=' flex justify-center items-center m-15  sm:m-10 sm:flex sm:justify-center sm:items-center'>

        <h2 className=' text-[1.7em] sm:text-[2.46em] lg:text-[4rem] font-bold text-white border-b'>Need an excuse We got</h2>

        <span className='text-[2rem]  pl-1 font-bold  sm:text-[2.46rem] lg:text-[4rem] sm:pl-2 lg::font-bold lg:text-red-400 hover:text-red-700 hover:scale-105 hover:translate-x-5 ease-in-out duration-300 cursor-pointer sm:border-b sm:hover:border-red-700'> YOU.</span>
    </div>
  )
}

export default Hero