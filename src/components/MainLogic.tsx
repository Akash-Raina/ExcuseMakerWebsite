import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function MainLogic() {
    
    const [excuseName, setExcuse] = useState({})

    const familyExcuse = (event) =>{

        const text = (event.target.innerText)
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${text}/`).then((res) => {
            setExcuse(res.data);
        })
    }


  return (
    <div className='my-16 mx-3'>       
        <span className='text-xl text-zinc-400'>For what you need an excuse</span>
        <div className='grid grid-cols-2 gap-4 mt-8'>
            <button className='rounded-md bg-white hover:bg-green-300 mx-10 h-10 w-[70%]'  onClick={familyExcuse}>family</button>
            <button className='rounded-md bg-white hover:bg-green-300 mx-10 h-10 w-[70%]' onClick={familyExcuse}>office</button>
            <button className='rounded-md bg-white hover:bg-green-300 mx-10 h-10 w-[70%]' onClick={familyExcuse}>party</button>
            <button className='rounded-md bg-white hover:bg-green-300 mx-10 h-10 w-[70%]' onClick={familyExcuse}>college</button>
        </div>
        <div className='rounded-md bg-slate-100 flex justify-center mt-14  mx-5 gap-4 h-14    items-center'>
            <span>{excuseName[0]?.category}:</span>
            <span>{excuseName[0]?.excuse}</span>
        </div>
    </div>
  )
}

export default MainLogic