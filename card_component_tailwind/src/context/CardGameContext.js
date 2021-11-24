import React, { createContext, useReducer } from 'react';
import { Storage,CartGameReducer } from './CartReducer';


// Create Shopping list context
export const CartGameContext = createContext()

// Create Shopping List Array in local storage
const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

// create cardContext by getting data recorded before in localstorage
const initialState = {cartItems: storage, ...Storage(storage)};

const CartGameContextProvider = ({children}) => {

    const [state, dispatch] = useReducer( CartGameReducer, initialState)

    

    const addGame = payload => {
        dispatch({type: 'ADD_GAME', payload})
        console.log("addegame")
    }

    const removeGame = payload => {
        dispatch({type: 'REMOVE_GAME', payload})
        console.log("removegame")
    }

 
   

    const contextValues = {
        addGame,
        removeGame,
       
        ...state
    } 

    return ( 
        <CartGameContext.Provider value={contextValues} >
            { children }
        </CartGameContext.Provider>
     );
}
 
export default CartGameContextProvider;
