import React from 'react';


const CartGame = ({game}) => {
   
    return (
       

            <div className="flex-col  w-30 mt-10 m-auto py-1 px-2 lg:mt-16 max-w-sm bg-white dark:bg-gray-800 rounded-xl border border-gray-400 mb-6  m-5 shadow-2xl">
                
                <div>
                    <img className="w-full rounded-xl"  
                    src={game.background_image} alt=""/>
                </div>

                <div className="flex-initial text-center m-full h-32 sm:h-48 object-cover ">

                    <span className="font-bold ">
                    {game.name}
                    </span>
 

                </div>

 

            </div>

            
        
    );
};

export default CartGame;