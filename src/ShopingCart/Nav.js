import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useGlobalContext } from './Context';

export default function Nav() {
  const {totalAmount} = useGlobalContext()
  
  return (
    <>
    <div className='bg-blue-500 h-14 flex items-center justify-around'>
        <h1 className='text-2xl text-white font-bold'>Coading Addiction</h1>
        < AiOutlineShoppingCart className='text-3xl  text-white'/>
    </div>
        <div className='bg-blue-300 rounded-full h-auto w-5 flex justify-center items-center text-white top-1 right-44 absolute'>{totalAmount}</div>
    </>
  )
}
