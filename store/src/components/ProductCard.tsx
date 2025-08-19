"use client"

import useCartStore from '@/stores/cartStore'
import { ProductType } from '@/types'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const ProductCard = ({ product }: { product: ProductType }) => {

  const { addToCart } = useCartStore();

  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0]
  })

  const handleProductType = ({ type, value }: { type: "size" | "color", value: string }) => {
    setProductTypes((prev) => ({
      ...prev, [type]: value,
    }));
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1, selectedSize: productTypes.size, selectedColor: productTypes.color })
    toast.success("Product added to cart!")
  };

  return (
    <div className='overflow-hidden rounded-lg shadow-lg'>

      {/* Image */}
      <Link href={`/products/${product.id}`}>
        <div className='relative aspect-[2/3] p-10 bg-gray-50'>
          <Image
            key={productTypes.color}
            src={product.images[productTypes.color]}
            alt={product.name}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33v' className="object-cover hover:scale-105 opacity-0 duration-300"
            onLoad={(e) => e.currentTarget.classList.remove("opacity-0")} />
        </div>
      </Link>

      {/* Details */}
      <div className='flex flex-col gap-2 p-4'>
        <h1 className='font-medium text-sm sm:text-lg'>{product.name}</h1>
        <p className='text-xs text-gray-500 sm:text-sm'>{product.shortDescription}</p>

        {/* Size and Color */}
        <div className='flex flex-row items-center gap-2 text-xs'>
          <div className="flex flex-col gap-1">
            <span className='text-gray-500'>Size</span>
            <select name="size" id="size" onChange={(e) => handleProductType({ type: "size", value: e.target.value })} className='ring ring-gray-300 rounded-md px-2 py-1'>
              {product.sizes.map((size) => (
                <option key={size} value={size}>{size.toUpperCase()}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <span className='text-gray-500'>Color</span>
            <div className='flex flex-wrap gap-2'>
              {product.colors.map((color) => (
                <button key={color} onClick={() => handleProductType({ type: "color", value: color })} className={`duration-300 cursor-pointer border-2 rounded-full p-[1.5px] ${productTypes.color === color ? "border-gray-400" : "border-gray-200"}`}>
                  <div className='size-6 rounded-full' style={{ backgroundColor: color }} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Price and Button */}
        <div className='flex flex-col sm:flex-row sm:items-center gap-2 justify-between'>
          <p className='font-medium'>${product.price.toFixed(2)}</p>
          <button onClick={handleAddToCart} className='sm:w-fit flex items-center justify-center gap-2 ring-1 ring-gray-200 shadow-lg rounded-sm px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-gray-800 duration-200'>
            <ShoppingCart className='size-4' />Add to Cart
          </button>
        </div>
      </div>

    </div>
  )
}

export default ProductCard