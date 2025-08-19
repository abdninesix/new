"use client"

const steps = [
  { id: 1, title: "Shopping Cart" },
  { id: 2, title: "Shipping Address" },
  { id: 3, title: "Payment Method" },
]

import PaymentForm from '@/components/PaymentForm'
import ShippingForm from '@/components/ShippingForm'
import useCartStore from '@/stores/cartStore'
import { ShippingFormInputs } from '@/types'
import { ArrowRight, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { Suspense, useState } from 'react'

function CartContent() {

  const searchParams = useSearchParams()
  const router = useRouter()
  const [shippingForm, setShippingForm] = useState<ShippingFormInputs>()

  const activeStep = parseInt(searchParams.get("step") || "1")

  const { cart, removeFromCart } = useCartStore()

  if (cart.length === 0) return (
    <div className='flex flex-col gap-8 items-center justify-center mt-12'>
      <h1 className='text-2xl font-medium'>Your Shopping Cart</h1>
      <p className='text-gray-500'>Your cart is currently empty.</p>
    </div>
  )

  return (
    <div className='flex flex-col gap-8 items-center justify-center mt-12'>

      {/* Title */}
      <h1 className='text-2xl font-medium'>Your Shopping Cart</h1>

      {/* Steps */}
      <div className='flex items-center gap-2 sm:gap-6'>
        {steps.map((step) => (
          <React.Fragment key={step.id}>
            <ArrowRight className={`hidden lg:block ${activeStep === step.id ? "text-gray-800" : "text-gray-300"}`} />
            <div className={`flex items-center gap-4 border-b-2 pb-4 ${activeStep === step.id ? "border-gray-800" : "border-gray-300"}`}>
              <div className={`flex items-center justify-center text-white size-4 lg:size-8 p-3 rounded-full ${activeStep === step.id ? "bg-gray-800" : "bg-gray-300"}`}>
                {step.id}
              </div>
              <span className={`font-medium text-xs lg:text-base ${activeStep === step.id ? "text-gray-800" : "text-gray-300"}`}>{step.title}</span>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Steps & Details */}
      <div className='w-full flex flex-col lg:flex-row items-start gap-16'>

        {/* Left */}
        <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          {activeStep === 1 ? (
            cart.map((item) => (
              <div key={item.id + item.selectedSize + item.selectedColor} className='flex items-start justify-between'>
                <div className='flex gap-8'>
                  <div className='relative overflow-hidden rounded-md p-10'>
                    <Image src={item.images[item.selectedColor]} alt={item.name} fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33v' className='object-cover' />
                  </div>
                  <div className='flex flex-col justify-between'>
                    <div className='flex flex-col gap-1'>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs texy-gray-500">Quantity: {item.quantity}</p>
                      <p className="text-xs texy-gray-500">Size: {item.selectedSize.toUpperCase()}</p>
                      <div className="flex gap-1 text-xs texy-gray-500">Color: <div className='size-4' style={{ backgroundColor: item.selectedColor }} /></div>
                    </div>
                    <span className="font-medium mt-2">${item.price.toFixed(2)}</span>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item)} className='size-8 rounded-full bg-red-100 hover:bg-red-200 duration-200 text-red-400 flex items-center justify-center cursor-pointer'><Trash2 className='size-4' /></button>
              </div>
              ))
          ) :
            activeStep === 2 ? (<ShippingForm setShippingForm={setShippingForm} />) : (
              activeStep === 3 && shippingForm ? <PaymentForm /> : <p className='text-sm text-red-500'>Please fill in the shipping form to continue.</p>)}
        </div>

        {/* Right */}
        <div className="w-full lg:w-5/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          <h2 className='font-semibold'>Cart Details</h2>
          <div className='flex flex-col gap-4 text-sm'>
            <div className='flex justify-between'>
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium">${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
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
              <span className="font-medium">${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
            </div>
          </div>
          {activeStep === 1 && <button onClick={() => router.push("/cart?step=2")} className='flex items-center justify-center gap-2 ring-1 ring-gray-200 shadow-lg rounded-sm p-2 text-sm cursor-pointer text-white bg-gray-800 hover:bg-gray-950 duration-200'>Continue<ArrowRight className='size-5' /></button>}
        </div>
      </div>

    </div >
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