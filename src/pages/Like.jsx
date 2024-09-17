import React from 'react';
import { BackIcon, BackIcon2 } from '../assets/Icons/Icons';
import Like from '../assets/Like.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function LikePage() {
  const navigate = useNavigate();
  const likedArray = useSelector(state => state.likedArray);

  return (
    <div className='likebg h-screen overflow-y-auto overnone'>
      {/* Header Section */}
      <div className="flex gap-[22px] h-[80px] items-center pl-[35px] cursor-pointer">
        <button onClick={() => navigate(-1)}>
          <BackIcon />
        </button>
        <button onClick={() => navigate(1)}>
          <BackIcon2 />
        </button>
      </div>

      {/* Playlist Header */}
      <div className="flex items-center mt-4 pl-[35px] text-white">
        <img
          src={Like}
          width={297}
          alt="Liked Songs Cover"
        />
        <div className="ml-[20px]">
          <p className="mb-[25px]">PUBLIC PLAYLIST</p>
          <p className="text-[90px] leading-[90px] font-semibold">Liked Songs</p>
          <p className="mt-[10px]">
            davedirect3 {likedArray.length} songs
          </p>
        </div>
      </div>

      {/* Liked Songs Table */}
      <div className="pl-[35px] mt-6 pr-[35px]">
        {likedArray.length > 0 ? (
          <table className="w-full text-left table-auto cursor-pointer text-[#B3B3B3]">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="pb-[10px]">#</th>
                <th className="pb-[10px]">IMG</th>
                <th className="pb-[10px]">TITLE</th>
                <th className="pb-[10px]">ALBUM</th>
                <th className="pb-[10px] text-[12px] pr-[40px]">ARTIST</th>
                <th className="pb-[10px] text-[12px] pr-[40px]">DATE ADDED</th>
                <th className="pb-[10px] pr-[20px]">DURATION</th>
              </tr>
            </thead>
            <tbody>
              {likedArray.map((song, index) => (
                <tr key={song.id} className="border-b border-gray-700">
                  <td className="py-[10px]">{index + 1}</td>
                  <td className="py-[10px]">
                    <img
                      src={song.album.images[0]?.url}
                      alt={song.name}
                      className="w-[50px] h-[50px] object-cover rounded-md"
                    />
                  </td>
                  <td className="py-[10px]">{song.name}</td>
                  <td className="py-[10px]">{song.album.name}</td>
                  <td className="py-[10px]">{song.artists.map(artist => artist.name).join(", ")}</td>
                  <td className="py-[10px]">{new Date(song.album.release_date).toLocaleDateString()}</td>
                  <td className="py-[10px]">{(song.duration_ms / 60000).toFixed(2)} min</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className='text-white'>No liked songs available</p>
        )}
      </div>
    </div>
  );
}

export default LikePage;
