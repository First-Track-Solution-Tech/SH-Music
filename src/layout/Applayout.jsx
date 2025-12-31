import React from 'react'
import Navbar from '../components/Navbar'
// import Sidebar_temp from '../components/Sidebar_temp'
import Music_display from '../components/Music_display'
// import Music_player from '../components/Music_player'
import Footer from "../components/Footer";

const Applayout = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col overflow-hidden">

      
      <div className="h-14 sm:h-16 shrink-0">
        <Navbar />
      </div>

      
      <div className="flex-1 flex gap-2 px-2 overflow-hidden">

        
        {/* <div className="hidden sm:block sm:w-[280px] min-w-0 overflow-hidden rounded-xl bg-[#3130304f] group">
          <Sidebar_temp />
        </div> */}

        
        <div className="flex-1 min-w-0 rounded-xl bg-[#292828bf] relative overflow-hidden">
          <Music_display />

          {/* <div className="absolute bottom-0 left-0 right-0">
            <Music_player />
          </div> */}
          <Footer />
        </div>

      </div>

    </div>
  )
}

export default Applayout