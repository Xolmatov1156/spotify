import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";
import { CLIENT_ID } from "../hook/useEnv";
import PlayBack from "../components/PlayBack";
import { useDispatch, useSelector } from "react-redux";
import { addArray } from "../store/LikeSlice"; 
import {
  BackIcon,
  BackIcon2,
  DownloadIcon,
  LikeIcon,
  MoreIcon,
  PlaylistLike,
  PlayMusic,
  Time,
} from "../assets/Icons/Icons";
import toast, { Toaster } from "react-hot-toast";

function Playlist() {
  const dispatch = useDispatch();
  const likedArray = useSelector((state) => state.likedArray); 
  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
  });
  const { token, name } = useParams();
  const [tracks, setTracks] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [currentTrackUri, setCurrentTrackUri] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) spotifyApi.setAccessToken(token);
  }, [token]);

  useEffect(() => {
    if (token && name) {
      spotifyApi
        .searchTracks(name)
        .then((res) => setTracks(res.body.tracks.items))
        .catch((err) => console.error("Error fetching tracks:", err));
    }
  }, [token, name]);

  const handlePlayClick = (uri) => {
    setCurrentTrackUri(uri);
    setPlaying(true);
  };

  const handleLikeClick = (track) => {
    const isAlreadyLiked = likedArray.some(
      (likedTrack) => likedTrack.uri === track.uri
    );

    if (!isAlreadyLiked) {
      dispatch(addArray(track));
      toast.success('Successfully liked!')
    } else {
      toast.error('This track is already liked!')
    }
  };

  return (
    <div id="playlist" className="flex text-white">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="pb-[10px] h-screen overflow-y-auto overnone">
        <div className="flex gap-[22px] h-[80px] items-center pl-[35px]">
          <button onClick={() => navigate(-1)}>
            <BackIcon />
          </button>
          <button onClick={() => navigate(1)}>
            <BackIcon2 />
          </button>
        </div>

        <div className="flex items-center mt-4 pl-[35px]">
          <img
            src={JSON.parse(window.localStorage.getItem("imgSrc"))}
            width={297}
            alt="Playlist Cover"
          />
          <div className="ml-[20px]">
            <p className="mb-[25px]">PUBLIC PLAYLIST</p>
            <p className="text-[90px] leading-[90px] font-semibold">{name}</p>
            <p className="text-[20px] mt-[20px]">
              {tracks.length > 0 ? tracks[0].artists[0].name : "Unknown Artist"}
            </p>
            <p className="mt-[10px]">
              Made for davedirect3 34 songs, 2hr 01 min
            </p>
          </div>
        </div>

        <div className="mt-[50px] pl-[35px] pr-[43px] flex justify-between items-center">
          <div className="flex items-center space-x-[21px]">
            <button onClick={() => handlePlayClick(tracks[0]?.uri)}>
              <PlayMusic />
            </button>
            <LikeIcon />
            <DownloadIcon />
            <MoreIcon />
          </div>
        </div>

        <div className="pl-[40px] mt-[20px]">
          {tracks.length > 0 ? (
            <table className="w-full text-left table-auto cursor-pointer text-[#B3B3B3]">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="pb-[10px]">#</th>
                  <th className="pb-[10px]">IMG</th>
                  <th className="pb-[10px]">TITLE</th>
                  <th className="pb-[10px]">ALBUM</th>
                  <th className="pb-[10px] text-[12px] pr-[40px]">
                    DATE ADDED
                  </th>
                  <th className="pb-[10px] pr-[20px]">
                    <Time />
                  </th>
                </tr>
              </thead>
              <tbody>
                {tracks.map((track, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-700"
                    onClick={() => handlePlayClick(track.uri)}
                  >
                    <td className="py-[10px]">{index + 1}</td>
                    <td className="py-[10px]">
                      <img
                        src={track.album.images[0]?.url}
                        alt={track.name}
                        className="w-[50px] h-[50px] object-cover rounded-md"
                      />
                    </td>
                    <td className="py-[10px]">{track.name}</td>
                    <td className="py-[10px]">{track.album.name}</td>
                    <td className="py-[10px] flex mt-[13px] gap-[8px] items-center">
                      <button
                        onClick={() => handleLikeClick(track)}
                        className={
                          likedArray.some(
                            (likedTrack) => likedTrack.uri === track.uri
                          )
                            ? "text-green-500"
                            : ""
                        }
                      >
                        <PlaylistLike />
                      </button>
                      {new Date(track.album.release_date).toLocaleDateString()}
                    </td>
                    <td className="py-[10px]">
                      {(track.duration_ms / 60000).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No tracks found for this playlist</p>
          )}
        </div>
        <PlayBack
          play={currentTrackUri}
          playing={playing}
          setPlaying={setPlaying}
          accessToken={token}
        />
      </div>
    </div>
  );
}

export default Playlist;
