import React from 'react'

function Foot() {
  return (
   <>
   <div className='bg-[#f0f0f5] w-full'>
    <div className='max-w-[1100px] mx-auto flex justify-center gap-20 py-4 items-center'>
        <div className='font-bold text-[30px] text-gray-700'>
        For better experience,download <br />
        the Swiggy app now
        </div>

        <div className='flex gap-2 w-[200px] h-[64px]'>
            <img src="./images/play_store.avif" alt="" />
            <img src="./images/app_store.avif" alt="" />
        </div>

    </div>
   </div>
   </>
  )
}

export default Foot