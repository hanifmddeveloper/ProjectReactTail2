import React from 'react'
import Group1 from "../assets/group1.png" 
import Group2 from "../assets/group2.png" 
import Group3 from "../assets/group3.png" 

const Group = () => {
  return (
   <section>
    <container className='bg-[#C4C4C4]'>
        <div className='lg:flex bg-companyColor py-[50px] lg:py-[185px] w-[1500px] lg:w-[900px] mx-auto gap-6' >
          <div className='w-4/12 lg:w-4/12  relative after:absolute after:content-[""] after:h-full after:w-full after:bg-[rgba(0,0,0,0.7)] after:top-0 after:left-0 mb-3'>
            <img className='w-[1500px]' src={Group1} alt=''/>
            <div className='absolute top-[40%] left-[20%] -translate-x-12 translate-y-0 lg:translate-x-0 lg:translate-y-0 z-[3] ' >
              <h2 className='text-white text-[25px] lg:text-[18px] pb-7' >lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
                <div><a className='text-white font-semibold text-[18px] lg:text-[14px] font-pops bg-[#F40404] py-2 px-3 rounded-2 hover:bg-blue-300'
               href='#'>Read more</a>
               </div>
            </div>
            </div>
          <div className='w-4/12 lg:w-4/12 relative after:absolute after:content-[""] after:h-full after:w-full after:bg-[rgba(0,0,0,0.7)] after:top-0 after:left-0 mb-3' >
          
            <img className='w-[1500px]' src={Group2} alt=''/>
            <div className='absolute top-[40%] left-[20%] -translate-x-12 translate-y-0 lg:translate-x-0 lg:translate-y-0  z-[3] ' >
              <h2 className='text-white text-[25px] lg:text-[18px] pb-7' >lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
                 <div><a className='text-white font-semibold text-[18px] lg:text-[14px] font-pops bg-[#F40404] py-2 px-3 rounded-2 hover:bg-blue-300'
               href='#'>Read more</a>
            </div>
            </div>
            </div>
       
          <div className='w-4/12 lg:w-4/12 relative after:absolute after:content-[""] after:h-full after:w-full after:bg-[rgba(0,0,0,0.7)] after:top-0 after:left-0 mb-3'>
           
            <img className='w-[1500px]' src={Group3} alt=''/>
            <div className='absolute top-[40%] left-[20%] -translate-x-12 translate-y-0 lg:translate-x-0  lg:translate-y-0 z-[4] ' >
              <h2 className='text-white text-[25px] lg:text-[18px] pb-7' >lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
               <div><a className='text-white font-semibold text-[18px] lg:text-[14px] font-pops bg-[#F40404] py-2 px-3 rounded-2 hover:bg-blue-300'
               href='#'>Read more</a>
            </div>
             </div>
            </div>
            </div>
       
    </container>
   </section>
  )
}

export default Group
