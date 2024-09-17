import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-node';
import { CLIENT_ID } from '../hook/useEnv';

function TopMusic({ parTitle, searchText, accessToken }) {
  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
  });

  const [tracks, setTracks] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      spotifyApi.searchTracks(searchText).then((res) => {
        setTracks(
          res.body.tracks.items.map((item) => {
            const data = {
              img: item.album.images[0].url,
              artistName: item.artists[0].name,
              trackName: item.name,
              uri: item.uri,
            };
            return data;
          })
        );
      });
    }
  }, [accessToken, searchText]);

  const visibleTracks = showAll ? tracks : tracks.slice(0, 4);

  const handleTrackClick = (track) => {
    navigate('/playlist', { state: { track } });
  };
  
  

  return (
    <div className="p-2 mb-[50px]">
      <div className="flex justify-between">
        <h2 className="font-bold text-white mb-[26px] text-[20px]">
          {parTitle}
        </h2>
        <p
          className="text-[#ADADAD] tracking-wide text-[16px] cursor-pointer"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'SHOW LESS' : 'SEE ALL'}
        </p>
      </div>
      <div className="flex gap-3 overflow-x-auto">
        {visibleTracks.map((track, index) => (
          <div
            key={index}
            onClick={() => {
              handleTrackClick(track)
              
            }}
            className="min-w-[220px] h-[324px] card p-[20px] rounded-[8px] bg-gray-800 hover:bg-gray-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <img
              src={track.img}
              alt="the music"
              className="rounded-[8px] w-[182px] h-[182px]"
            />
            <div className="mt-[25px]">
              <strong className="text-white line-clamp-1 font-medium mt-[25px] text-[20px]">
                {track.trackName}
              </strong>
            </div>
            <p className="text-[#B3B3B3] text-[18px]">{track.artistName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopMusic;
