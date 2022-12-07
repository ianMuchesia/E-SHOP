import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import mpesaLogo from "../assets/2560px-M-PESA_LOGO-01.svg.png"



const Checkout = () => {

  const cartItems = useSelector((state) =>  state.cart.itemsList);
   
  let total=0;
  cartItems.forEach(item=>{
     total += item.totalPrice
  })

  return (
    <div className='bg-white '>
      <p className='text-center mt-4'>Returning customer?<Link to="Login" className='font-bold  '>Click here to login</Link></p>
     {/*  <p>Have a coupon?<Link className='font-bold'>Click here to enter your code</Link></p> */}
      <div className='xl:mx-60 mt-16 p-5 grid lg:grid-cols-3 gap-4'>
      
      <form className='grid gap-2 lg:col-span-2'>
        <div className='md:flex gap-2 w-full'>
        <label htmlFor='firstName'>
          First name
        <input
        type="text"
        id='firstName'
        className='border-[0.5px] p-2 h-10 border-gray-400 w-full'
        />
        </label>


        <label htmlFor='secondName'>
          Last name
        <input
        type="text"
        
        id='secondName'
        className='border-[0.5px] p-2 h-10 border-gray-400 w-full'
        />
        </label>
        </div>

        <label htmlFor='companyName'>
          Company name
        <input
        type="text"
        
        id='companyName'
        className='border-[0.5px] p-2 h-10 border-gray-400 w-full'
        />
        </label>


        <label htmlFor='streetAddress'>
          Street Address
        <input
        type="text"
        
        id='streetAddress'
        className='border-[0.5px] p-2 h-10 border-gray-400 w-full'
        />
        </label>

        <label htmlFor='town_city'>
          Town/City
        <input
        type="text"
        
        id='town_city'
        className='border-[0.5px] p-2 h-10 border-gray-400 w-full'
        />
        </label>

        <label htmlFor='PostCode'>
          Postcode/ZIP
        <input
        type="text"
        
        id='PostCode'
        className='border-[0.5px] p-2 h-10 border-gray-400 w-full'
        />
        </label>

        <label htmlFor='phoneNumber'>
          Phone
        <input
        type="text"
        
        id='phoneNumber'
        className='border-[0.5px] p-2 h-10 border-gray-400 w-full'
        />
        </label>
        <label htmlFor='email'>
          Phone
        <input
        type="email"
        
        id='email'
        className='border-[0.5px] p-2 h-10 border-gray-400 w-full'
        />
        </label>
        <h2 className='text-3xl mt-4 font-semibold'>Additional Information</h2>
        <label htmlFor='orderNotes' className='mb-[-7px]'>order notes(optional)</label>
        <textarea
        id='orderNotes'
        placeholder='Notes about your order,e.g special notes for delivery'>

        </textarea>


      </form>
      <div className='grid mb-16 mt-10 p-5 bg-slate-400 rounded-md'>
        <div className='flex justify-between items-center bg-white h-16 p-3'>
          <p>PRODUCT</p>
          <p>TOTAL</p>
          
        </div>
        <hr className='border-2 border-gray-500'/>
      {cartItems.map(item=>{
        return(
        <div key={item.id}><div className='flex justify-between items-center bg-white h-16 p-3'>
          <p>{item.name.length>8?`${item.name.slice(0,12)}...`:item.name} X {item.quantity}</p>
          <p>Ksh. {item.totalPrice.toLocaleString()}</p>
        </div>
        <hr className='border-2 border-gray-300'/>
        </div>)
      })}
      <div className='flex justify-between items-center bg-white h-16 p-3'>
        <p>Total</p>
        <p className='font-bold underline text-lg'>Ksh.{total.toLocaleString()}</p>
      </div>
      <div className='mt-4 flex justify-between items-center bg-white h-16 p-3'>
        <p>M-PESA</p>
        <img src={mpesaLogo} className="h-16"/>
      </div>
      <p className='text-center m-5'> Place order and pay using M-PESA</p>
      <div className='bg-white p-3 rounded text-sm' >
        <p>
          Your personal data will be used to process your order, support your experience throughout this platform, and for other purposes prescribed in our privacy policy.
        </p>

      </div>
      <div className='bg-blue-500 hidden md:block bottom-0 w-full p-5 mt-4 rounded-xl'>
        <h2 className='text-white text-center font-bold'>PLACE ORDER</h2>
      </div>
      </div>
      </div>
      <div className='bg-blue-500 fixed bottom-0 w-full p-5 md:hidden'>
        <h2 className='text-white text-center font-bold'>PLACE ORDER</h2>
      </div>

    </div>
  )
}

export default Checkout