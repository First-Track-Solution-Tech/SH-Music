import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import SearchOverlay from "../components/SearchOverlay";
import Music_player from '../components/Music_player'
const AppLayout = () => {
   const [searchOpen, setSearchOpen] = useState(false);
const [currentSongId, setCurrentSongId] = useState(null)
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      
      <Navbar onSearchClick={() => setSearchOpen(true)} />


      
      <main className="flex-1 px-2">
        <Outlet context={{ setCurrentSongId }} />
      </main>

      {/* show player only if a song is selected */}
      {currentSongId !== null && (
        <Music_player songId={currentSongId} />
      )}

      <SearchOverlay
  isOpen={searchOpen}
  onClose={() => setSearchOpen(false)}
/>

      <Footer />

    </div>
  )
}

export default AppLayout
