import React from 'react'
import { assets, songsData } from '../assets/assets'

const Music_player = ({ songId }) => {

  const song = songsData.find(s => s.id === songId)

  if (!song) return null

  return (
    <div className="h-24 bg-[#181818] border-t border-neutral-700 flex items-center justify-between px-4">

      {/* Song info */}
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12 rounded' src={song.image} alt='' />
        <div>
          <p className='text-sm font-medium'>{song.name}</p>
          <p className='text-xs text-gray-400'>{song.desc.slice(0, 20)}</p>
        </div>
      </div>

      {/* Controls */}
      <div className='flex flex-col items-center gap-1 mx-auto'>
        <div className='flex gap-4'>
          <img className='w-4' src={assets.shuffle_icon} alt='' />
          <img className='w-4' src={assets.prev_icon} alt='' />
          <img className='w-4' src={assets.play_icon} alt=''/>
          <audio src={song.file} autoPlay />
          <img className='w-4' src={assets.next_icon} alt='' />
          <img className='w-4' src={assets.loop_icon} alt='' />
        </div>
      </div>

    </div>
  )
}

export default Music_player
