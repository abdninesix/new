"use client"

import useCartStore from '@/stores/cartStore'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CartButton = () => {

    const {cart, hasHydrated} = useCartStore();

    if (!hasHydrated) return <ShoppingCart />;

    return (
        <Link href="/cart" className='relative'>
            <ShoppingCart />
            <span className='absolute -top-3 -right-3 bg-yellow-500 text-white size-4 rounded-full rounded-bl-none flex items-center justify-center text-xs font-medium'>{cart.reduce((acc, item)=>acc+item.quantity, 0)}</span>
        </Link>
    )
}

export default CartButton