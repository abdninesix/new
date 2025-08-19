import ProductInteration from '@/components/ProductInteration';
import { ProductType } from '@/types';
import { Loader } from 'lucide-react';
import Image from 'next/image';
import React, { Suspense } from 'react'

const product: ProductType =
{
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  price: 39.9,
  sizes: ["s", "m", "l", "xl", "xxl"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    green: "/products/1gr.png",
  },
};

// export const generateMetadata = async ({ params }: { params: { id: string } }) => {
//   return {
//     title: product.name,
//     description: product.description,
//   }
// }

const ProductDetails = async ({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ size: string, color: string }> }) => {

  const { size, color } = await searchParams

  const selectedSize = (size || product.sizes[0] as string)
  const selectedColor = (color || product.colors[0] as string)

  return (
    <div className='flex flex-col gap-4 lg:flex-row lg:gap-12 mt-12'>

      <div className='relative w-full lg:w-5/12 aspect-[2/3]'>
        <Image src={product.images[selectedColor]} alt={product.name} fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33v' className='object-contain rounded-md' />
      </div>

      <div className='w-full lg:w-7/12 flex flex-col gap-4'>
        <h1 className='text-2xl font-medium'>{product.name}</h1>
        <p className='text-gray-500'>{product.description}</p>
        <h2 className='text-2xl font-semibold'>${product.price.toFixed(2)}</h2>
        <Suspense fallback={<div className='mx-auto'><Loader className='animate-spin' /></div>}>
          <ProductInteration product={product} selectedSize={selectedSize} selectedColor={selectedColor} />
        </Suspense>
        <div className='flex items-center gap-2 mt-4'>
          <Image src="/klarna.png" width={50} height={50} alt='mastercard' className='rounded-md cursor-pointer hover:opacity-90' />
          <Image src="/cards.png" width={50} height={50} alt='cards' className='rounded-md cursor-pointer hover:opacity-90' />
          <Image src="/stripe.png" width={50} height={50} alt='stripe' className='rounded-md cursor-pointer hover:opacity-90' />
        </div>
        <p className='text-gray-500 text-xs'>By clicking Pay Now, you agree to our{" "}
          <span className='hover:underline cursor-pointer text-black'>Terms and Conditions</span> and{" "}
          <span className='hover:underline cursor-pointer text-black'>Privacy Policy</span>{". "}You have authorized us to charge your selected payment method for the total amount shown. All sales are subject to our return and{" "}
          <span className='hover:underline cursor-pointer text-black'>Refund Policies</span>
        </p>
      </div>

    </div>
  )
}

export default ProductDetails