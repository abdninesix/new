import { ShippingFormInputs, shippingFormSchema } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

const ShippingForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema)
  })

  return (
    <form className='flex flex-col gap-4'>Hi</form>
  )
}

export default ShippingForm