import React from 'react'
import BodyCategrories from './Sections/BodyCategrories'
import Deals from './Sections/Deals'
import Featured from './Sections/Featured'
import Arrival from './Sections/Arrival'

import HomeFooter from './Sections/HomeFooter'

const Home = ({product}) => {
  return (
    <div>
        
        <div className=' p-4'>
          <BodyCategrories/>
          <Featured product={product}/>
          <Deals/>
          <Arrival product={product}/>
         
        </div>
        <HomeFooter/>
    </div>
  )
}

export default Home