import React from 'react'
import {CLIENT_ID} from '../hook/useEnv'
function Login() {
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played`
  return (
    <div className='flex items-center justify-center h-screen'>
      <a href={AUTH_URL} className='w-[200px] capitalize text-center bg-green-500 p-2 rounded-md hover:opacity-50 duration-300 text-[20px] font-medium text-white'>login to spotify</a>
    </div>
  )
}

export default Login