import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Music_player from '../components/Music_player'
const AppLayout = () => {
   const [currentSongId, setCurrentSongId] = useState(null)
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      
      <Navbar />

      
      <main className="flex-1 px-2">
        <Outlet context={{ setCurrentSongId }} />
      </main>

      {/* show player only if a song is selected */}
      {currentSongId !== null && (
        <Music_player songId={currentSongId} />
      )}

      
      <Footer />

    </div>
  )
}

export default AppLayout
