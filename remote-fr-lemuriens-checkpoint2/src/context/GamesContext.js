import React,{useState,useEffect, createContext} from 'react';
import axios from 'axios';


export const GamesContext = createContext()

const GamesContextProvider = ({children}) => {
    const [dataGames,setDataGames]= useState([])
    
   
   
    useEffect(() => {

        (async () => {

       
        try {
           const response = await axios.get("https://apis.wilders.dev/wild-games/games")
           const getData = await response.data
           setDataGames(getData)
           


        } 
        catch(error){
            console.log(error)
        }
        })()
       
        
    },[])
    
    
 

    return (

       
        <GamesContext.Provider value={{
            dataGames,
            setDataGames,}}>

            {children}

        </GamesContext.Provider>
            
       
    );
};

export default GamesContextProvider