import React from 'react'

import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';

const Album_display = () => {

    const {id} = useParams();
    const albumData = albumsData[id];
   
  return (
    <>
    
    <div className="p-6" style={{background: `linear-gradient(180deg, ${albumData.bgColor} 0%, #121212 40%)`}} >
    <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img className='w-48 rounded' src={albumData.image} alt=''/>
        <div className='flex flex-col'>
            <p>Top Playlist</p>
            <h3 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h3>
             <h4>{albumData.desc}</h4>
             <p className='mt-1'>
                <img className='inline-block w-15 h-10 invert' src={assets.music_logo} alt=''/>
                <b>SH.Music</b>
                . 12,432 likes
                <b> 50 Songs</b>
               . about 1 hr 50 min
             </p>
        </div>

    </div>
    <div className='grid grid-cols-3 sm:grid-col4 mt-10 mb-5 pl-2 text-white'>
        <p><bc className='mr-4'>#</bc>Title</p>
        <p>Album</p>
        <p className='flex items-center gap-2'>Duration<img className='w-4 h-4' src={assets.clock_icon} alt=''/></p>
    </div>
    <hr/>
    {
        songsData.map((item,index)=>(
            <div className='grid grid-cols-3 gap-2 p-2 item-center text-gray-200 hover:text-gray-400 cursor-pointer'>
                 <p className='text-white'>
                    <b className='mr-4 text-gray-300'>{index+1}</b>
                    <img className='inline w-10 mr-5' src={item.image} alt=''/>
                    {item.name}
                 </p>
                 <p className='text-[12px]'>{albumData.name}</p>
                 <p className='text-[12px]'>{item.duration}</p>
            </div>
        ))
    }
</div>
    </>
  )
}

export default Album_display