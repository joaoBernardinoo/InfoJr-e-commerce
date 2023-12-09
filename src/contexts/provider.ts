import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [array1, setArray1] = useState([]); // Array 1
  const [array2, setArray2] = useState([]); // Array 2
  const [array3, setArray3] = useState([]); // Array 3

  // Funções para atualizar os arrays
  const updateArray1 = (newArray) => setArray1(newArray);
  const updateArray2 = (newArray) => setArray2(newArray);
  const updateArray3 = (newArray) => setArray3(newArray);

  return (
    <GlobalContext.Provider value={{ 
      array1, updateArray1, 
      array2, updateArray2, 
      array3, updateArray3 
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
