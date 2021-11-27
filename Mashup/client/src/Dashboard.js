import { useState, useEffect,useContext } from "react"
import useAuth from "./useAuth"
import Player from "./Player"
import TrackSearchResult from "./TrackSearchResult"
import { Container, Form } from "react-bootstrap"
import SpotifyWebApi from "spotify-web-api-node"
import {TrackContext} from "./context/TrackContext";
// import axios from "axios"
import axios from "axios"
import { Header } from "./components/header/Header"
import Playlist from "./PlayList";
import "./app.css";
import "./dasboard.css"




const spotifyApi = new SpotifyWebApi({
  clientId: "e48a09962c39496da4a072ca196590e4",
})

export default function Dashboard({ code }) {
  const accessToken = useAuth(code)
  const [search, setSearch] = useState("")
  const [playlistIsOn, setPLaylistIsOn] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [isLiked,setIsLike] = useState(false)
  const {playingTrack, setPlayingTrack,lyrics,setLyrics,userFavoritList, setUserFavoritList,dropDownPlaylist,setDropDownPlayList} = useContext(TrackContext)
  


  function chooseTrack(track) {
    setPlayingTrack(track)
    setSearch("")
    setLyrics("")
  }
 
 
  const handleClick = (track) =>{
   
      setUserFavoritList((prevList) => [...prevList, track.uri]);
      setDropDownPlayList((prevList) => [...prevList, track])
  }




  console.log("userFavoriteList",userFavoritList)
  console.log("isLiked?", isLiked)
  console.log("playingtrack",playingTrack)

  const handleFavoritePlayList = () => {
    setPLaylistIsOn(!playlistIsOn)
  }

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
  
  // choosen onclicked image album
  console.log("choosen onclicked image album",playingTrack)

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return

    let cancel = false
    spotifyApi.searchTracks(search).then(res => {
       // ===  Track Album from search bar ===
      if (cancel) return
      setSearchResults(
        res.body.tracks.items.map(track => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image
              return smallest
            },
            track.album.images[0]
          )
          // data object
          console.log("track artists search bar",track.artists[0].name)
          console.log("title ",track.name)
          console.log("artiste vinil",track.uri)
          console.log("album img url", smallestAlbumImage.url)

          return {
           
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          }
        }) 
      )    
    })


    return () => (cancel = true)
  }, [search, accessToken])


  return (
    <div className="container__playlist">
      <Header />
      <Form.Control
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
        {searchResults.map((track) => (
          <TrackSearchResult
            track={track}
            key={track}
            chooseTrack={chooseTrack}
            handleClick={()=>{handleClick(track)}}
            
            
          />
        ))}
      
        {console.log("result from search",searchResults)}


        {searchResults.length === 0 && (
          <div className="text-center" style={{ whiteSpace: "pre" }}>
            {lyrics}
          </div>
        )}
      </div>
      <button className="btn-warning btn-lg " onClick={handleFavoritePlayList}>Afficher playlist</button>
      {playlistIsOn ? <Playlist /> : null}
      <div>
        <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
      </div>
    </div>
  )
}
