import React from 'react'
import { AiOutlineTwitter, AiOutlineGithub} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'

function Main() {
  return (
    <div className='px-6 md:px-8 lg:px-24 xl:px-60 pt-36 text-white'>
        <h1 className='text-6xl font-light'>UNISWAP <span className='font-bold'>PROTOCOL</span></h1>
        <p className='my-6 text-2xl font-[350] tracking-wide'>Swap, earn, and build on the leading decentralized crypto trading protocol.</p>
        <button className='md:max-lg:text-sm  lg:hidden my-6 px-6 text-white text-lg border-[1.5px] border-x-blue-500/50 border-y-pink-500/50 hover:border-x-blue-500/30 hover:border-y-pink-500/30  bg-pink-600 hover:bg-pink-700 border- rounded-lg py-3'>Launch App</button>
        <div className='flex'>
            <AiOutlineTwitter className='mr-1.5' size={28}/>
            <AiOutlineGithub className='mx-1.5' size={28}/>
            <BsDiscord className='mx-1.5' size={28}/>
        </div>
        <div className='lg:flex justify-between md:px-4 lg:px-8 xl:px-12 hidden'>
            <div className='flex flex-col text-center py-24'>
                <div className='text-5xl font-extrabold'>$1.4T+ </div>
                <div className='my-2'>Trade Volume</div>
            </div>
            <div className='flex flex-col text-center py-24'>
              <div className='text-5xl font-extrabold'>138M+</div>
              <div className='my-2'>All Time Trades</div>
            </div>
            <div className='flex flex-col text-center py-24'>
              <div className='text-5xl font-extrabold'>300+</div>
              <div className='my-2'>Integrations</div>
            </div>
            <div className='flex flex-col text-center py-24'>
              <div className='text-5xl font-extrabold'>4,440+</div>
              <div className='my-2'>Community Delegates</div>
            </div>
        </div>
    </div>
  )
}

export default Main