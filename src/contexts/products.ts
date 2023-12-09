import React from 'react';
import { Product } from '@/types/products';

interface ContextData {
  products: Product[];
  recent: Product[];
  cart: Product[];
  updateProductsArray: (products: Product[], id: number) => void;
}

const ProductContext = React.createContext<ContextData>({
  products: [],
  recent: [],
  cart: [],
  updateProductsArray: (products: Product[], id: number) => null,
});

export const ProductProvider = ProductContext.Provider;

export default ProductContext;
