import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'
import { Bell, Home } from 'lucide-react'
import CartButton from './CartButton'

const Navbar = () => {
    return (
        <nav className='w-full flex items-center justify-between border-b border-gray-200 pb-4'>
            <Link href="/" className='flex items-center tracking-wide text-lg font-semibold text-yellow-500'>
                <Image src="/logo.png" alt='logo' width={36} height={36} className='size-6 md:size-9' />
                <p>TRENDY.SHOP</p>
            </Link>

            <div className='flex items-center gap-4 text-gray-500'>
                <SearchBar />
                <Link href="/" className='flex items-center gap-2'><Home /></Link>
                <button><Bell /></button>
                <CartButton />
                <Link href="/login">Sign in</Link>
            </div>
        </nav>
    )
}

export default Navbar