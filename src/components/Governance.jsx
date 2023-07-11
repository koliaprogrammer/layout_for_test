import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsArrowUpRight } from 'react-icons/bs'

function Governance() {
  return (
    <div className='text-white px-6 md:px-8 lg:px-24 xl:px-60'>
        <div className='mb-4 flex items-center text-lg hover:text-gray-400 cursor-pointer'>PROTOCOL GOVERNANCE<AiOutlineArrowRight/></div>
        <div className='lg:grid grid-cols-2 gap-3'>
            <div className='bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 rounded-2xl p-6 pr-20 lg:pr-28  max-lg:mb-3 lg:gap-3'>
                <div className='text-3xl text-white mb-6'>Governed by the community.</div>
                <div className='text-xl text-gray-400 mb-6'>The Uniswap Protocol is managed by a global community of UNI token holders and delegates.</div>
                <button className='flex items-center  text-white bg-zinc-800 py-2 px-4 rounded-lg border-[1.5px] border-x-blue-500/50 border-y-pink-500/50 hover:border-x-blue-500/30 hover:border-y-pink-500/30'>Read more<BsArrowUpRight/></button>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='p-6 items-center bg-zinc-800 border-[1.5px] border-zinc-600 rounded-2xl hover:bg-zinc-700'>
                    <div className='flex justify-between  text-xl mb-3'>
                        <div>Governance Forum</div>
                        <div><BsArrowUpRight/></div>
                    </div>
                    <div className='text-gray-400'>
                        Participate by proposing upgrades and discussing the futute of the protocol with the Uniswap community.
                    </div>
                </div>
                <div className='p-6 items-center bg-zinc-800 border-[1.5px] border-zinc-600 rounded-2xl hover:bg-zinc-700'>
                    <div className='flex justify-between  text-xl mb-3'>
                        <div>Governance Forum</div>
                        <div><BsArrowUpRight/></div>
                    </div>
                    <div className='text-gray-400'>
                        Participate by proposing upgrades and discussing the futute of the protocol with the Uniswap community.
                    </div>
                </div>
                <div className='p-6 items-center bg-zinc-800 border-[1.5px] border-zinc-600 rounded-2xl hover:bg-zinc-700 '>
                    <div className='flex justify-between  text-xl mb-3'>
                        <div>Governance Forum</div>
                        <div><BsArrowUpRight/></div>
                    </div>
                    <div className='text-gray-400'>
                        Participate by proposing upgrades and discussing the futute of the protocol with the Uniswap community.
                    </div>
                </div>
            </div>

        </div>
    </div>
    
  )
}

export default Governance