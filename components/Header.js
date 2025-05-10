'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import pro from '../assets/Icon/pro icon.png';
import { Menu, X } from 'lucide-react'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ['Home', 'Spaces', 'Celebrations', 'Professionals', 'Vendors', 'Blog'];

  return (
    <header className="fixed z-10 top-0 w-full bg-[#FFF2F5]">
      <div className="flex items-center justify-between px-4 lg:px-10 h-[60px] lg:h-[74px]">
        {/* Logo */}
        <h1 className="text-black text-lg font-semibold">
          SET<span className="text-[#DE3163]">MySpace</span>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-7 text-[14px] text-black">
          {navItems.map((item, idx) => (
            <li
              key={item}
              className={idx === 0 ? 'text-[#DE3163] font-medium' : ''}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-4 text-black">
          <Image src={pro} alt="pro" width={24} height={24} />
          <p>Become a member</p>
          <button className="bg-black py-2 px-5 text-white rounded-[6px]">Login</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="z-20 lg:hidden flex flex-col bg-[#FFF2F5] px-4 py-4 text-black">
          <ul className="flex flex-col gap-4">
            {navItems.map((item, idx) => (
              <li
                key={item}
                className={idx === 0 ? 'text-[#DE3163] font-medium' : ''}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 mt-4">
            <Image src={pro} alt="pro" width={24} height={24} />
            <p>Become a member</p>
          </div>
          <button className="bg-black py-2 px-5 text-white rounded-[6px] mt-3 w-fit">
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
