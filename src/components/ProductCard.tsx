"use client"

import { ProductType } from '@/types'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const ProductCard = ({ product }: { product: ProductType }) => {

  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0]
  })

  const handleProductType = ({ type, value }: { type: "size" | "color", value: string }) => {
    setProductTypes((prev) => ({
      ...prev, [type]: value,
    }));
  };

  return (
    <div className='overflow-hidden rounded-lg shadow-lg'>
      {/* Image */}
      <Link href={`/product/${product.id}`}>
        <div className='relative aspect-[2/3]'>
          <Image src={product.images[productTypes.color]} alt={product.name} fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33v' className='object-cover hover:scale-105 duration-200' />
        </div>
      </Link>
      {/* Details */}
      <div className='flex flex-col gap-4 p-4'>
        <h1 className='font-medium'>{product.name}</h1>
        <p className='text-sm text-gray-500'>{product.shortDescription}</p>
        {/* Size and Color */}
        <div className='flex items-center gap-4 text-xs'>
          <div className="flex flex-col gap-1">
            <span className='text-gray-500'>Size</span>
            <select name="size" id="size" onChange={(e) => handleProductType({ type: "size", value: e.target.value })} className='ring ring-gray-300 rounded-md px-2 py-1 outline-none'>
              {product.sizes.map((size) => (
                <option key={size} value={size}>{size.toUpperCase()}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <span className='text-gray-500'>Color</span>
            <div className='flex  items-center gap-2'>
              {product.colors.map((color) => (
                <div key={color} onClick={() => handleProductType({ type: "color", value: color })} className={`duration-300 cursor-pointer border-2 rounded-full p-[1.5px] ${productTypes.color === color ? "border-gray-400" : "border-gray-200"}`}>
                  <div className='size-6 rounded-full' style={{ backgroundColor: color }} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Price and Button */}
        <div className='flex items-center justify-between'>
          <p className='font-medium'>${product.price.toFixed(2)}</p>
          <button
            className='flex items-center gap-2 ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black duration-200'>
            <ShoppingCart className='size-4' />Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard