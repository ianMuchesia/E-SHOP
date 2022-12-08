import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import styled from "styled-components";





const styles = {
    body: `grid place-items-center mb-5`,
    second_div: `grid place-items-center `,
    image: `h-[192px] w-[192px] rounded-lg border-2 border-gray-100 object-cover`,
    name: `text-sm`,
    price: `font-bold text-blue-500`,
    button: `bg-gray-400 text-white rounded-[8px] text-xs px-5 py-3 hover:bg-blue-600`,
    line: `w-full border-1 mb-6`,
  };
const Featured = ({product}) => {
    const feature =product.products.filter(item=>item.price<2000)
    
  return (
    <div className='p-10 bg-white my-6 rounded-lg'>
        <h1 className="text-2xl">What's cheaper this holiday?</h1>
        <hr className={styles.line} />
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
                <div className={styles.body}>
            <div className={styles.second_div}>
              <img src={item.imageUrl} alt="" className={styles.image} />
            </div>
            <p className={styles.name}>{item.name}</p>
            <h3 className={styles.price}>Ksh.{item.price.toLocaleString()}</h3>
            <button className={styles.button}>
              Add to Cart
            </button>
           
            </div>
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