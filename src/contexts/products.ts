import React from "react";
import { Product
 } from "@/types/products";

interface ContextData {
    products: Product[];
    recent: Product[];
    cart: Product[];
    updateProducts: (id: number) => void;
}

const ProductContext = React.createContext<ContextData>({
    products: [],
    recent: [],
    cart: [],
    updateProducts: (id: number) => null
})

export const ProductProvider = ProductContext.Provider;

export default ProductContext;