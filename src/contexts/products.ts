import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState(/* seu estado inicial aqui */);

  const updateGlobalState = (newState) => {
    setGlobalState((prevState) => ({ ...prevState, ...newState }));
  };

  return (
    <GlobalContext.Provider value={{ globalState, updateGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};


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