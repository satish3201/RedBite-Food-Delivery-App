import { createContext, useEffect, useState } from "react"   
import { food_list } from "../assets/assets"

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems,setCartItem] = useState({});

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }
        else(
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        )
    }

    const RemoveFromCart = (itemId) => {
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }


  const getTotalCartAmount = () =>
  food_list.reduce((total, product) => {
    const quantity = cartItems[product._id] || 0;
    return total + product.price * quantity;
  }, 0);


    const ContextValue ={
        food_list,
        cartItems,
        setCartItem,
        addToCart,
        RemoveFromCart,
        getTotalCartAmount
    }
    return(
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider