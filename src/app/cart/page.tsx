"use client"

const steps = [
  { id: 1, title: "Shopping Cart" },
  { id: 2, title: "Shipping Address" },
  { id: 3, title: "Payment Method" },
]

const cartItems: CartItemsType = [
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
    quantity: 1,
    selectedSize: "s",
    selectedColor: "gray",
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    quantity: 3,
    selectedSize: "m",
    selectedColor: "green",
  },
]

import PaymentForm from '@/components/PaymentForm'
import ShippingForm from '@/components/ShippingForm'
import { CartItemsType } from '@/types'
import { ArrowRight, ChevronRight, Trash2 } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { Suspense, useState } from 'react'

function CartContent() {

  const searchParams = useSearchParams()
  const router = useRouter()
  const [shippingForm, setShippingForm] = useState(null)

  const activeStep = parseInt(searchParams.get("step") || "1")

  return (
    <div className='flex flex-col gap-8 items-center justify-center mt-12'>

      {/* Title */}
      <h1 className='text-2xl font-medium'>Your Shopping Cart</h1>

      {/* Steps */}
      <div className='flex flex-col lg:flex-row items-center gap-8'>
        {steps.map((step) => (
          <React.Fragment key={step.id}>
            <ChevronRight className={`hidden lg:block ${activeStep === step.id ? "text-gray-800" : "text-gray-300"}`} />
            <div className={`flex items-center gap-4 border-b-2 pb-4 ${activeStep === step.id ? "border-gray-800" : "border-gray-300"}`}>
              <div className={`flex items-center justify-center text-white w-8 h-8 rounded-full ${activeStep === step.id ? "bg-gray-800" : "bg-gray-300"}`}>
                {step.id}
              </div>
              <span className={`font-medium ${activeStep === step.id ? "text-gray-800" : "text-gray-300"}`}>{step.title}</span>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Steps & Details */}
      <div className='w-full flex flex-col lg:flex-row items-start gap-16'>

        {/* Left */}
        <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          {activeStep === 1 ? (
            cartItems.map((item) => (
              <div key={item.id} className='flex items-center justify-between'>
                <div></div>
                <button className='size-8 rounded-full bg-red-100 hover:bg-red-200 duration-200 text-red-400 flex items-center justify-center cursor-pointer'><Trash2 className='size-3' /></button>
              </div>
            ))
          ) :
            activeStep === 2 ? (<ShippingForm />) : (
              activeStep === 3 && shippingForm ? <PaymentForm /> : <p className='text-sm text-gray-500'>Please fill in the shipping form to continue.</p>)}
        </div>

        {/* Right */}
        <div className="w-full lg:w-5/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          <h2 className='font-semibold'>Cart Details</h2>
          <div className='flex flex-col gap-4 text-sm'>
            <div className='flex justify-between'>
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium">${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
            </div>
            <div className='flex justify-between'>
              <span className="text-gray-500">Discount</span>
              <span className="font-medium">$10</span>
            </div>
            <div className='flex justify-between'>
              <span className="text-gray-500">Shipping Fee</span>
              <span className="font-medium">$140</span>
            </div>
            <hr className='border-gray-300' />
            <div className='flex justify-between font-medium'>
              <span className="text-gray-800 text-base">Total</span>
              <span className="font-medium">${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
            </div>
          </div>
          {activeStep === 1 && <button onClick={() => router.push("/cart?step=2", { scroll: false })} className='w-full bg-gray-800 hover:bg-gray-900 text-white rounded-lg cursor-pointer flex items-center justify-center gap-2 p-2 duration-200'>Continue<ArrowRight className='size-5' /></button>}
        </div>
      </div>

    </div>
  )
}

const Cartpage = () => {
  return (
    <Suspense fallback={<div>Loading cart...</div>}>
      <CartContent />
    </Suspense>
  )
}

export default Cartpage