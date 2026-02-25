import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Applayout from './layout/Applayout'
import Display_home from './components/Display_home'
import Album_display from './components/Album_display'
import Aesthetic_display from './components/Aesthetic_display'
import Register from './pages/Register'
import SignIn from './pages/Sign_in'
import About_us from './pages/About_us'
import Support from './pages/Support'
import Premium from './pages/Premium'
import Download from './pages/Download'
import Developer from './pages/Developer'
import Artists from './pages/Artists'
import Advertising from './pages/Advertising'
import Vendors from './pages/Vendors'
import Explore_artist from './pages/Explore_artist'
import CreateArtist from './pages/CreateArtist'
import Collaborate from './pages/Collaborate'
import CreatePlaylist from './pages/CreatePlaylist'
import FAQ from './pages/FAQ'
import Refund from './pages/Refund'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Applayout />}>
      <Route index element={<Display_home />} />
        <Route path="album/:id" element={<Album_display />} />
        <Route path="aesthetic/:id" element={<Aesthetic_display />} />
       
      <Route path="/register" element={<Register />} />
      <Route path="about" element={<About_us />} />
      <Route path='/premium' element={<Premium/>} />
      <Route path='/download' element={<Download/>} />
      <Route path="support" element={<Support />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/developer" element={<Developer />} />
      <Route path="/advertise" element={<Advertising />} />
      <Route path="/vendor" element={<Vendors />} />
      <Route path="/artist" element={<Artists />} />
      <Route path="/exploreartist" element={<Explore_artist />} />
      <Route path="/createartist" element={<CreateArtist/>} />
      <Route path="/create-playlist" element={<CreatePlaylist />} />
<Route path="/faq" element={<FAQ />} />
<Route path="/refund" element={<Refund />} />

      <Route path="/collaborate" element={<Collaborate />} />
</Route>
      
    </Routes>
  )
}