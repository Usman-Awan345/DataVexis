import React, { createContext } from "react";
import { blogs,  services} from "../assets/data";

// Pehle context ko define karo
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const value = {
   
    blogs,
    services,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
