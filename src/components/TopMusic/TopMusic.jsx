import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/CodeContext';
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
    spotifyApi.searchTracks("G'aybulla Tursunov").then(res => {
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
  console.log(tracks);
  
  return (
    <div className='flex gap-3 overflow-x-auto py-3'>
      {tracks.map((track,index) => (
        <div key={index} className='min-w-[224px] h-[324px] card p-[20px] rounded-[8px] bg-white'>
          <img src={track.img} alt="the music" className='rounded-[8px] w-[182px] h-[182px]'/>
          <div className='mt-[25px]'><strong className='text-white line-clamp-1 font-medium mt-[25px] text-[20px]'>{track.trackName}</strong></div>
          <p className='text-[#B3B3B3] text-[18px]'>{track.artistName}</p>
        </div>
      ))}
    </div>
  )
}

export default TopMusic