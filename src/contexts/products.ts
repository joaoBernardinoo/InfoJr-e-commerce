import React from "react";
import { Product
 } from "@/types/products";

interface ContextData {
    products: Product[];
    updateProducts: (id: number) => void;
}

const ProductContext = React.createContext<ContextData>({
    products: [],
    updateProducts: (id: number) => null
})

export const ProductProvider = ProductContext.Provider;

export default ProductContext;