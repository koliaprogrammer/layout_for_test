import React from 'react'
import { AiOutlineTwitter, AiOutlineGithub} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'


function Footer() {
  return (
    <div className='text-white px-6 md:px-8 lg:px-24 xl:px-60 mt-20 mb-4'>
        <div className='md:flex justify-between text-[11.5px] mb-6'>
            <div className='max-md:py-2'>Ecosystem</div>
            <div className='max-md:py-2'>Community</div>
            <div className='max-md:py-2'>Governance</div>
            <div className='max-md:py-2'>Developers</div>
            <div className='max-md:py-2'>Blog</div>
            <div className='max-md:py-2'>FAQ</div>
            <div className='max-md:py-2'>Privacy Policy</div>
            <div className='max-md:py-2'>Trademark Policy</div>
            <div className='max-md:py-2'>Security</div>
        </div>
        <div>
            <div className='text-sm text-gray-400'>Media inquiries for Uniswap Labs - Contact</div>
            <div className='flex items-center justify-between'>
                <div className='text-sm hover:text-gray-400 '>media@uniswap.org</div>
                <div className='flex items-center'>
                    <AiOutlineTwitter className='mr-1.5 text-gray-500 hover:text-gray-600' size={25}/>
                    <AiOutlineGithub className='mx-1.5 text-gray-500 hover:text-gray-600' size={25}/>
                    <BsDiscord className='mx-1.5 text-gray-500 hover:text-gray-600' size={25}/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer