"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const Filter = () => {

    const searchParams = useSearchParams()
    const router = useRouter()
    const pathName = usePathname()

    const handleChange = (value: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("sort", value);
        router.push(`${pathName}?${params.toString()}`, { scroll: false });
    }

    return (
        <div className='flex items-center justify-end gap-2 text-sm text-gray-500 mb-6'>
            <span>Sort by:</span>
            <select name="sort" id="sort" onChange={(e)=>handleChange(e.target.value)} className='ring ring-gray-300 rounded-sm shadow-md p-1'>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>
        </div>
    )
}

export default Filter