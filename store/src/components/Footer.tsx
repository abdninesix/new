import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-start md:justify-between gap-8 bg-gray-800 text-gray-400 text-sm rounded-lg p-8'>
            <div className='flex flex-col gap-4'>
                <Link href="/" className='flex items-center tracking-wide text-lg font-semibold text-yellow-500'>
                    <Image src="/logo.png" alt='logo' width={36} height={36} className='size-6 md:size-9' />
                    <p>TRENDY.STORE</p>
                </Link>
                <p className='text-sm'>&copy; {new Date().getFullYear()} Trendy.Store</p>
                <p className='text-sm'>All rights reserved.</p>
            </div>

            <div className='flex flex-col gap-4'>
                <p className='text-white'>Links</p>
                <Link href="/">Home</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Terms of Service</Link>
                <Link href="/">Privacy Policy</Link>
            </div>

            <div className='flex flex-col gap-4'>
                <p className='text-white'>Products</p>
                <Link href="/">All Products</Link>
                <Link href="/">New Arrivals</Link>
                <Link href="/">Nest Sellers</Link>
                <Link href="/">Sale</Link>
            </div>

            <div className='flex flex-col gap-4'>
                <p className='text-white'>Company</p>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Blog</Link>
                <Link href="/">Affiliate Program</Link>
            </div>
        </div>
    )
}

export default Footer