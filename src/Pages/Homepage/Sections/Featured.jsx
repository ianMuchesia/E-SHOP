import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import styled from "styled-components";
import FeaturedItem from './FeaturedItem';







const Featured = ({product}) => {
    const feature =product.products.filter(item=>item.price<2000)
   
  return (
    <div className='p-10 bg-white my-6 rounded-lg'>
        <h1 className="text-2xl">What's cheaper this holiday?</h1>
        <hr className="w-full border-1 mb-6" />
          <Splide
        options={{
          type: "loop",
          focus: "center",
          perPage: 1,
          perMove:1,
          trimSpace: 'move',
          focus    : 'center',
          gap: "0.4rem",
          arrows: true,
          pagination: false,
          drag: "free",
          breakpoints: {
            1600: {
              perPage: 4,
            },
            1124: {
              perPage: 3,
            },

            900: {
              perPage: 2,
            },
            500:{
                perPage:1,
            }
          },
       /*    autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: true,
            rewind: false,
            speed: 1,
          }, */
        }}
      /*   extensions={{ AutoScroll }} */
      >
       { feature.map(item=>{
        return(

            <SplideSlide key={item.id} className="border-2 p-2 rounded-lg" >
              <FeaturedItem
              name={item.name}
              price={item.price}
              image={item.imageUrl}
              id={item.id}
              />
          </SplideSlide>
        )
       }) }
      </Splide>

    </div>
  )
}
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export default Featured