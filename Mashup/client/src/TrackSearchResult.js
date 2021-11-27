import React, {useState} from "react"
import "./dasboard.css"

export default function TrackSearchResult({ track, chooseTrack, handleClick }) {
  

  function handlePlay() {
    chooseTrack(track)
    
  }
  
  return (
    <div className="container__search">

    <div
      className="d-flex ml-5 align-items-center "
      style={{ cursor: "pointer" }}
    >
      <img onClick={handlePlay} src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
      <div className="ml-5">
        <div>{track.title}</div>
        <div className="text-muted">{track.artist}</div>
        <button className="btn-warning btn-sm"
         onClick={handleClick}
         >Ajouter a la playlist</button>
      </div>
    </div>
    </div>
  )
}
