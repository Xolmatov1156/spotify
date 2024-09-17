import React from 'react';
import { CLIENT_ID } from '../hook/useEnv';

function Login() {
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played`;

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#1DB954] to-[#191414]">
      <div className="text-center">
        <h1 className="text-white text-5xl font-bold mb-8 animate-bounce">Spotify Connect</h1>
        <a 
          href={AUTH_URL} 
          className="w-[250px] capitalize text-center bg-[#1DB954] p-4 rounded-full text-[20px] font-semibold text-white hover:bg-white hover:text-[#1DB954] border-2 border-transparent hover:border-[#1DB954] transition-all duration-300"
        >
          Login to Spotify
        </a>
      </div>
    </div>
  );
}

export default Login;
