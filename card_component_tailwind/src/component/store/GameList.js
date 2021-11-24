import {useState,useEffect} from 'react';
import React from 'react';
// import { GamesContext } from '../../Context/GamesContext';
import Game from './Game';
import axios from 'axios';

import { useProducts } from '../../hooks/useProducts'


const GameList = () => {
   const initialState = {
       unFiltered:"Unfiltered"
   }
   const newState = {
       filtered:"Filtered"


   }
    const {dataGames,setDataGames} = useProducts();
    const [isFiltered,setIsFiltered] = useState(false)
    const [filterTitle,setFilterTitle] = useState(initialState.unFiltered)

    useEffect(()=> {
        handleFilter()
        getGame()


    },[])

        const handleFilter = () => {
                !isFiltered &&
                setDataGames(dataGames.filter(game=> game.rating >= 4))
                
            
        }

  
        const getGame = () => {
            isFiltered &&
            axios.get("https://apis.wilders.dev/wild-games/games")
            .then(response => setDataGames(response.data))
            
        }

    
    return (
        <>
        <div className="text-center container my-12 mx-auto bg-green-100 rounded-xl">
        <h1 className="font-mono p-4">{dataGames.length} Games Available</h1>
        <p className="font-mono p-4">{filterTitle}</p>

        <button 
                type="button" 
                value={isFiltered}
                className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-300 hover:shadow-lg"
                onClick={()=>{
                    setIsFiltered(!isFiltered)
                    handleFilter()
                    getGame()

                    setFilterTitle(()=> !isFiltered ? newState.filtered : initialState.unFiltered)

             
                }}
                > Filter Button

                
                
                </button>
            </div>

        <ul className= "p-1 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

        {dataGames.map((game)=> 
            <Game key={game.id} details={game}/>


        )}
         
        </ul>
        </>
    );
};

export default GameList;