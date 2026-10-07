import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-black">
      <Navbar />

      <main className="p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
