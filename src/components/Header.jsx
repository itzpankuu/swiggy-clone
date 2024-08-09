import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch , FaRegUser } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { CgPokemon } from "react-icons/cg";
import { GrCart } from "react-icons/gr";
import { CiGps } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [toggle,settoggle] = useState(false)

  function showoverlay(){
    settoggle(!toggle)
  }
  
  function hidetoggle(){
    settoggle(false)
  }

  const Link = [
    { 
      name: "Search",
      icon: <FaSearch />
    },
    { 
      name: "Offers",
      icon: <BiSolidOffer />
    },
    { 
      name: "Help",
      icon: <CgPokemon />
    },
    { 
      name: "Sign In",
      icon: <FaRegUser />
    },
    { 
      name: "Cart",
      icon: <GrCart />
    }

  ]
  return (
    <>

    <div className='overlay w-full h-full duration-500 z-[99999999]'  style={{
                 visibility: toggle ? "visible": "hidden", 
                 opacity: toggle ? 1 : 0 
               }}  onClick={hidetoggle}>

<div onClick={(e)=>{e.stopPropagation();}} className='bg-white w-[500px] h-full absolute duration-500' style={{
  left: toggle? "0%" : "-100%"
}}> <div className='mt-[20px] ml-[10px]'>
       <IoMdClose className='text-[30px]' onClick={hidetoggle}/>
</div>


<div>
  <input type="text" placeholder='Search for area,street name...' className='px-4 py-2 w-[350px] shadow-2xl border border-gray-500 mt-[80px] ml-[50px] font-semibold tracking-wider focus:hidden' />
  
  </div>
  
  <div className='w-[350px] h-[85px] ml-[50px] mt-[20px] border border-slate-500'>

    <div className='flex items-center gap-2 px-4 py-4'>
    <CiGps className='text-[30px] font-bold'/>
    <div>
      <div className='font-semibold hover:text-orange-400'>Get current location</div>
      <div className='text-gray-500'> Using GPS</div>
    </div>

    </div>


 
  
  </div></div>

    </div>



    <header className='p-3 shadow-xl sticky top-0 left-0 bg-white z-[9999]'>
        <div className='max-w-[1200px] mx-auto flex items-center' >
             <div className='w-[100px] '>
              <img src="./images/swiggy.png" alt="" className='w-[60%] '/>
             </div>

             <div className='cursor-pointer'> 

               <span className=' font-bold border-b-[3px] border-black'>Bapu Nagar </span>  Jaipur,Rajasthan <IoIosArrowDown className=' inline text-orange-400 text-[30px]' onClick={showoverlay}/>
            </div>

            <nav className='flex list-none gap-9 ml-auto'>
              {Link.map(
                (data,index)=> {
                  return <li key={index} className='flex items-center gap-2 hover:text-orange-400'> 
                              
                              {data.icon}
                              {data.name}
                  
                  </li>
                
                }
              )}
               
            </nav>



          </div>

          
        
      





    </header>

    </>
  )
}

export default Header