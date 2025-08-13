import z from "zod";

// Types for products
export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes: string[];
    colors: string[];
    images: Record<string, string>;
};

export type ProductsType = ProductType[];

// Types for cart
export type CartItemType = ProductType & {
    quantity: number;
    selectedSize: string;
    selectedColor: string;
};

export type CartItemsType = CartItemType[];

// Schema for shipping form using zod
export const shippingFormSchema = z.object({
name: z.string().min(1, "Name is required"),
email: z.string().min(1, "Email is required"),
phone: z.string().min(7, "Phone number must be 7-10 digits").max(10, "Phone number must be 7-10 digits").regex(/^\d+$/, "Phone number must contain numbers only"),
address: z.string().min(1, "Address is required"),
city: z.string().min(1, "City is required")
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;