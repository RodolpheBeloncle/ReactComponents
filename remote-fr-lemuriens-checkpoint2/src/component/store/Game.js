import React,{useState} from 'react';
import StarRange from './StarRange';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useCart} from '../../hooks/useCart';



const Game = ({details}) => {

    const { addGame,cartItems,removeGame} = useCart();

    // Check If game is in the shopping List

    const isInCart = details => {
        return !!cartItems.find(item => item.id === details.id);
    }

    const [favoriteColor,setFavoriteColor] = useState("text-white")// text-red-600

    const handleClickFavorite = () => {
        setFavoriteColor(favoriteColor === "text-white" ? "text-red-600" : "text-white");
      };

    return (
        //  == Card game ==
        <li className="max-w-xs h-64 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4">
            <img className="w-full"  
            src={details.background_image} alt=""/>
            <div className="m-full h-32 sm:h-48 object-cover ">

                <span className="font-bold">
                {details.name}
                </span>

                <div className=" flex flex-col justify-center block text-gray-500 text-sm  px-1">
                rating 
                <StarRange gameValue={details.rating}/>
                </div>
                
                {
                    isInCart(details) && 
                    <FavoriteIcon
                        className={favoriteColor}
                        onClick={()=> {
                            removeGame(details);
                            handleClickFavorite();}} 
                     
                    />
                }

                {
                    !isInCart(details) && 
                    <FavoriteIcon
                        className={favoriteColor}
                        onClick={()=> {
                            addGame(details);
                            handleClickFavorite();
                            
                            }} 
                     
                    />
                }
              

                

                
              
                
            </div>
        </li>
    );
};

export default Game;