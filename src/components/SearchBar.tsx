import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
    return (
        <div className='hidden sm:flex gap-2 rounded-md ring-1 ring-gray-200 p-1 shadow-md focus-within:outline-2'>
            <Search/>
            <input id='search' placeholder='Search...' className='text-sm outline-none' />
        </div>
    )
}

export default SearchBar