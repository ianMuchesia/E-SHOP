import React from 'react'
import BodyCategrories from './Sections/BodyCategrories'
import Navbar from './Sections/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className=' p-4'>
          <BodyCategrories/>
        </div>
    </div>
  )
}

export default Home