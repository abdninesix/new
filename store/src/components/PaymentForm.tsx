import { PaymentFormInputs, paymentFormSchema } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const PaymentForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema)
  })

  const router = useRouter()

  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => { }

  return (
    <form onSubmit={handleSubmit(handlePaymentForm)} className='flex flex-col gap-6'>
      <div className='flex flex-col gap-1'>
        <label htmlFor="name" className='text-sm text-gray-500 font-medium'>Name</label>
        <input type="text" id='cardHolder' placeholder='Write card holder name here' {...register("cardHolder")} className='border-b border-gray-200 py-2 outline-none text-sm' />
        {errors.cardHolder && (<p className='text-sm text-red-500'>{errors.cardHolder?.message}</p>)}
      </div>

      <div className='flex flex-col gap-1'>
        <label htmlFor="cardNumber" className='text-sm text-gray-500 font-medium'>Card Number</label>
        <input type="text" id='cardNumber' placeholder='Write 16 digit card number here' {...register("cardNumber")} className='border-b border-gray-200 py-2 outline-none text-sm' />
        {errors.cardNumber && (<p className='text-sm text-red-500'>{errors.cardNumber?.message}</p>)}
      </div>

      <div className='flex flex-col gap-1'>
        <label htmlFor="expirationDate" className='text-sm text-gray-500 font-medium'>Card Expiration Date</label>
        <input type="text" id='expirationDate' placeholder='MM/YY' {...register("expirationDate")} className='border-b border-gray-200 py-2 outline-none text-sm' />
        {errors.expirationDate && (<p className='text-sm text-red-500'>{errors.expirationDate?.message}</p>)}
      </div>

      <div className='flex flex-col gap-1'>
        <label htmlFor="cvv" className='text-sm text-gray-500 font-medium'>CVV</label>
        <input type="text" id='cvv' placeholder='Write 3 digit CVV here' {...register("cvv")} className='border-b border-gray-200 py-2 outline-none text-sm' />
        {errors.cvv && (<p className='text-sm text-red-500'>{errors.cvv?.message}</p>)}
      </div>

      <div className='flex items-center gap-2'>
        <Image src="/klarna.png" width={50} height={50} alt='mastercard' className='rounded-md cursor-pointer hover:opacity-90' />
        <Image src="/cards.png" width={50} height={50} alt='cards' className='rounded-md cursor-pointer hover:opacity-90' />
        <Image src="/stripe.png" width={50} height={50} alt='stripe' className='rounded-md cursor-pointer hover:opacity-90' />
      </div>
      
      <p className='text-gray-500 text-xs'>By clicking Pay Now, you agree to our{" "}
        <span className='hover:underline cursor-pointer text-black'>Terms and Conditions</span> and{" "}
        <span className='hover:underline cursor-pointer text-black'>Privacy Policy</span>{". "}You have authorized us to charge your selected payment method for the total amount shown. All sales are subject to our return and{" "}
        <span className='hover:underline cursor-pointer text-black'>Refund Policies</span>
      </p>

      <button type='submit' className='flex items-center justify-center gap-2 ring-1 ring-gray-200 shadow-lg rounded-sm p-2 text-sm cursor-pointer text-white bg-gray-800 hover:bg-gray-950 duration-200'>Checkout<ShoppingCart className='size-5' /></button>

    </form>
  )
}

export default PaymentForm