import React, { useState } from 'react'
import Container from './Container'
import Logo from "../assets/Logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


const Nabvar = () => {
   let [menu, setMenu]= useState(false)
   let handleMenu = ()=>{
     setMenu(!menu)
  }

  return (
    <section>
        <nav className='bg-navColor py-3' >
        <Container >
            <div className="flex justify-between items-center">
                <div className="">
                    <img src={Logo} alt=''/>
                </div>
                <div className="">
                <ul className={`lg:flex gap-x-6 text-center lg:static z-[3] ${menu == true ? "bg-[green] absolute left-0 top-[172px] w-full ":"absolute left-[-450px] top-[172px] w-full"}`}>
                <li><a className='font-pops font-semibold text-white text-[16px] inline-block p-2 hover:bg-blue-300 rounded-2xl' href='#'>Home</a></li>    
                <li><a className='font-pops font-semibold text-white text-[16px] inline-block p-2 hover:bg-blue-300 rounded-2xl' href='#'>About</a></li>    
                <li><a className='font-pops font-semibold text-white text-[16px] inline-block p-2 hover:bg-blue-300 rounded-2xl' href='#'>Services</a></li>    
                <li><a className='font-pops font-semibold text-white text-[16px] inline-block p-2 hover:bg-blue-300 rounded-2xl' href='#'>Gallery</a></li>    
                <li><a className='font-pops font-semibold text-white text-[16px] inline-block p-2 hover:bg-blue-300 rounded-2xl' href='#'>Blog</a></li>    
                <li><a className='font-pops font-semibold text-white text-[16px] inline-block p-2 border-2 broder-[white] hover:bg-blue-300' href='#'>CONTACT</a></li>    
                </ul>  
                </div>  
                 <div onClick={handleMenu} className="lg:hidden">
                   {menu == true ? <RxCross2 className='text-white'/>:<FaBars className='text-white'/>} 
                 </div>
             </div> 
          
        </Container>
        </nav>
    </section>
  )
}

export default Nabvar

