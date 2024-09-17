import React from 'react'
import { UserAddIcon, UserInformation, XMark } from '../assets/Icons/Icons'

function RightSidebar() {
  return (
    <div className="h-screen w-[17%] bg-black pt-[30px]">
          <div className="text-[#CCCCCC] w-[208px] mx-auto">
            <div className="w-[208px] mx-auto flex justify-between">
              <h3>Friend Activity</h3>
              <div className="flex space-x-[16px] items-center cursor-pointer">
                <UserAddIcon />
                <XMark />
              </div>
            </div>
            <div className="text-[15px] w-[208px] mx-auto mt-[40px]">
              <p>Let friends and followers on Spotify listening to.</p>
            </div>
            <div className="flex flex-col mt-[23px] space-y-[20px] cursor-pointer">
              <UserInformation />
              <UserInformation />
              <UserInformation />
            </div>
            <p className="text-[15px] mt-[21px]">
              Go to Settings Social and enable “Share my listening activity on
              last many days time.
            </p>
            <button className="bg-white tracking-wider text-[black] w-[200px] mt-[23px] py-[20px] rounded-[40px]">
              SETTINGS
            </button>
          </div>
        </div>
  )
}

export default RightSidebar