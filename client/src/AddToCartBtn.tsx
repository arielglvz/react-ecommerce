import React from 'react'
import { twMerge } from 'tailwind-merge'

const AddToCartBtn = ({ 
  className, 
  title = "Add to cart"
}: {
  className?: string;
  title?: string
}) => {
  
  const newClassName = twMerge('bg-[#f7f7f7] uppercase text-xs py-3 text-center rounded-full font-semibold hover:bg-black hover:text-white hover:scale-105 duration-200 cursor-pointer', className)
  return (
    <button className={newClassName}>
     { title }
    </button>
  )
}

export default AddToCartBtn
