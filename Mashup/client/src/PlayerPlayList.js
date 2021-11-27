import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { TrackContext} from "./context/TrackContext";
import { useContext } from "react";


export default function PlayerPlayList({ accessToken }) {
  const [play, setPlay] = useState(false);
  const {userFavoritList, setUserFavoritList} = useContext(TrackContext)


  useEffect(() => setPlay(true), [userFavoritList.uri]);

  if (!accessToken) return null
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      callback={state => {
        if (!state.isPlaying) setPlay(false)
      }}
      play={play}
      uris={userFavoritList.uri ? [userFavoritList.uri] : []}
    />
  )
}