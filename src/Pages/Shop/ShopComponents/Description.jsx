import React from 'react'

const Description = ({description}) => {
  return (
    <div>
        <h1 className='text-xl m-2 text-center sm:text-4xl md:text-6xl font-extrabold'>Further Description</h1>
    <div className='text-base p-8 '>
        {description}</div>

    </div>
  )
}

export default Description