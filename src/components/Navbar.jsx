import React from 'react'
import { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'

function Navbar() {

    const [nav, setNav] = useState(false)
  return (
    <div className='mx-auto flex justify-between items-center py-4 px-4 md:px-6 lg:px-16 xl:px-36 bg-zinc-900/90 bg-opacity-70 sticky top-0 z-40'>
        <div>
            <img className='md:max-lg:w-10 w-12 object-cover cursor-pointer' src="https://cdn-user-icons.flaticon.com/30789/30789952/1680176866763.svg?token=exp=1680177796~hmac=f443a69c9a5c90e53111c828344e0605" alt="" />
        </div>
       
        <div className='flex items-center'>
            <div className='md:max-lg:text-sm hidden md:block hover:text-white cursor-pointer px-3 text-gray-400 text-lg'>Ecosystem</div>
            <div className='md:max-lg:text-sm hidden md:block hover:text-white cursor-pointer px-3 text-gray-400 text-lg'>Community</div>
            <div className='md:max-lg:text-sm hidden md:block hover:text-white cursor-pointer px-3 text-gray-400 text-lg'>Governance</div>
            <div className='md:max-lg:text-sm hidden md:block hover:text-white cursor-pointer px-3 text-gray-400 text-lg'>Developers</div>
            <div className='md:max-lg:text-sm hidden md:block hover:text-white cursor-pointer px-3 text-gray-400 text-lg'>Blog</div>
            <div className='md:max-lg:text-sm hidden md:block hover:text-white cursor-pointer px-3 text-gray-400 text-lg'>FAQ</div>
            <div className='md:max-lg:text-sm hidden md:block hover:text-white cursor-pointer px-3 text-gray-400 text-lg'>Jobs</div>
            <button className='md:max-lg:text-sm hidden md:block ml-5 px-3 text-white text-lg border-[1.5px] border-x-blue-500/50 border-y-pink-500/50 hover:border-x-blue-500/30 hover:border-y-pink-500/30  bg-pink-600 hover:bg-pink-700 border- rounded-lg py-1.5'>Launch App</button>
            <button onClick={() => setNav(!nav)} className='md:hidden text-white bg-zinc-800 py-2 px-4 rounded-lg border-[1.5px] border-x-blue-500/50 border-y-pink-500/50 hover:border-x-blue-500/30 hover:border-y-pink-500/30'>Menu</button>
        </div>

        <div className={nav ? 'fixed top-0 left-0 w-full h-screen bg-zinc-700 z-50 duration-300' : 'fixed top-0 left-[-100%] w-full h-screen bg-zinc-800 z-50 duration-300'}>
            
            <nav>
                <ul className='flex flex-col p-4 text-gray-400'>
                    <li className='text-xl py-4 flex justify-between items-center'>Ecosystem<AiOutlineClose onClick={()=>setNav(!nav)} size={30} className=' cursor-pointer'/></li>
                    <li className='text-xl py-4 flex'>Community</li>
                    <li className='text-xl py-4 flex'>Governance</li>
                    <li className='text-xl py-4 flex'>Developers</li>
                    <li className='text-xl py-4 flex'>Blog</li>
                    <li className='text-xl py-4 flex'>FAQ</li>
                    <li className='text-xl py-4 flex'>Jobs</li>
                </ul>
            </nav>
        </div>

        
    </div>
  )
}

export default Navbar