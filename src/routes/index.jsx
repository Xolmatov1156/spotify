import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard, Playlist } from '../pages';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import { useAuth } from '../hook/useAuth';

function CustomRoutes({ code }) {
  const accessToken = useAuth(code)
  return (
    <>
      {/* <LeftSidebar /> */}
      <Routes>
        <Route path="/" element={<Dashboard accessToken={accessToken} />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
      {/* <RightSidebar /> */}
    </>
  );
}

export default CustomRoutes;
