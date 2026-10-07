import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Testimony", to: "/testimony" },
    { name: "FAQ", to: "/faq" },
  ];

  return (
    <div className="flex items-center justify-between bg-[#bebdbd] px-8 py-3 text-sm font-medium text-[#8a8a8a]">
      <div className="flex items-center space-x-2 select-none">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-black font-bold text-white text-xs">
          L
        </div>
        <h1 className="font-bold text-black text-base">Logo</h1>
      </div>

      <nav className="flex items-center space-x-6">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive
                ? "rounded bg-[#4a4a4a] px-3 py-1 text-black font-semibold transition-all"
                : "hover:text-black transition-colors"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <button className="rounded-md bg-black px-4 py-1.5 text-white font-semibold hover:bg-zinc-900 transition-colors">
        Sign In
      </button>
    </div>
  );
}

export default Navbar;
