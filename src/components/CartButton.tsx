import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CartButton = () => {
    return (
        <div>
            <Link href="/cart"><ShoppingCart /></Link>
        </div>
    )
}

export default CartButton