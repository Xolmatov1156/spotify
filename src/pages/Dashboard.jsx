import React, { useEffect, useState } from "react";
import TopMusic from "../components/TopMusic";
import SpotifyWebApi from "spotify-web-api-node";
import { CLIENT_ID } from "../hook/useEnv";
import { useNavigate } from 'react-router-dom';
import { BackIcon, BackIcon2 } from "../assets/Icons/Icons";
import PlayBack from "../components/PlayBack";

function Dashboard({ accessToken }) {
  const spotifyApi = new SpotifyWebApi({ clientId: CLIENT_ID });
  const [topMixes, setTopMixes] = useState([]);
  const [madeForYou, setMadeForYou] = useState([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [jumpBackIn, setJumpBackIn] = useState([]);
  const [uniquelyYours, setUniquelyYours] = useState([]);
  const [currentTrackUri, setCurrentTrackUri] = useState(null);
  const [playing, setPlaying] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);

    spotifyApi.searchTracks("Your top mixes").then((res) => {
      setTopMixes(res.body.tracks.items.slice(0, 1));
    });

    spotifyApi.searchTracks("Made for you").then((res) => {
      setMadeForYou(res.body.tracks.items.slice(0, 1));
    });

    spotifyApi.searchTracks("Recently played").then((res) => {
      setRecentlyPlayed(res.body.tracks.items.slice(0, 1));
    });

    spotifyApi.searchTracks("Jump back in").then((res) => {
      setJumpBackIn(res.body.tracks.items.slice(0, 1));
    });

    spotifyApi.searchTracks("Uniquely yours").then((res) => {
      setUniquelyYours(res.body.tracks.items.slice(0, 2));
    });
  }, [accessToken]);

  const allTracks = [
    ...topMixes,
    ...madeForYou,
    ...recentlyPlayed,
    ...jumpBackIn,
    ...uniquelyYours,
  ];

  return (
    <>
      <div className="flex">
        <div className="pl-[35px] h-[100vh] bg overflow-y-auto overnone">
          <div className="flex gap-[22px] items-center h-[80px]">
            <button onClick={() => navigate(-1)}>
            <BackIcon />
            </button>
            <button onClick={() => navigate(1)}>
              <BackIcon2 />
            </button>
          </div>
          <h1 className="text-white text-[40px] font-bold mt-[50px]">
            Good Afternoon
          </h1>
          <div className="flex flex-wrap gap-4 mt-[29px]">
            {allTracks.map((track, index) => (
              <div
                key={index}
                onClick={() => {
                  setCurrentTrackUri(track.uri);
                  setPlaying(true);
                }}
                className="w-[450px] h-[82px] card rounded-[8px] flex items-center bg-gray-800 hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
              >
                <img
                  src={track.album.images[0]?.url}
                  alt={track.name}
                  className="w-[82px] h-[82px] rounded-tl-[8px] rounded-bl-[8px]"
                />
                <p className="text-white text-[20px] font-semibold ml-[20px]">
                  {track.name}
                </p>
              </div>
            ))}
          </div>

          {/* Other TopMusic sections */}
          <div className="mt-[50px]">
            <TopMusic
              accessToken={accessToken}
              parTitle={"Your top mixes"}
              searchText={"Your top mixes"}
            />
          </div>
          <TopMusic
            accessToken={accessToken}
            parTitle={"Made for you"}
            searchText={"Made for you"}
          />
          <TopMusic
            accessToken={accessToken}
            parTitle={"Recently played"}
            searchText={"Recently played"}
          />
          <TopMusic
            accessToken={accessToken}
            parTitle={"Jump back in"}
            searchText={"Jump back in"}
          />
          <TopMusic
            accessToken={accessToken}
            parTitle={"Uniquely yours"}
            searchText={"Uniquely yours"}
          />
      <PlayBack
        play={currentTrackUri} // Pass the current track's URI
        playing={playing}
        setPlaying={setPlaying}
        accessToken={accessToken}
      />
        </div>
      </div>

    </>
  );
}

export default Dashboard;
