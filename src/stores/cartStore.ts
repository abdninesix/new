import { CartStoreActionsType, CartStoreStateType } from '@/types'
import { create } from 'zustand'
import { persist, createJSONStorage } from "zustand/middleware"

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
    persist(
        (set) => ({
            cart: [],

            hasHydrated: false, // We used hydration in cart icon so it doesn't render the cart icon if it's not hydrated

            // addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })), //Adds the same item to cart multiple times and gives errors
            addToCart: (product) => set((state) => {
                const existingIndex = state.cart.findIndex(p => p.id === product.id && p.selectedSize === product.selectedSize && p.selectedColor === product.selectedColor)
                if (existingIndex !== -1) {
                    const updatedCart = [...state.cart]
                    updatedCart[existingIndex].quantity += product.quantity
                    return { cart: updatedCart }
                }
                return { cart: [...state.cart, {
                    ...product,
                    quantity: product.quantity || 1,
                    selectedSize: product.selectedSize,
                    selectedColor: product.selectedColor,
                }] }
            }), //Checks whether similar item exists and updates the quantity

            // removeFromCart: (product) => set((state) => ({ cart: state.cart.filter(p => p.id !== product.id) })), //Removes multiple instances of the same item
            removeFromCart: (product) => set((state) => (
                { cart: state.cart.filter(p => !(p.id === product.id && p.selectedSize === product.selectedSize && p.selectedColor === product.selectedColor)) }
            )), //Removes only the specific instance of the same item
            
            clearCart: () => set({ cart: [] }),
        }),
        { name: "cart", storage: createJSONStorage(() => localStorage), onRehydrateStorage: ()=>(state)=>{
            if(state){
                state.hasHydrated = true
            }
        } }
    )
);

export default useCartStore;