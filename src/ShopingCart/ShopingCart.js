import React, { useState } from 'react'
import Nav from './Nav'
import Phon from './Phon'
import { useGlobalContext } from './Context'

export default function ShopingCart() {
  const  {items , totalPrice}  = useGlobalContext()

  return (
    <div className='h-screen'>
      <Nav></Nav>
      <div className=' items-center mt-20'>
        {
          items.map(item => <Phon key={item.id} item={item}></Phon>)
        }
      </div>
      <div className='mx-24 h-[2px] bg-gray-600'></div>
      <div className='flex mx-28 justify-between'>
        <h1 className='text-bold text-xl'>total</h1>
        <h1 className='text-bold text-xl'>${totalPrice}</h1>
      </div>
    </div>
  )
}
