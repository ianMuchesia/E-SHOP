import React from 'react'
import { BsStar } from 'react-icons/bs'
const Review = () => {
    
  return (
    <div className='grid p-5 gap-3'>
            <h4 className='text-2xl font-bold'>Add a review</h4>
            <p>Your email address will not be published. Required fields are marked<sup>*</sup></p>
            
            <div className='flex items-center'>
            <h4 className='font-extrabold text-lg '>Your Rating{" "}</h4>
            <div className='flex text-yellow-500'>
            <BsStar/>
            <BsStar/>
            <BsStar/>
            <BsStar/>
            <BsStar/>
            </div>
            </div>

            <input
            type="text"
            placeholder="Name"
            className='bg-gray-100 p-4 text-black'/>
            <input
            type="email"
            placeholder='Email'
            className='bg-gray-100 p-4 text-black'
            />
            <textarea
            placeholder='Your review'
            className='bg-gray-100 p-4 text-black'>

            </textarea>
            <button className='bg-blue-600 text-white p-3 rounded w-40 '>Submit</button>
        </div>
  )
}

export default Review