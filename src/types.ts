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