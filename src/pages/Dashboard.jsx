import React, { useState } from "react";
import { Input } from "antd";
import TopMusic from "../components/TopMusic/TopMusic";
import MadeMusic from "../components/MadeMusic/MadeMusic";

function Dashboard() {
  const [title, setTitle] = useState("");
  return (
    <>
    <div className="flex">
    <div className="h-[100vh] w-[17%] bg-black"></div>
    <div className="p-4 h-[100vh] w-[66%] bg overflow-y-auto">
      <Input
      value={title}
      placeholder="Search..."
      onChange={(e) => {
        setTitle(e.target.value);
        
      }}
      className="w-[200px]"
      size="large"
      />
      <TopMusic/>
      <MadeMusic/>
    </div>
    <div className="h-[100vh] w-[17%] bg-black"></div>
    </div>
      </>
  );
}

export default Dashboard;
