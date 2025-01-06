import React from "react";

function Header() {
  return (
    <header
      className="w-full flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2d2839] px-10 py-3 bg-[#131118]"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <div className="flex items-center gap-4 text-white">
        <div className="size-4">
          <img src="/img/logo.png" alt="AWS User Group Guatemala" />
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          AWS User Group Guatemala
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a
            className="text-white text-sm font-medium leading-normal"
            href="#"
          >
            Home
          </a>
          <a
            className="text-white text-sm font-medium leading-normal"
            href="#"
          >
            Events
          </a>
          <a
            className="text-white text-sm font-medium leading-normal"
            href="#"
          >
            Speakers
          </a>
          <a
            className="text-white text-sm font-medium leading-normal"
            href="#"
          >
            Sponsors
          </a>
          <a
            className="text-white text-sm font-medium leading-normal"
            href="#"
          >
            Guides
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
