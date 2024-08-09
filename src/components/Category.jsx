import React, { useState } from 'react'
import { FaArrowRight , FaArrowLeft  } from "react-icons/fa6";
import category from '../assets/category';

function Category() {
  const [slide,setslide] = useState(0)

  function nextslide(){
    if(category.length - 8 == slide) {
      return false
    } 
    setslide(slide+3)
  }

  function previousslide(){
    if(slide == 0) {
      return false
    }
    setslide(slide-3)
  }



  return (
    <>
    <div className='max-w-[1100px] mx-auto flex justify-between py-3'>
        <div className='font-bold text-[25px]'>What's on your mind?</div>

        <div className='flex gap-1'>
              <div className='color flex justify-center items-center w-[40px] h-[40px] rounded-full mx-2' onClick={nextslide}><FaArrowRight /></div>
              <div className='color flex justify-center items-center w-[40px] h-[40px] rounded-full mx-2' onClick={previousslide}><FaArrowLeft /></div>

        </div>
    </div>

        <div className='flex max-w-[1100px] mx-auto overflow-hidden'>
          {category.map(
            (d,i)=> {
              return ( <div style={{transform: `translateX(-${slide*100}%)`}} key={i} className='w-[155px] shrink-0 duration-500'>
                <img src={"./images/" + d.image} alt="" className=''/>
              </div>
              )
            }
          )}
        </div>

        <hr className=' my-6 border-[1px]'/>

        
    
    </>
  )
}

export default Category