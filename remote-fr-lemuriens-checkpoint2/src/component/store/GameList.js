import {useState,useEffect} from 'react';
import React from 'react';
// import { GamesContext } from '../../Context/GamesContext';
import Game from './Game';
import axios from 'axios';

import { useProducts } from '../../hooks/useProducts'


const GameList = () => {
   const initialState = {
       unFiltered:"unfiltered"
   }
   const newState = {
       filtered:"filtered"


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
        <h1>{dataGames.length} Games Available</h1>
        <p>{filterTitle}</p>

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

        <ul className= "grid grid-cols-1 md:grid-cols-6">

        {dataGames.map((game)=> 
            <Game key={game.id} details={game}/>


        )}
         
        </ul>
        </>
    );
};

export default GameList;