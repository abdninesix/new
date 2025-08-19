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
import { Textarea } from './ui/textarea'
import { Checkbox } from './ui/checkbox'
import { Label } from './ui/label'
import { ScrollArea } from './ui/scroll-area'

const categories = [
    "T-shirts", "Shoes", "Accessories", "Bags", "Dresses", "Jackets", "Gloves",
] as const;

const sizes = [
    "xs", "s", "m", "l", "xl", "xxl", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48",
] as const;

const colors = [
    "blue", "green", "red", "yellow", "purple", "orange", "pink", "brown", "gray", "black", "white",
] as const;

const formSchema = z.object({
    name: z.string().min(1, { message: "Product name is required." }).max(50),
    shortDescription: z.string().min(1, { message: "Short description is required." }).max(50),
    description: z.string().min(1, { message: "Description is required." }),
    price: z.number().min(1, { message: "Price is required." }),
    category: z.enum(categories),
    sizes: z.array(z.enum(sizes)),
    colors: z.array(z.enum(colors)),
    images: z.record(z.enum(colors), z.string())
})


const AddProduct = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    return (
        <SheetContent side='right'>
            <ScrollArea className="h-screen">
                <SheetHeader>
                    <SheetTitle className='mb-4'>Add Product</SheetTitle>
                    <SheetDescription asChild>
                        <Form {...form}>
                            <form className="space-y-8">
                                {/* Product name */}
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Product Name</FormLabel>
                                            <FormControl>
                                                <Input type="text" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                This is the display name of the product.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {/* Short description */}
                                <FormField
                                    control={form.control}
                                    name="shortDescription"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Short Description</FormLabel>
                                            <FormControl>
                                                <Input type="text" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Enter a short description for product card.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {/* Full description */}
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full Description</FormLabel>
                                            <FormControl>
                                                <Textarea className='resize-none' {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Enter the full description of this product.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {/* Price */}
                                <FormField
                                    control={form.control}
                                    name="price"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Price</FormLabel>
                                            <FormControl>
                                                <Input type="number" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Enter the price of this product.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {/* Category */}
                                <FormField
                                    control={form.control}
                                    name="category"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Category</FormLabel>
                                            <FormControl>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a category" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {categories.map(cat => (
                                                            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormDescription>
                                                Select the product category.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {/* Sizes */}
                                <FormField
                                    control={form.control}
                                    name="sizes"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Sizes</FormLabel>
                                            <FormControl>
                                                <div className='grid grid-cols-3 gap-4 my-2'>
                                                    {sizes.map(size => (
                                                        <div key={size} className='flex items-center text-xs gap-2'>
                                                            <Checkbox
                                                                id={size}
                                                                checked={field.value?.includes(size)}
                                                                onCheckedChange={(checked) => {
                                                                    const currentValues = field.value || []
                                                                    if (checked) { field.onChange([...currentValues, size]) }
                                                                    else { field.onChange(currentValues.filter(v => v !== size)) }
                                                                }} />
                                                            <Label className='text-xs font-medium' htmlFor={size}>{size.toUpperCase()}</Label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </FormControl>
                                            <FormDescription>
                                                Select the available sizes.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {/* Colors */}
                                <FormField
                                    control={form.control}
                                    name="colors"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Colors</FormLabel>
                                            <FormControl>
                                                <div className='space-y-4'>
                                                    <div className='grid grid-cols-3 gap-4 my-2'>
                                                        {colors.map(color => (
                                                            <div key={color} className='flex items-center gap-2'>
                                                                <Checkbox
                                                                    id={color}
                                                                    checked={field.value?.includes(color)}
                                                                    onCheckedChange={(checked) => {
                                                                        const currentValues = field.value || []
                                                                        if (checked) { field.onChange([...currentValues, color]) }
                                                                        else { field.onChange(currentValues.filter(v => v !== color)) }
                                                                    }} />
                                                                <Label htmlFor={color} className='text-xs font-medium flex items-center gap-2'><div className='border rounded-full size-4' style={{ backgroundColor: color }} />{color}</Label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    {field.value && field.value.length > 0 && (
                                                        <div className='mt-8 space-y-4'>
                                                            <p className='text-sm font-medium'>Upload one image for each selected color.</p>
                                                            {field.value.map(color => (
                                                                <div key={color} className='flex items-center gap-2'>
                                                                    <div className='border rounded-full size-4' style={{ backgroundColor: color }} />
                                                                    {/* <span>{color}</span> */}
                                                                    <Input type="file" accept='image/*' />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </FormControl>
                                            <FormDescription>
                                                Select the available colors.
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
            </ScrollArea>
        </SheetContent>
    )
}

export default AddProduct