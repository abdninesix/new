"use client"

const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];

import { Briefcase, Footprints, Glasses, Hand, Shirt, ShoppingBasket, Venus } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

const Categories = () => {

  const searchParams = useSearchParams()
  const router = useRouter()
  const pathName = usePathname()

  const selectedCategory = searchParams.get("category")


  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value || "all");
    router.push(`${pathName}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 p-2 bg-gray-100 rounded-lg mb-4 text-sm'>
      {categories.map((category) => (
        <button key={category.name} onClick={() => handleChange(category.slug)} className={`${category.slug === selectedCategory && "bg-white"} flex items-center justify-start lg:justify-center gap-2 cursor-pointer px-2 py-1 hover:bg-white duration-200 rounded-md`}>
          {category.icon} {category.name}
        </button>
      ))}
    </div>
  )
}

export default Categories