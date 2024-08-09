import React from 'react'
import Filterr from './Filterr'


function Cities() {
  return (
   <>
    <div className='max-w-[1100px] mx-auto flex justify-between py-4'>
    <div className='font-bold text-[25px]'>Best Places to Eat Across Cities</div>
    </div>


    <div className='max-w-[1100px] mx-auto grid grid-cols-4 gap-3 mb-12'>
        
        <Filterr name = "Best Restaurants in Jaipur"/>
        <Filterr name = "Best Restaurants in Jodhpur"/>
        <Filterr name = "Best Restaurants in Agra"/>
        <Filterr name = "Best Restaurants in Pune"/>
        <Filterr name = "Best Restaurants in Mumbai"/>
        <Filterr name = "Best Restaurants in Banglore"/>
        <Filterr name = "Best Restaurants in Ranchi"/>
        <Filterr name = "Best Restaurants in Delhi"/>
        <Filterr name = "Best Restaurants in Chandigarh"/>
        <Filterr name = "Best Restaurants in Goa"/>
        <Filterr name = "Best Restaurants in Panaji"/>
        <Filterr name = "Best Restaurants in Surat"/>
        <Filterr name = "Best Restaurants in Ahemdabad"/>
        <Filterr name = "Best Restaurants in Noida"/>
        <Filterr name = "Best Restaurants in Gurugram"/>
        <Filterr name = "Best Restaurants in Faridabad"/>


    </div>

    <div className='max-w-[1100px] mx-auto flex justify-between py-4'>
    <div className='font-bold text-[25px]'>Best Places to Eat Across Cities</div>
    </div>


    <div className='max-w-[1100px] mx-auto grid grid-cols-4 gap-3 mb-12'>
        
        <Filterr name = "Chinese Restaurants Near.."/>
        <Filterr name = "South Indian Restaurants"/>
        <Filterr name = "Indian Restaurants"/>
        <Filterr name = "Kerela Restaurants Near Me"/>
        <Filterr name = "Bengali Restaurants Near Me"/>
        <Filterr name = "Korean Restaurants Near Me"/>
        <Filterr name = "North Indian Restaurants"/>
        <Filterr name = "Sea food Restaurants"/>
        <Filterr name = "Italian Restaurants Near Me"/>
        <Filterr name = "Punjabi Restaurants Near Me"/>
        <Filterr name = "Andhra Restaurants Near Me"/>
        <Filterr name = "Show More.."/>
       
    </div>

    <div className='max-w-[1100px] mx-auto flex justify-between py-4'>
    <div className='font-bold text-[25px]'>Explore Every Restaurants Near Me</div>
    </div>


    <div className='max-w-[1100px] mx-auto grid grid-cols-2 gap-7 mb-12'>
        
        <Filterr name = "Explore Restaurants Near Me"/>
        <Filterr name = "Explore Top Rated Restaurants Near Me"/>
       
       
    </div>
   </>
  )
}

export default Cities