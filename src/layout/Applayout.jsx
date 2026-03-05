import React, { useState } from "react";
import Navbar from "../components/Navbar";
import MobileBottomNav from "../components/MobileBottomNav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Music_player from "../components/MusicPlayer";
import SearchOverlay from "../components/SearchOverlay";

const AppLayout = () => {
  const [currentSongId, setCurrentSongId] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">

      <Navbar onSearchClick={() => setSearchOpen(true)} />

      <main className="px-5 pt-16 flex-1">
        <Outlet context={{ setCurrentSongId }} />
      </main>

      {currentSongId !== null && (
        <MusicPlayer songId={currentSongId} />
      )}
<SearchOverlay
  isOpen={searchOpen}
  onClose={() => setSearchOpen(false)}
/>

      <Footer />

      <MobileBottomNav />

    </div>
  );
};

export default AppLayout;
