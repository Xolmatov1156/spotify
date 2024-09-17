import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import {BackIcon,
  BackIcon2,
  DownloadIcon,
  LikeIcon,
  MoreIcon,
  Order,
  PlayMusic,
  Search,
} from "../assets/Icons/Icons";
import SpotifyWebApi from "spotify-web-api-node";

function Playlist() {
  const location = useLocation();
  const { track } = location.state || {};
  const navigate = useNavigate();
  const [music, setMusic] = useState([]);
  const spotifyApi = new SpotifyWebApi();

  useEffect(() => {

  }, [])
  
  
  useEffect(() => {
    if (!track) return
    spotifyApi.searchTracks(track.artistName).then((res) => {
      setMusic(res.body.tracks.items);
    });
  }, [track]);
  
  console.log(music);
  return (
    <div className="flex text-white">
      <LeftSidebar />
      {track && track.trackName ? (
        <>
          <div className="flex-grow playlist w-[66%]">
            <div className="flex gap-[22px] h-[80px] items-center pl-[41px]">
              <button onClick={() => navigate(-1)}>
                <BackIcon />
              </button>
              <BackIcon2 />
            </div>
            <div className="flex items-center mt-4 pl-[41px]">
              <img
                src={track.img}
                alt={track.trackName}
                className="w-[297px] h-[297px] object-cover rounded-lg shadow-md"
              />
              <div className="ml-[20px]">
                <p className="mb-[25px]">PUBLIC PLAYLIST</p>
                <p className="text-[90px] leading-[90px] font-semibold">
                  {track.trackName}
                </p>
                <p className="text-[20px] mt-[20px]">{track.artistName}</p>
                <p className="mt-[10px]">
                  Made for davedirect3 34 songs, 2hr 01 min
                </p>
              </div>
            </div>
            <div className="mt-[50px] pl-[41px] pr-[43px] flex justify-between items-center">
              <div className="flex items-center space-x-[21px]">
                <PlayMusic />
                <LikeIcon />
                <DownloadIcon />
                <MoreIcon />
              </div>
              <div className="flex items-center">
                <Search />
                <div className="flex items-center pl-[32px] space-x-[14px]">
                  <p>Custom order</p>
                  <Order />
                </div>
              </div>
            </div>

            {/* Map through the music array */}
            <div className="pl-[41px] mt-[20px]">
              <h2 className="text-[24px] mb-[10px]">Related Tracks</h2>
              {music.map((song, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-[10px] bg-gray-800 p-[10px] rounded-lg"
                >
                  <div className="flex items-center space-x-[20px]">
                    <img
                      src={song.album.images[0]?.url}
                      alt={song.name}
                      className="w-[50px] h-[50px] object-cover rounded-md"
                    />
                    <div>
                      <p className="text-[16px] font-semibold">{song.name}</p>
                      <p className="text-[14px] text-gray-400">
                        {song.artists.map((artist) => artist.name).join(", ")}
                      </p>
                    </div>
                  </div>
                  <p>{(song.duration_ms / 60000).toFixed(2)} mins</p>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="flex-grow p-6">
          <p className="text-[24px] text-center">No track selected</p>
        </div>
      )}
      <RightSidebar />
    </div>
  );
}

export default Playlist;
