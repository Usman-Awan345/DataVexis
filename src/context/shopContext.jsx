import React, { createContext } from "react";
import { blogs, products } from "../assets/data";

// Pehle context ko define karo
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const value = {
    products,
    blogs,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
