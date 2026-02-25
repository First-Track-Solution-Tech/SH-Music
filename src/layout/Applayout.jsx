import React, { useState } from "react";
import Navbar from "../components/Navbar";
import MobileBottomNav from "../components/MobileBottomNav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Music_player from "../components/Music_player";
import SearchOverlay from "../components/SearchOverlay";

const AppLayout = () => {
  const [currentSongId, setCurrentSongId] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="bg-black text-white">

      <Navbar onSearchClick={() => setSearchOpen(true)} />

      <main className=" px-5 pt-18 pb-1">
        <Outlet context={{ setCurrentSongId }} />
      </main>

      {currentSongId !== null && (
        <Music_player songId={currentSongId} />
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
