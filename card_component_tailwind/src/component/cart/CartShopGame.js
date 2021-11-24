import React from 'react';
import CartGame from './CartGame';
import { useCart } from '../../hooks/useCart';


const CartShopGame = () => {
    const {cartItems} = useCart();
  
    return (
        <div className="grid grid-cols-1">
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