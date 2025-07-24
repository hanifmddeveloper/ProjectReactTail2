import React from 'react'
import Container from './Container'
import Pet1 from "../assets/pet1.png"
import { IoMailOutline } from "react-icons/io5";
import { MdPhonePaused } from "react-icons/md";
import { BsMailbox } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='bg-footColor py-[100px]' >
    <Container>    
   <div className='flex justify-around text-white'>
        <div className='w-3/12 '>
          <div className='flex py-[20px]'>
            <img src={Pet1} alt=''/><h3 className='text-white text-[36px]' >PETROIL</h3>
           </div>
         <div className='flex items-center gap-2' >
          <div className='' >
            <IoMailOutline />
            </div>  
          <div className='' >
            <a href='#'>mail@yourcompany.com</a>
            </div>  
          </div>  
          <div className='flex items-center lg:mt-3 gap-2' >
          <div className='' >
            <MdPhonePaused />
            </div>  
          <div className='' >
            <a href='#'>+896 120 5889 (Toll free)</a>
            </div>  
          </div> 
          <div className='flex items-center lg:mt-3 gap-2' >
          <div className='' >
             <BsMailbox />
            </div>  
          <div className='' >
            <a href='#'>101 Baker Street, New York, USA, 12345</a>
            </div>  
          </div> 
          <div className='lg:flex gap-7 lg:mt-5' >
            <div className='border-5 inline-block border-navColor rounded-full bg-navColor'>
              <a href='#'><FaFacebookF /></a>
            </div>
            <div className='border-5 inline-block border-navColor rounded-full bg-navColor' >
               <a href='#'><LuTwitter /></a> 
            </div>
            <div className='border-5 inline-block border-navColor rounded-full bg-navColor' >
                <a href='#'><FaLinkedinIn /></a>
            </div>
            <div className='border-5 inline-block border-navColor rounded-full bg-navColor' >
                <a href='#'><FaInstagram /></a>
            </div>
          </div>
        </div>
        
         <div className='w-2/12'>
          <div className='pt-5'>
            <h2 className='text-white font-pops font-bold text-[16px] pb-5' >Company</h2>  
             <a href='#' ><h2 className='pb-3' >Home</h2></a>   
             <a href='#' ><h2 className='pb-3' >About</h2></a>   
             <a href='#' ><h2 className='pb-3' >Services</h2></a>   
             <a href='#' ><h2 className='pb-3' >Gallery</h2></a>   
            </div>
        </div>
        <div className='w-2/12'>
         <div className='pt-5'>
            <h2 className='text-white font-pops font-bold text-[16px] pb-5'>Others</h2>   
             <a href='#' ><h2 className='pb-3' >Blog</h2></a>   
             <a href='#' ><h2 className='pb-3' >Contact</h2></a>   
             <a href='#' ><h2 className='pb-3' >Terms & Conditions</h2></a>   
             <a href='#' ><h2 className='pb-3' >Privacy Policy</h2></a>   
            </div>
        </div>
        <div className='w-3/12 '>
        <div className='pt-5'>
            <h2 className='text-white font-pops font-bold text-[16px] pb-5'>Others</h2> 
             <div className='flex gap-2.5'>
               <div className=''> 
                <h3 className=' border-2 border-[white] ml-1 py-1 px-2 font-bold  font-pops bg-white text-[#008AD8] inline-block rounded-[5px]' >ISO 88  <h5 className='font-pops text-[#008AD8] text-[8px] w-[88px] h-[10px]' >Environmentally Safe</h5></h3>
                </div>
                <div className=''>
                <h3 className=' border-2 border-[white] py-2 px-2 font-bold  font-pops bg-white text-[#008AD8] inline-block rounded-[5px] text-[purple]' >Liquid<span className='text-[#009818]' >Green</span></h3>
               </div>
             </div>
            <div className='' >
                <h3></h3>
            </div>
           </div>
        </div>
   </div>

</Container>
</section>



  )
}

export default Footer
