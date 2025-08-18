import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'
import { Bell, Home, LogIn } from 'lucide-react'
import CartButton from './CartButton'

const Navbar = () => {
    return (
        <nav className='w-full sticky top-0 bg-white/95 flex items-center justify-between border-b border-gray-200 pt-4 pb-3 z-20'>
            <Link href="/" className='flex items-center tracking-wide text-lg font-semibold text-yellow-500'>
                <Image src="/logo.png" alt='logo' width={36} height={36} className='size-6 md:size-9' />
                <p>TRENDY.STORE</p>
            </Link>

            <div className='flex items-center gap-4 text-gray-500'>
                <SearchBar />
                <Link href="/" className='flex items-center gap-2'><Home /></Link>
                <button><Bell /></button>
                <CartButton />
                <Link href="/login"><LogIn/></Link>
            </div>
        </nav>
    )
}

export default Navbar