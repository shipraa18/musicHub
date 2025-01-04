// import React from 'react'

// function Header() {
//   return (
//    <>
//     <div>
//           <div className='search'>Search Bar</div>
//           <div className='toggle_Button'>Toggle Button</div>
//           <div className='profile'>Profile-</div>
//     </div>
//     </>
//   )
// }
// export default Header
import React, { useState } from 'react';
import { Search, Bell, Music2, Users } from 'lucide-react';

const Header = ({ isNavExpanded, isMusicMode, setIsMusicMode }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className={`fixed top-0 right-0 left-0 bg-gray-900 border-b border-gray-800 px-6 py-4 transition-all duration-300 ${
      isNavExpanded ? 'ml-64' : 'ml-20'
    }`}>
      <div className="flex items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-2xl">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder={isMusicMode ? "Search music, artist, album..." : "Search friends, groups, posts..."}
            className="w-full bg-gray-800/50 rounded-full py-2 pl-10 pr-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          {/* Music/Social Toggle */}
          <div className="bg-gray-800 rounded-full p-1 flex items-center">
            <button
              onClick={() => setIsMusicMode(true)}
              className={`px-4 py-1 rounded-full flex items-center gap-2 transition-colors ${
                isMusicMode ? 'bg-cyan-400 text-black' : 'text-gray-400'
              }`}
            >
              <Music2 size={16} />
              <span className="text-sm">Music</span>
            </button>
            <button
              onClick={() => setIsMusicMode(false)}
              className={`px-4 py-1 rounded-full flex items-center gap-2 transition-colors ${
                !isMusicMode ? 'bg-cyan-400 text-black' : 'text-gray-400'
              }`}
            >
              <Users size={16} />
              <span className="text-sm">Social</span>
            </button>
          </div>

          {/* Notifications */}
          <button className="text-gray-400 hover:text-white">
            <Bell size={20} />
          </button>

          {/* Profile Section */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 hover:bg-gray-800 rounded-full p-1 pr-3"
            >
              <img
                src="profile.jpg"
                alt="Profile"
                className="w-8 h-8 rounded-full bg-gray-700"
              />
              <span className="text-white">Shipra</span>
            </button>

            {/* Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-1 text-gray-300 z-50">
                <div className="px-4 py-2 border-b border-gray-700">
                  <div className="font-medium">Shipra</div>
                  <div className="text-sm text-gray-400">{isMusicMode ? 'ROKK STAR' : '@jack'}</div>
                </div>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-700">
                  Profile
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-700">
                  Settings
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-700">
                  Help Center
                </button>
                <div className="border-t border-gray-700">
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-700">
                    Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;