import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard, Like, Playlist } from '../pages';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import { useAuth } from '../hook/useAuth';
import Search from '../pages/Search';

function CustomRoutes({ code }) {
  const accessToken = useAuth(code)
  return (
    <main className='grid grid-cols-12'>
      <LeftSidebar/>
      <div className='col-span-8'>
        
      <Routes>
        <Route path="/" element={<Dashboard accessToken={accessToken} />} />
        <Route path="/playlist/:token/:name" element={<Playlist />} />
        <Route path="/search" element={<Search accessToken={accessToken} />} />
        <Route path="/like" element={<Like />} />
      </Routes>
      </div>
      <RightSidebar/>
    </main>
  );
}

export default CustomRoutes;
