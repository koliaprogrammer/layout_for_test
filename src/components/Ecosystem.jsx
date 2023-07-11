import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BsArrowUpRight} from 'react-icons/bs'

function Ecosystem() {
  return (
    <div className='px-6 md:px-8 lg:px-24 xl:px-60 pt-36 text-white lg:grid grid-cols-2 gap-6'>
        <div className='mb-6'>
            <div className='mb-4 flex items-center text-lg hover:text-gray-400 cursor-pointer'>UNISWAP ECOSYSTEM<AiOutlineArrowRight/></div>
            <div className='mb-4 text-3xl'>A growing network of DeFi Apps.</div>
            <p className='text-gray-400 mr-20 lg:[580px] text-xl'>Developers, traders, and liquidity providers participate together in a financial marketplace that is open and accessible to all.</p>
        </div>
        <div className='flex flex-col bg-gradient-to-r from-zinc-700 via-zinc-500 to-zinc-700  rounded-2xl p-6 h-60'>
            <div className='mb-2 font-bold text-5xl'>300+</div>
            <div className='mb-2 text-xl text-gray-400'>Integrations</div>
            <button className='flex items-center w-32 text-white bg-zinc-800 py-2 px-4 rounded-lg border-[1.5px] border-x-blue-500/50 border-y-pink-500/50 hover:border-x-blue-500/30 hover:border-y-pink-500/30'>Explore all<BsArrowUpRight/></button>
        </div>
        <div className='mb-4 pt-12 flex items-center text-lg hover:text-gray-400 cursor-pointer'>DEVELOPERS<AiOutlineArrowRight/></div>
    </div>
  )
}

export default Ecosystem