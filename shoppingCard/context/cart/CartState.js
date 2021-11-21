import { useReducer,useState,useEffect } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "../Types";

const CartState = ({ children }) => {
// object to show and elementCard in cartItems
  const initalState = {
    showCart: false,
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);
  const [productsCard,setProductsCard] = useState([])
  const [query, setQuery] = useState("");



    useEffect(() => {
      (async () => {
        const result = await fetch(`https://fr.openfoodfacts.org/cgi/search.pl?search_simple=1&action=process&page_size=100&json=true`)
        const data = await result.json()
        setProductsCard(data.products)
        
      })()
    }, [])


    
  const filteredBySearchName = productsCard.filter(name => {
    return name.brands.toLowerCase().includes(query.toLowerCase())

  });


  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        
        addToCart,
        showHideCart,
        removeItem,
        productsCard,
        setProductsCard,
        query,
        setQuery,
        filteredBySearchName
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
