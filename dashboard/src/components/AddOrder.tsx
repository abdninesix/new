"use client"

import React from 'react'
import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from './ui/sheet'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const formSchema = z.object({
    amount: z.number().min(1, { message: "Amount must be at least 1" }),
    userId: z.string().min(1, { message: "User ID is required" }),
    status: z.enum(["pending", "processing", "success", "failed"]),
})


const AddOrder = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    return (
        <SheetContent side='right'>
            <SheetHeader>
                <SheetTitle className='mb-4'>Add Order</SheetTitle>
                <SheetDescription asChild>
                    <Form {...form}>
                        <form className="space-y-8">
                            {/* Username */}
                            <FormField
                                control={form.control}
                                name="amount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Amount</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="Enter full name" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Enter the order amount.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Email */}
                            <FormField
                                control={form.control}
                                name="userId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>User ID</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Enter Email" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Enter the user ID.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Phone */}
                            <FormField
                                control={form.control}
                                name="status"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Status</FormLabel>
                                        <FormControl>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a status" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value='pending'>Pending</SelectItem>
                                                    <SelectItem value='processing'>Processing</SelectItem>
                                                    <SelectItem value='success'>Success</SelectItem>
                                                    <SelectItem value='failed'>Failed</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormDescription>
                                            Select the order status.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    )
}

export default AddOrder