// get back data in local Storage
// record data with game here =>
export const Storage = (cartItems)=> {
    localStorage.setItem('cart',JSON.stringify(cartItems.length > 0 ? cartItems : [] ))
   

}


export const CartGameReducer = (state, action) => {
    switch (action.type) {


        case "ADD_GAME": {
            return {
              ...state,
              ...Storage(...state.cartItems, action.payload),
              cartItems: [...state.cartItems, action.payload],
            };
          }

        case "REMOVE_GAME":
            return {
                ...state,
                ...Storage(state.cartItems.filter(item => item.id !== action.payload.id)),
                cartItems: [...state.cartItems.filter(item => item.id !== action.payload.id)]

               
            };

       
            
    
        default:
            return state

    }
}