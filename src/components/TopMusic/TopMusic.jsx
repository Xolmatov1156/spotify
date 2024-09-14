import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/Context';
import { useAuth } from '../../hook/useAuth';
import SpotifyWebApi from 'spotify-web-api-node';
import { CLIENT_ID } from '../../hook/useEnv';

function TopMusic() {
  const spotifyApi = new SpotifyWebApi({
    clientId:CLIENT_ID
  });
  const {code} = useContext(Context)
  const accessToken = useAuth(code);
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken)
  },[ accessToken])

  const [tracks,setTracks] = useState([])
  useEffect(() => {
      spotifyApi.searchTracks('Ummon').then(res => {
        setTracks(res.body.tracks.items.map(track => {
          const data = {
            img:track.album.images[0].url,
            artistName:track.artists[0].name,
            trackName:track.name,
            uri:track.artists[0]
          }
          return data
        }))
      })
  }, [accessToken]);
  return (
    <div>TopMusic</div>
  )
}

export default TopMusic