import { useState } from 'react'
import Navbar from './components/common/Navbar_music.jsx'
import Header from './components/common/Header.jsx'
import Footer from './components/common/Footer.jsx'


function App() {
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  const [isMusicMode, setIsMusicMode] = useState(true);

  return (
    <>
      <Navbar isExpanded={isNavExpanded} setIsExpanded={setIsNavExpanded} isMusicMode={isMusicMode} />
      <Header isNavExpanded={isNavExpanded} isMusicMode={isMusicMode} setIsMusicMode={setIsMusicMode} />
      <Footer/>
    </>

  )

}

export default App
