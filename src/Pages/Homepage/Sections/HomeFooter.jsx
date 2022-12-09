import React from 'react'
import './Footer.css'
import {FcCustomerSupport,FcShipped,FcInfo,FcCheckmark , FcCopyright} from 'react-icons/fc'
import { CiFacebook, CiLinkedin, CiTwitter, CiInstagram} from 'react-icons/ci'
import logo from "../../../assets/shopee.tw_-_png_0-removebg-preview.png";
import { Link } from 'react-router-dom';




const HomeFooter = () => {
   
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
        <hr className="w-full border-1 my-6 " />
        <div className=' grid sm:grid-cols-2 lg:grid-cols-4 xl:gap-4'>
            <div className='grid gap-4'>
                <div className="flex">
                <img src={logo} className="h-14"/>
                <h5 className='text-white'>
                    <span className='font-bold text-xl'>Shopee</span><br/><span>Market</span>
                </h5>
                </div>
                <div>
                    <p className='text-gray-400'>
                    Welcome to shopee, where you'll find a variety of high-quality products at competitive price, customer satisfaction has always been our top priority
                    </p>
                </div>
                <div className='flex gap-4 m-6'>
                <span className='text-gray-400 text-4xl'>
                <CiFacebook/>
                </span>
                <span className='text-gray-400 text-4xl'> <CiTwitter/></span>
                <span className='text-gray-400 text-4xl'>
                <CiInstagram/>
                </span>
                <span className='text-gray-400 text-4xl'>
                    
                 <CiLinkedin/>
                </span>
                
                 
            </div>
            </div>
            <div className='text-gray-400 grid gap-2 mt-6 sm:mt-0 '>
                <h5 className='text-white text-lg'>Quick Links</h5>
                <Link to="/">Home</Link>
                <Link to="/Shop">Shop</Link>
                <Link to="/">About & Contact</Link>
            </div>
            <div className='text-gray-400 grid mt-6 lg:mt-0'>
                <h5 className='text-white text-lg m-1'>Contact</h5>
                <p>+254700000000</p>
                <p>Msodoki C Amedee 4401</p>
                <p>Waldeck Street GrapeVine</p>
                <p>Mombasa , Mombasa Kenya 69285</p>
            </div>
             <div className='mt-4 lg:mt-0'>
                <p className='text-gray-400'>Subscribe to our Email</p>
                <h1 className="text-5xl text-[#ffffff] font-bold">For Latest News & Updates</h1>
                <input
                type="email"
                placeholder="Enter Your Email Address"
                className='bg-[#151924] border-solid py-4 pl-6 text-[16px] rounded-md h-14 transition duration-3000 ease-in-out w-full mb-2'/>
                <br/>
                 <button
                
                className='bg-[#4d66ff] border-solid w-full text-[16px] rounded-md h-14 transition duration-3000 ease-in-out'>Subscribe</button>
             </div>
        </div>
      
    </div>
    
    
  )
}

export default HomeFooter