import React from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { useGlobalContext } from './Context';


export default function Phon({ item }) {
    const { removeItem, decriment, incriment } = useGlobalContext()
    const { id, title, price, img, amount } = item
    // console.log(amount)
    return (
        <div>
            <div className="flex p-4 justify-between mx-24">
                <div className='flex'>
                    <img className='w-16 h-20' src={img} alt="" />
                    <div className='ml-5 text-start'>
                        <h1 className='text-bold'>{title}</h1>
                        <h1>${price}</h1>
                        <button onClick={() => removeItem(id)} className='h-5 text-blue-500'>remove</button>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <button><AiOutlineArrowUp onClick={() => incriment(id)} /></button>
                    <h1>{amount}</h1>
                    <button><AiOutlineArrowDown onClick={() => decriment(id)} /></button>
                </div>
            </div>
        </div>
    )
}
