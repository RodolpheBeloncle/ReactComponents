import React from 'react';


const CartGame = ({game}) => {
   
    return (
       

            <div className="bg-blue-400 border-8 rounded-xl shadow-md p-4 ">
                <img className="w-full"  

                    src={game.background_image} alt=""/>

                <div className="m-full h-32 sm:h-48 object-cover ">

                    <span className="font-bold">
                    {game.name}
                    </span>
 

                </div>

 

            </div>

            
        
    );
};

export default CartGame;