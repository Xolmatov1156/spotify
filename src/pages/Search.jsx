import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import { CLIENT_ID } from '../hook/useEnv';

function Search({ accessToken }) {
  const [searchTitle, setSearchTitle] = useState('');
  const [tracks, setTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [artists, setArtists] = useState([]);

  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
  });

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken,searchTitle]);

  useEffect(() => {
    if (accessToken && searchTitle) {
      spotifyApi.searchTracks(searchTitle).then((res) => {
        setTracks(res.body.tracks.items);
      });

      spotifyApi.searchPlaylists(searchTitle).then((res) => {
        setPlaylists(res.body.playlists.items);
      });

      spotifyApi.searchArtists(searchTitle).then((res) => {
        setArtists(res.body.artists.items);
      });
    }
  }, [accessToken, searchTitle]);

  return (
    <div className='flex flex-col overflow-y-auto search overnone text-white h-screen'>
      <div className='w-full p-6'>
        <div className='mb-6'>
          <input
            type="text"
            className="w-full p-4 text-lg rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Search for tracks, playlists, or artists..."
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </div>

        <div className='mb-6'>
          <h2 className='text-2xl font-semibold mb-4'>Tracks</h2>
          <div className='flex gap-3 overflow-x-auto'>
            {tracks.map(track => (
              <div
                key={track.id}
                className="min-w-[220px] h-[324px] card p-[20px] rounded-[8px] bg-gray-800 hover:bg-gray-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <img 
                  src={track.album.images[0]?.url} 
                  alt={track.name} 
                  className='rounded-[8px] w-[182px] h-[182px] object-cover' 
                />
                <div className="mt-[25px]">
                  <strong className="text-white line-clamp-1 font-medium text-[20px]">
                    {track.name}
                  </strong>
                </div>
                <p className="text-[#B3B3B3] text-[18px]">{track.artists[0].name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='mb-6'>
          <h2 className='text-2xl font-semibold mb-4'>Playlists</h2>
          <div className='flex gap-3 overflow-x-auto'>
            {playlists.map(playlist => (
              <div
                key={playlist.id}
                className="min-w-[220px] h-[324px] card p-[20px] rounded-[8px] bg-gray-800 hover:bg-gray-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <img 
                  src={playlist.images[0]?.url || 'https://via.placeholder.com/150'} 
                  alt={playlist.name} 
                  className='rounded-[8px] w-[182px] h-[182px] object-cover' 
                />
                <div className="mt-[25px]">
                  <strong className="text-white line-clamp-1 font-medium text-[20px]">
                    {playlist.name}
                  </strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className='text-2xl font-semibold mb-4'>Artists</h2>
          <div className='flex gap-3 overflow-x-auto'>
            {artists.map(artist => (
              <div
                key={artist.id}
                className="min-w-[220px] h-[324px] card p-[20px] rounded-[8px] bg-gray-800 hover:bg-gray-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <img 
                  src={artist.images[0]?.url || 'https://via.placeholder.com/150'} 
                  alt={artist.name} 
                  className='rounded-[8px] w-[182px] h-[182px] object-cover' 
                />
                <div className="mt-[25px]">
                  <strong className="text-white line-clamp-1 font-medium text-[20px]">
                    {artist.name}
                  </strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
