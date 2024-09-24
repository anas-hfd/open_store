import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return {success: false, message: "Please fill all fields"};
        }
        // the prefix http://localhost:5000 is already set in vite.config.js
        const resp = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        }) 
        const data = await resp.json();
        set((state) => ({ products: [...state.products, data.data] })); // the product controller is set also as data in the response so data.data is the product
        return {success: true, message: "Product added successfully"};
    },
}));

