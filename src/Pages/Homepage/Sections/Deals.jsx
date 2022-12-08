import React from 'react'
import playstationBackground from '../../../assets/playstationBackground.webp'
import playstation from '../../../assets/playstationRemoveBg.png'
import yellowDressBackground from '../../../assets/yellowDressBackground.webp'
import yellowDress from '../../../assets/Wine_Red_Women_Top-Handle_PU_Leather_Saddle_Bag-removebg-preview.png'
const Deals = () => {
  return (
    <div className='grid gap-4 sm:grid-cols-2'>
        <div className='relative md:h-[330px]'>
            
            <img src={playstationBackground} alt="" className='h-full w-full rounded-xl'/>
            
            <img src={playstation} alt="" className='absolute top-2 left-4 h-[90%] lg:left-16 xl:left-32'/>
            <div className='absolute right-3 top-3 lg:right-6 xl:right-24'>
            <span className=' text-xl  text-black '><span className='text-2xl lg:text-6xl text-blue-700 font-bold'>50%</span>DON'T MISS IT</span>
            <br/>
            <span className='text-2xl lg:text-5xl text-gray-700 font-bold'>SuperDeal</span>
            </div>
            <button className=" absolute bottom-24 sm:bottom-28 right-6 xl:right-24 bg-blue-500 text-white border-none mt-2 p-3 font-semibold rounded-lg cursor-pointer text-sm ml-5 sm:h-12 sm:w-24 sm:text-sm lg:w-32 lg:text-lg lg:h-14">
                Shop Now
              </button>
        </div>


        <div className='relative p-0 md:h-[330px]'>
            
            <img src={yellowDressBackground} alt="" className='h-full w-full rounded-xl '/>
            
           
            <div className='absolute right-3 top-3 xl:right-24'>
            <span className='text-2xl text-blue-700 font-bold sm:text-4xl'>50% OFF</span>
            <br/>
            <span className=' text-xl  text-white '>END OF SEASON</span>
            <br/>
            <span className='text-2xl text-gray-200 font-bold'>SuperDeal</span>
            </div>
            <button className=" absolute bottom-24 sm:bottom-12 md:bottom-32 right-6 bg-blue-500 text-white border-none mt-2 p-3 font-semibold rounded-lg cursor-pointer text-sm ml-5 sm:h-14 sm:w-24 lg:w-32 lg:text-lg xl:right-32">
                Shop Now
              </button>
        </div>
    </div>
  )
}

export default Deals