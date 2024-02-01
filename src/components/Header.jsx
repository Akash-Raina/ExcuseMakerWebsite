import React from 'react';
import Logo from './assests/logo.png'

const  Header = () =>{
  return (
    <div className='flex items-center m-4 px-4 gap-3 '>
        <img src={Logo} className='cursor-pointer hover:scale-110'/>
        <h1 className='text-xl font-bold text-purple-300 hover:text-purple-400 cursor-pointer font-[kanit]'>ExcuseMaker</h1>
    </div>
  )
}

export default Header