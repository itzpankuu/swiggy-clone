import React from 'react'

function Footer() {
  return (
    <>
    <div className='bg-[#02060c]'>

        <div className='max-w-[1100px] mx-auto grid grid-cols-4 py-10 '>

            <div>
                <div className='flex gap-2 items-center'>
                     <img src="./images/swiggyblack.png" alt="" className='w-[70px] h-[70px]' />
                     <div className='text-white font-bold text-[25px]'>Swiggy  
                     </div>
                </div>
                
                <div className='text-gray-400 font-medium text-[16px]'>
                   © 2024 Bundl Technologies Pvt. Ltd
                </div>     
            </div>
            



            <div>
                <h1 className='text-white text-[19px] font-bold'>Company</h1>
                <div className='list-none text-gray-300 text-[16px] font-medium m-2'>
                    <li>About</li>
                    <li>Career</li>
                    <li>Team</li>
                    <li>Swiggy One</li>
                    <li>Swiggy Instamart</li>
                    <li>Swiggy Genie</li>
                </div>
            </div>


            <div>

            <div className='mb-11'>
                <h1 className='text-white text-[19px] font-bold'>Contact us</h1>
                <div className='list-none text-gray-300 text-[16px] font-medium m-2'>
                    <li>Help & Support</li>
                    <li>Partner with us</li>
                    <li>Ride with us</li>
                    
                </div>   
                </div>

                <div>
                <h1 className='text-white text-[19px] font-bold'>Legal</h1>
                <div className='list-none text-gray-300 text-[16px] font-medium m-2'>
                    <li>Terms & Conditions</li>
                    <li>Cookie Policy</li>
                    <li>Privacy Policy</li>
                    <li>Investors Relations</li>
                    
                </div>   
                </div>

               
             
            </div>


            <div>
            <h1 className='text-white text-[19px] font-bold'>We deliver to:</h1>
                <div className='list-none text-gray-300 text-[16px] font-medium m-2'>
                    <li>Banglore </li>
                    <li>Gurgaon</li>
                    <li>Hyderabad</li>
                    <li>Delhi </li>
                    <li>Mumbai</li>
                    <li>Pune</li>
                </div>
            </div>

        </div>

    </div>
    </>
  )
}

export default Footer