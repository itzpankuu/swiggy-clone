import React, { useRef, useEffect, useState } from 'react';
import restaurants from '../assets/restaurants'
import { FcRating } from "react-icons/fc";
import Filter from './Filter';




function Online() {

        const myRef = useRef(null);
        const [isAtTop, setIsAtTop] = useState(false);
      
        useEffect(() => {
          const handleScroll = () => {
            if (myRef.current) {
              const rect = myRef.current.getBoundingClientRect().top;
              setIsAtTop(rect.top  <= 0);
            }
          };
      
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);

        useEffect(() => {
            if (myRef.current) {
              if (isAtTop) {
                myRef.current.classList.add('atTopClass'); // Replace 'atTopClass' with your desired class name
              } else {
                myRef.current.classList.remove('atTopClass');
              }
            }
          }, [isAtTop]);
    
  return (
    <>
     
     <div className='max-w-[1100px] mx-auto justify-between' ref={myRef}>
        <div className='font-bold text-[25px]'>Restaurants with online food delivery in Jaipur</div>
        
        <div  className={isAtTop ? 'fixed top-0 z-[99999999] bg-black'  : ''}>
    
  
        <div className='flex gap-3 max-w-[1100px] mx-auto my-8'>
            <Filter name = "Filter" />
            <Filter name = "Sort By" />
            <Filter name = "Fast Delivery" />
            <Filter name = "New on swiggy" />
            <Filter name = "Rating 4.0+" />
            <Filter name = "Pure veg" />
            <Filter name = "Offers" />
            <Filter name = "Rs 300-400" />
            
        </div>
        </div>

        <div className='grid grid-cols-4 gap-2 my-5'>
            {restaurants.map(
                (d,i)=> {
                    return (
                        <div key={i} className='w-[200px] h-[190px] shrink-0 duration-500 mb-11 gap-2 hover:scale-110'>
                        <div className='w-full h-[60%] relative duration-500'>
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

export default Online