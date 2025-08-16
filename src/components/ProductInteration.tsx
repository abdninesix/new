"use client"

import useCartStore from '@/stores/cartStore';
import { ProductType } from '@/types'
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const ProductInteration = ({ product, selectedSize, selectedColor }: { product: ProductType; selectedSize: string; selectedColor: string }) => {

    const { addToCart } = useCartStore();

    const [quantity, setQuantity] = useState(1);

    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    const handleTypeChange = (type: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(type, value);
        router.push(`${pathName}?${params.toString()}`, { scroll: false });
    }

    const handleQuantityChange = (type: "increment" | "decrement") => {
        if (type === "increment") { setQuantity(prev => prev + 1); }
        else if (type === "decrement" && quantity > 1) { setQuantity(prev => prev - 1); }
    }

    const handleAddToCart = () => {
        addToCart({ ...product, quantity, selectedSize, selectedColor });
        toast.success("Product added to cart!")
    }

    return (
        <div className='flex flex-col gap-4 mt-4'>

            <div className='flex flex-col gap-2 text-xs'>
                <span className='text-gray-500'>Size</span>
                <div className='flex items-center gap-2'>
                    {product.sizes.map(size => (
                        <button onClick={() => handleTypeChange("size", size)} key={size} className={`cursor-pointer border-1 ${selectedSize === size ? "border-gray-600" : "border-gray-300"} p-[2px]`}>
                            <div className={`flex items-center justify-center size-6 ${selectedSize === size ? "bg-black text-white" : ""}`}>{size.toUpperCase()}</div>
                        </button>
                    ))}
                </div>
            </div>

            <div className='flex flex-col gap-2 text-xs'>
                <span className='text-gray-500'>Color</span>
                <div className='flex items-center gap-2'>
                    {product.colors.map(color => (
                        <button onClick={() => handleTypeChange("color", color)} key={color} className={`cursor-pointer border-1 ${selectedColor === color ? "border-gray-600" : "border-white"} p-[2px]`}>
                            <div className='size-6' style={{ backgroundColor: color }} />
                        </button>
                    ))}
                </div>
            </div>

            <div className='flex flex-col gap-2 text-xs'>
                <span className='text-gray-500'>Quantity</span>
                <div className='flex items-center gap-2'>
                    <button onClick={() => handleQuantityChange("decrement")} className='cursor-pointer border-1 border-gray-300 p-1'><Minus className='size-4' /></button>
                    <span>{quantity}</span>
                    <button onClick={() => handleQuantityChange("increment")} className='cursor-pointer border-1 border-gray-300 p-1'><Plus className='size-4' /></button>
                </div>
            </div>

            <button onClick={handleAddToCart} className='bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer'><Plus />Add to Cart</button>
            <button className='ring-1 ring-gray-400 text-gray-800 text-sm font-medium shadow-lg rounded-md px-4 py-2 flex items-center justify-center gap-2 cursor-pointer'><ShoppingCart />Buy this Item</button>
        </div>
    )
}

export default ProductInteration