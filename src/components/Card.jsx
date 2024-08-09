import React, { useState } from 'react'
import { FcRating } from "react-icons/fc";
import restaurants from '../assets/restaurants';

function Card() {
    const [slide,setslide] = useState(0)

    function nextslide(){
    //   if(restaurants.length - 8 == slide) {
    //     return false
    //   } 
      setslide(slide+2)
    }
  
    function previousslide(){
      if(slide == 0) {
        return false
      }
      setslide(slide-3)
    }
  return (
    <> <div className=' max-w-[1100px] mx-auto gap-5 overflow-hidden py-3'>
    {restaurants.map(
        (d,i)=> {
            return(
                <div key={i} style={{transform: `translateX(-${slide*100}%)`}} className='w-[270px] h-[280px] flex-grow shrink-0'>
                    <div className='w-full h-[60%] relative'>
                    <img src={"./images/" + d.image} alt="" className='w-full h-full overflow-hidden shadow-lg rounded-[10px] object-fill'/>
                    <div className='image-overlay absolute top-0 left-0 w-full h-full flex items-end text-white font-bold text-[18px] pb-1 pl-1 tracking-tighter'>{d.offer}</div>

                    </div>
                
                <div className='font-bold text-[20px]'> {d.title}</div>
                <div className='flex gap-1 font-semibold'> 
                    <div className='flex gap-1 items-center '>  <FcRating className='text-green-400' /> {d.rating}</div>
                    <div>. {d.maxTime}-{d.minTime} mins</div>
                    
                </div>
                <div className='text-gray-500 font-medium'>{d.name}</div>
                <div className='text-gray-500 font-medium'> {d.place}</div>
        
            </div>
            )
        }
    )}

   </div>
    </>
  )
}

export default Card