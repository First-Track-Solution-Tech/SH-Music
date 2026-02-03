import React from 'react'

import { albumsData, songsData, aestheticData } from '../assets/assets'
import Album_cards from './Album_cards'
import Song_card from './Song_card'
import Aesthetic_cards from './Aesthetic_cards'
import Cta from './Cta'

import Artists from './Artists'
const Display_home = () => {
  return (
    <div className="w-full rounded bg-[#121212] text-white p-6">
      
      <h1 className='my-5 font-bold text-2xl'>Album Trends</h1>
      <div className='flex overflow-x-auto no-scrollbar'>
        {albumsData.map((item) => (
          <Album_cards key={item.id} {...item} />
        ))}
      </div>

      <h1 className='my-5 font-bold text-2xl'>Song Trends</h1>
      <div className='flex overflow-x-auto no-scrollbar'>
        {songsData.map((item) => (
          <Song_card key={item.id} {...item} />
        ))}
      </div>
      <Artists/>


      <h1 className='my-5 font-bold text-2xl'>Aesthetic Trends</h1>
      <div className='flex overflow-x-auto no-scrollbar'>
        {aestheticData.map((item) => (
          <Aesthetic_cards key={item.id} {...item} />
        ))}
      </div>
      <Cta/>
      

    </div>
  )
}

export default Display_home
