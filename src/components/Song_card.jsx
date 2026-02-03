import React from 'react'

const Song_card = ({image,name,desc,id}) => {
  return (
  <div className='w-[180px] shrink-0 p-2 px-3 rounded cursor-pointer hover:bg-gray-600'>
        <img className='rounded' src={image} alt=''/>
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
        </div>
  )
}

export default Song_card


// import Music_player from '../components/Music_player'   
 
 {/*<div className="absolute bottom-0 left-0 right-0">
            <Music_player />
          </div> */}