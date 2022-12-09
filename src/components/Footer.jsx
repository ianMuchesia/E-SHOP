import React from 'react'
import { FcCopyright } from 'react-icons/fc'
const Footer = () => {
  return (
   <footer>
    <div className='bg-[#0a101d] text-gray-400 mt-0 p-2 mb-[-60px] grid place-items-center lg:grid-cols-2'>
             <p><span className='inline-block'><FcCopyright/></span> 2022 general shop. All rights reserved.</p>
             <p>Terms And Conditions  |   Privacy Policy</p>


        </div>
   </footer>
  )
}

export default Footer