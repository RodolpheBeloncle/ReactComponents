import React,{useState} from 'react';
import StarRange from './StarRange';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useCart} from '../../hooks/useCart';



const Game = ({details}) => {

    const { addGame,cartItems,removeGame} = useCart();
    const [favoriteColor,setFavoriteColor] = useState("text-gray-200")


    // Check If game is in the shopping List

    const isInCart = details => {
        return !!cartItems.find(item => item.id === details.id);
    }

  
    const handleClickFavorite = () => {
        setFavoriteColor(favoriteColor === "text-gray-200" ? "text-red-200" : "text-gray-200");
      };

    return (
        //  == Card game ==
        <li className="justify-center max-w-xs h-64 flex flex-col  bg-white dark:bg-gray-800 rounded-xl border border-gray-400 mb-6  m-5">
            <div>
                <img className="h-48 w-full object-cover md:h-full md:w-48 rounded-xl"  
                src={details.background_image} alt=""/>
            </div>
            <div className="m-full sm:h-48 object-cover ">
                <span className="font-bold ">
                {details.name}
                </span>
               
               <div>
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
                
                <div className="flex flex-col justify-center block  text-sm  px-1  w-24  md:w-auto text-gray-500">
              
                Rating 
                <StarRange className="mx-8 " gameValue={details.rating}/>
                </div>
                
                </div>
             
           
        </li>
    );
};

export default Game;