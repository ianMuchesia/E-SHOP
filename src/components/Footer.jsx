import React from 'react'
import './Footer.css'
import {FcCustomerSupport,FcShipped,FcInfo,FcCheckmark} from 'react-icons/fc'
const Footer = () => {
   
  return (
    <div className='main bottom-0 mb-0 '>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6'>
            <div className='flex justify-between items-center'>
            <span className='text-blue-600'>
            <FcCustomerSupport size={80}/></span>
            <div>
                <h2 className="text-xl text-white font-semibold">Customer Support</h2>
                <p className='text-gray-400 text-sm'>Customer Service Specialists process complaints and issues related to products or services</p>
            </div>
            </div>


            <div className='flex justify-between items-center'>
            <span className='text-blue-600'>
            <FcShipped size={80}/>
            </span>
             <div>
                <h2 className="text-xl text-white font-semibold">Customer Support</h2>
                <p className='text-gray-400 text-sm'>Customer Service Specialists process complaints and issues related to products or services</p>
            </div>
            </div>


            <div className='flex justify-between items-center'>
            <span className='text-blue-600'><FcCheckmark size={80}/></span>
            <div>
                <h2 className="text-xl text-white font-semibold">Customer Support</h2>
                <p className='text-gray-400 text-sm'>Customer Service Specialists process complaints and issues related to products or services</p>
            </div>
            </div>


            <div className='flex justify-between items-center'><span className='text-blue-600'><FcInfo size={80}/></span>
            <div>
                <h2 className="text-xl text-white font-semibold">Customer Support</h2>
                <p className='text-gray-400 text-sm'>Customer Service Specialists process complaints and issues related to products or services</p>
            </div>
            </div>            
           {/*  <FaSmileBeam/>
            <FaInfo/>
             */}
        </div>
    </div>
  )
}

export default Footer