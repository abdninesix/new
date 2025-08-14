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

// Schema for payment form using zod
export const paymentFormSchema = z.object({
    cardHolder: z.string().min(1, "Card holder name is required"),
    cardNumber: z.string().min(16, "Card number is required").max(16, "Card number is required"),
    expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiration date must be in MM/YY"),
    cvv: z.string().min(3, "CVV is required").max(3, "CVV is required"),
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;

// Schema for cart state
export type CartStoreStateType = {
    cart: CartItemsType;
    hasHydrated: boolean;
};

// Schema for cart actions
export type CartStoreActionsType = {
    addToCart: (product: CartItemType) => void;
    removeFromCart: (product: CartItemType) => void;
    clearCart: () => void;
}
