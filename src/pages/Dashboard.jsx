import React, { useState } from "react";
import { Input } from "antd";
import TopMusic from "../components/TopMusic/TopMusic";

function Dashboard() {
  const [title, setTitle] = useState("");
  return (
    <>
    <div className="flex">
    <div className="h-[100vh] w-[20%] bg-black"></div>
    <div className="p-5 h-[100vh] w-[60%] bg">
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
    </div>
    <div className="h-[100vh] w-[20%] bg-black"></div>
    </div>
      </>
  );
}

export default Dashboard;
