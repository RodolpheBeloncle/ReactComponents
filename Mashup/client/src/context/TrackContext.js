import React,{useState,useEffect,createContext} from 'react';
import axios from "axios";

export const TrackContext = createContext()
const TrackContextProvider = ({children}) => {
    const [playingTrack, setPlayingTrack] = useState()
    const [lyrics, setLyrics] = useState("")
    const [userFavoritList, setUserFavoritList] = useState([])
    const [dropDownPlayList,setDropDownPlayList] = useState([])

    useEffect(() => {
        if (!playingTrack) return
    
        axios
          .get("http://localhost:3001/lyrics", {
            params: {
              track: playingTrack.title,
              artist: playingTrack.artist,
            },
          })
          .then(res => {
            setLyrics(res.data.lyrics)
    
        
          })
      }, [playingTrack])
    
      // choosen album
      console.log("choosen track",playingTrack)

    return (
        
       <TrackContext.Provider value={{
           playingTrack,
           setPlayingTrack,
           lyrics,
           setLyrics,
           userFavoritList,
           setUserFavoritList,
           dropDownPlayList,
           setDropDownPlayList

           }}>
            
            {children}

       </TrackContext.Provider>
    );
};

export default TrackContextProvider;