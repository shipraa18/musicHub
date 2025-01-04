// import React from 'react'

// function Navbar_music() {
//   return (
//     <>
//        {/* <div>
//           <div className='Home'>Home</div>
//           <div className='Library'>Library</div>
//           <div className='Messages'>Messages</div>
//           <div className='Explore'>Explore</div>
//           <div className='Playlists'>Playlist</div>
//           <div className='Post'>Post</div>
//        </div> */}
//     </>
//   )
// }
// export default Navbar_music

import React from 'react';
import { 
  Home, Radio, Search, BarChart2, Settings, Library, 
  PlayCircle, Heart, Clock, Users, Mic2,
  MessageCircle, UserPlus, Image, Video, Bookmark
} from 'lucide-react';

const Navbar = ({ isExpanded, setIsExpanded, isMusicMode }) => {
  // Music mode navigation items
  const musicNavItems = [
    { icon: <Home className="w-6 h-6" />, label: 'Home', active: true },
    { icon: <Radio className="w-6 h-6" />, label: 'Radio' },
    { icon: <Search className="w-6 h-6" />, label: 'Browse' },
    { icon: <BarChart2 className="w-6 h-6" />, label: 'Stats' },
    { icon: <Settings className="w-6 h-6" />, label: 'Settings' }
  ];

  const musicLibraryItems = [
    { icon: <PlayCircle className="w-5 h-5" />, label: 'Made For You' },
    { icon: <Clock className="w-5 h-5" />, label: 'Recently Played' },
    { icon: <Heart className="w-5 h-5" />, label: 'Liked Songs' },
    { icon: <Library className="w-5 h-5" />, label: 'Albums' },
    { icon: <Users className="w-5 h-5" />, label: 'Artists' },
    { icon: <Mic2 className="w-5 h-5" />, label: 'Podcasts' }
  ];

  const musicPlaylists = [
    'Summer Vibes',
    'Chill Mix',
    'Best of Rock',
    'Party Hits',
    'Study Music'
  ];

  // Social mode navigation items
  const socialNavItems = [
    { icon: <Home className="w-6 h-6" />, label: 'Feed', active: true },
    { icon: <MessageCircle className="w-6 h-6" />, label: 'Messages' },
    { icon: <UserPlus className="w-6 h-6" />, label: 'Friends' },
    { icon: <Image className="w-6 h-6" />, label: 'Photos' },
    { icon: <Settings className="w-6 h-6" />, label: 'Settings' }
  ];

  const socialLibraryItems = [
    { icon: <Video className="w-5 h-5" />, label: 'Videos' },
    { icon: <Bookmark className="w-5 h-5" />, label: 'Saved Posts' },
    { icon: <Users className="w-5 h-5" />, label: 'Groups' },
    { icon: <Clock className="w-5 h-5" />, label: 'Memories' }
  ];

  const socialGroups = [
    'Tech Enthusiasts',
    'Travel Adventures',
    'Food Lovers',
    'Gaming Squad',
    'Book Club'
  ];

  // Select the appropriate items based on mode
  const mainNavItems = isMusicMode ? musicNavItems : socialNavItems;
  const libraryItems = isMusicMode ? musicLibraryItems : socialLibraryItems;
  const collections = isMusicMode ? musicPlaylists : socialGroups;
  const collectionsTitle = isMusicMode ? 'PLAYLISTS' : 'GROUPS';

  return (
    <nav className={`fixed left-0 top-0 h-full bg-black text-gray-300 transition-all duration-300 z-50 ${
      isExpanded ? 'w-64' : 'w-20'
    }`}>
      <div className="p-6">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="text-cyan-400 text-2xl font-bold">
            {isExpanded ? 'Node' : 'N'}
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-auto text-gray-400 hover:text-white"
          >
            {isExpanded ? '◀' : '▶'}
          </button>
        </div>

        {/* Main Navigation */}
        <div className="space-y-2">
          {mainNavItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-2 rounded-lg cursor-pointer transition-colors
                ${item.active ? 'text-cyan-400 bg-gray-800/50' : 'hover:text-white hover:bg-gray-800/30'}`}
            >
              {item.icon}
              {isExpanded && <span>{item.label}</span>}
            </div>
          ))}
        </div>

        {/* Library Section */}
        {isExpanded && (
          <>
            <div className="mt-8">
              <h3 className="text-xs font-semibold text-gray-400 mb-4 px-2">
                {isMusicMode ? 'YOUR LIBRARY' : 'YOUR CONTENT'}
              </h3>
              <div className="space-y-2">
                {libraryItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-2 rounded-lg cursor-pointer hover:text-white hover:bg-gray-800/30"
                  >
                    {item.icon}
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Collections Section */}
            <div className="mt-8">
              <h3 className="text-xs font-semibold text-gray-400 mb-4 px-2">{collectionsTitle}</h3>
              <div className="space-y-2">
                {collections.map((item, index) => (
                  <div
                    key={index}
                    className="p-2 rounded-lg cursor-pointer hover:text-white hover:bg-gray-800/30"
                  >
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;