import React from 'react'
import service6 from "../assets/service6.png"
import service4 from "../assets/service4.png"
import service5 from "../assets/service5.png"

const Services = () => {
  return (
   <section>
    <div className=" lg:flex mt-5 flex-wrap">
        <div className="w-full lg:w-6/12 lg:px-40 lg:py-10 px-2 py-5">
        <div className='lg:w-[409px] mx-auto text-center lg:text-start' >
        <h1 className='font-pops font-bold lg:text-[64px] text-[28px] lg:w-[509px]' >Our Services</h1>
        <p className='font-pops text-[16px] font-medium text-[#000] w-[405px]' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        </div>
        <div className="lg:w-6/12 py-2 lg:py-0 relative after:absolute after:content-[''] after:h-full after:w-full after:bg-[rgba(0,0,0,0.6)] after:top-0 after:left-0">
           <img  src={service6} alt=''/>
           <div className='absolute top-[30%] left-[20%] -translate-x-0 translate-y-0 z-[2] ' >
            <h2 className='text-white font-pops font-bold text-[25px] mb-7' >Modern natural oil and gas refineries.</h2>
            <div><a className='text-white font-semibold text-[16px] font-pops bg-[#F40404] py-2 px-3 rounded-2 hover:bg-emerald-300' >Learn More</a>
           </div>
           </div>
        </div>
    </div>
   <div className="lg:flex">
     <div className="lg:w-6/12 py-2 lg:py-0 relative after:absolute after:content-[''] after:h-full after:w-full after:bg-[rgba(0,0,0,0.6)] after:top-0 after:left-0">
         <img  src={service4} alt=''/>
         <div className='absolute top-[30%] left-[20%] -translate-x-0 translate-y-0 z-[2] ' >
            <h2 className='text-white font-pops font-bold text-[25px] mb-7' >Supply of national industries.</h2>
            <div><a className='text-white font-semibold text-[16px] font-pops bg-[#F40404] py-2 px-3 rounded-2 hover:bg-emerald-300 ' >Learn More</a>
           </div>
        </div>
        </div>
         <div className="lg:w-6/12 py-2 lg:py-0 relative after:absolute after:content-[''] after:h-full after:w-full after:bg-[rgba(0,0,0,0.6)] after:top-0 after:left-0">
         <img src={service5} alt=''/>
         <div className='absolute top-[30%] left-[20%] -translate-x-0 translate-y-0 z-[2] ' >
            <h2 className='text-white font-pops font-bold text-[25px] mb-7' >National fuel distribution and supply.</h2>
            <div><a className='text-white font-semibold text-[16px] font-pops bg-[#F40404] px-3 py-2 lg:py-2 lg:px-3 rounded-2 hover:bg-emerald-300 ' >Learn More</a>
           </div>
           </div>
        </div>
    </div> 
   
 </section>
  )
}

export default Services