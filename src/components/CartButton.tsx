"use client"

import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CartButton = () => {
    return (
        <Link href="/cart" className='relative'>
            <ShoppingCart />
            <span className='absolute -top-3 -right-3 bg-yellow-500 text-white size-4 rounded-full flex items-center justify-center text-xs font-medium'>1</span>
        </Link>
    )
}

export default CartButton