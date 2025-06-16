import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  //   const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="font-sans bg-[#0D1117] text-[#EDEDED] h-screen w-screen overflow-x-hidden overflow-y-scroll no-scrollbar flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
