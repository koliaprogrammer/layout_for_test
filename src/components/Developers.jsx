import React from 'react'
import {BsArrowUpRight} from 'react-icons/bs'
import {AiOutlineArrowRight} from 'react-icons/ai'

function Developers() {
  return (
    <div className='lg:grid grid-cols-3  grid-rows-[500px_80px] px-6 md:px-8 lg:px-24 xl:px-60 gap-3 mb-10'>
        
        <div className='col-span-2 bg-gradient-to-r from-pink-500 via-pink-700 to-pink-900 rounded-2xl p-6 lg:pr-48 mb-3'>
            <div className='text-3xl text-white lg:mt-[100px] mb-6'>Superpowers for DeFi developers.</div>
            <div className='text-xl text-gray-400 mb-6'>Build Defi apps and tools on the largest crypto project on Ethereum. Get started with quick start guides, protocol documentation, a Javascript SDK, and fully open source code.</div>
            <button className='flex items-center  text-white bg-zinc-800 py-2 px-4 rounded-lg border-[1.5px] border-x-blue-500/50 border-y-pink-500/50 hover:border-x-blue-500/30 hover:border-y-pink-500/30'>Documentanion<BsArrowUpRight/></button>
            
        </div>
        <div className='col-span-2 md:grid grid-cols-2 gap-3 text-white h-20 mb-[100px] md:mb-3 lg:mb-0'>
                <div className='flex justify-between p-6 items-center bg-zinc-800 border-[1.5px] border-zinc-600 rounded-2xl text-xl mb-3 hover:bg-zinc-700 hover:text-gray-400'>
                    <div>V3 Whitepaper</div>
                    <div><BsArrowUpRight/></div>
                </div>
                <div className='flex justify-between p-6 items-center bg-zinc-800 border-[1.5px] border-zinc-600 rounded-2xl text-xl mb-3 hover:bg-zinc-700 hover:text-gray-400'>
                    <div>Github</div>
                    <div><BsArrowUpRight/></div>
                </div>
            </div>
        <div className='row-start-1 row-span-2 col-start-3 bg-zinc-800 border-[1.5px] border-zinc-600 rounded-2xl p-6 pr-40 lg:pr-12 text-white '>
            <img className='mb-4' src="https://uniswap.org/cdn-cgi/image/width=128/images/unigrants.png" alt="" />
            <div className='text-xl mb-4'>Apply for funding from the Uniswap Grants Program</div>
            <div className='text-xl text-gray-400 mb-4'>Get paid to build the future of finance. Uniswap Governance offers grant funding for people building apps, tools, and activities on the Uniswap Protocol.</div>
            <button className='flex items-center  text-white bg-zinc-800 py-2 px-4 rounded-lg border-[1.5px] border-x-blue-500/50 border-y-pink-500/50 hover:border-x-blue-500/30 hover:border-y-pink-500/30'>Learn more<BsArrowUpRight/></button>
        </div>
    </div>
  )
}

export default Developers