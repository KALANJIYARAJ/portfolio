import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);
  return (
    <UserContext.Provider value={{pizzas, setPizzas,cartItems,setCartItems,items,setItems }}>
      {children}
    </UserContext.Provider>
  );
};