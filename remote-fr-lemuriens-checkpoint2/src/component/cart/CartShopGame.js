import React from 'react';
import CartGame from './CartGame';
import { useCart } from '../../hooks/useCart';


const CartShopGame = () => {
    const {cartItems} = useCart();
  
    return (
        <div>
            {
                cartItems.map(game=> 
                    <CartGame
                    key={game.id}
                    game={game}
                    />
                )
            }
            
        </div>
    );
};

export default CartShopGame;