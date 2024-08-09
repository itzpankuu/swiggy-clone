import React, { useState } from 'react'
import { FaArrowRight , FaArrowLeft  } from "react-icons/fa6";
import restaurants from '../assets/restaurants';
import { FcRating } from "react-icons/fc";
import Card from './Card';

function Restaurants() {
  const [slide,setslide] = useState(0)

  function nextslide(){
    console.log(restaurants.length)
    console.log(slide)
    if(restaurants.length -4 == slide) {
      return false
    } 
    setslide(slide+1)
  }

  function previousslide(){
    if(slide == 0) {
      return false
    }
    setslide(slide-1)
  }

  return (
    <>
    <div className='max-w-[1100px] mx-auto flex justify-between'>
        <div className='font-bold text-[25px]'>Top restaurant chains in Jaipur</div>

        <div className='flex gap-1'>
              <div className='color flex justify-center items-center w-[40px] h-[40px] rounded-full mx-2' onClick={nextslide}><FaArrowRight /></div>
              <div className='color flex justify-center items-center w-[40px] h-[40px] rounded-full mx-2' onClick={previousslide}><FaArrowLeft /></div>

        </div>
    </div>

    <div>
    <div className=' max-w-[1100px] mx-auto flex gap-7 overflow-hidden py-3'>
    {restaurants.map(
        (d,i)=> {
            return(
                <div key={i} style={{transform: `translateX(-${slide*110}%)`}} className='w-[270px] h-[280px] shrink-0 duration-500'>
                    <div className='w-full h-[60%] relative duration-500 hover:scale-110'>
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

    </div>

    <hr className=' my-6 border-[1px]'/>
    </>
  )
}

export default Restaurants