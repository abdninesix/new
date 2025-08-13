import { ShippingFormInputs, shippingFormSchema } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const ShippingForm = ({ setShippingForm }: { setShippingForm: (data: ShippingFormInputs) => void }) => {

  const { register, handleSubmit, formState: { errors } } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema)
  })

  const router = useRouter()


  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  }

  return (
    <form onSubmit={handleSubmit(handleShippingForm)} className='flex flex-col gap-6'>
      <div className='flex flex-col gap-1'>
        <label htmlFor="name" className='text-sm text-gray-500 font-medium'>Name</label>
        <input type="text" id='name' placeholder='Write name here' {...register("name")} className='border-b border-gray-200 py-2 outline-none text-sm' />
        {errors.name && (<p className='text-sm text-red-500'>{errors.name?.message}</p>)}
      </div>

      <div className='flex flex-col gap-1'>
        <label htmlFor="email" className='text-sm text-gray-500 font-medium'>Email</label>
        <input type="text" id='email' placeholder='Write email here' {...register("email")} className='border-b border-gray-200 py-2 outline-none text-sm' />
        {errors.email && (<p className='text-sm text-red-500'>{errors.email?.message}</p>)}
      </div>

      <div className='flex flex-col gap-1'>
        <label htmlFor="phone" className='text-sm text-gray-500 font-medium'>Phone</label>
        <input type="text" id='phone' placeholder='Write phone here' {...register("phone")} className='border-b border-gray-200 py-2 outline-none text-sm' />
        {errors.phone && (<p className='text-sm text-red-500'>{errors.phone?.message}</p>)}
      </div>

      <div className='flex flex-col gap-1'>
        <label htmlFor="address" className='text-sm text-gray-500 font-medium'>Address</label>
        <input type="text" id='address' placeholder='Write address here' {...register("address")} className='border-b border-gray-200 py-2 outline-none text-sm' />
        {errors.address && (<p className='text-sm text-red-500'>{errors.address?.message}</p>)}
      </div>

      <div className='flex flex-col gap-1'>
        <label htmlFor="city" className='text-sm text-gray-500 font-medium'>City</label>
        <input type="text" id='city' placeholder='Write city here' {...register("city")} className='border-b border-gray-200 py-2 outline-none text-sm' />
        {errors.city && (<p className='text-sm text-red-500'>{errors.city?.message}</p>)}
      </div>

      <button type='submit' className='flex items-center justify-center gap-2 ring-1 ring-gray-200 shadow-lg rounded-sm p-2 text-sm cursor-pointer text-white bg-gray-800 hover:bg-gray-950 duration-200'>Continue<ArrowRight className='size-5' /></button>

    </form>
  )
}

export default ShippingForm