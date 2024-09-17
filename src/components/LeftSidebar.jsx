import React from 'react'
import { NavLink } from 'react-router-dom'
import { CreateIcon, HomeIcon, LibraryIcon, LikedIcon, SearchIcon } from '../assets/Icons/Icons'

function LeftSidebar() {
  return (
    <div className="h-screen col-span-2 bg-black overflow-y-auto overnone">
          <div className="">
            <div className="pt-[70px] pl-[30px] flex flex-col space-y-[20px]">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center text-white space-x-[20px]"
                    : "flex items-center text-[#B3B3B3] space-x-[20px]"
                }
              >
                <HomeIcon />
                <p className="text-[18px]">Home</p>
              </NavLink>
              <NavLink to={"/search"} className={({ isActive }) =>
                  isActive
                    ? "flex items-center text-white space-x-[20px]"
                    : "flex items-center text-[#B3B3B3] space-x-[20px]"
                }>
                <SearchIcon />
                <p className="text-[18px]">Search</p>
              </NavLink>
              <button className="flex items-center space-x-[20px]">
                <LibraryIcon />
                <p className="text-[18px] text-[#B3B3B3]">Your Library</p>
              </button>
              <button className="flex items-center space-x-[20px] pt-[30px]">
                <CreateIcon />
                <p className="text-[18px] text-[#B3B3B3]">Create Playlist</p>
              </button>
              <NavLink
                to={"/like"}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center text-white space-x-[20px]"
                    : "flex items-center text-[#B3B3B3] space-x-[20px]"
                }
              >
                <LikedIcon />
                <p className="text-[18px]">Liked Songs</p>
              </NavLink>
              <div className="mt-[20px] bg-[#282828] w-[180px] h-[1px]"></div>
            </div>
            <div className="my-[22px] pl-[30px] flex flex-col space-y-[18px] text-[#B3B3B3]">
              <p className="text-[18px] font-bold cursor-pointer">Chill Mix</p>
              <p className="text-[18px] font-bold cursor-pointer">Insta Hits</p>
              <p className="text-[18px] font-bold cursor-pointer">
                Your Top Songs 2021
              </p>
              <p className="text-[18px] font-bold cursor-pointer">
                Mellow Songs
              </p>
              <p className="text-[17px] font-bold cursor-pointer">
                Anime Lofi & Chillhop
              </p>
              <p className="text-[18px] font-bold cursor-pointer">
                BG Afro “Select” Vibes
              </p>
              <p className="text-[18px] font-bold cursor-pointer">
                Afro “Select” Vibes
              </p>
              <p className="text-[18px] font-bold cursor-pointer">
                Happy Hits!
              </p>
              <p className="text-[18px] font-bold cursor-pointer">Deep Focus</p>
              <p className="text-[18px] font-bold cursor-pointer">
                Instrumental Study
              </p>
              <p className="text-[18px] font-bold cursor-pointer">
                OST Compilations
              </p>
              <p className="text-[17px] font-bold cursor-pointer">
                Nostalgia for old souled
              </p>
              <p className="text-[18px] font-bold cursor-pointer">
                Mixed Feelings
              </p>
            </div>
          </div>
        </div>
  )
}

export default LeftSidebar