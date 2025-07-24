import React from 'react'
import Container from "./Container"
import Comp from "../assets/comp.png"
const About = () => {
  return (
    <section>
     <Container>   
      <div className="flex py-[136px] justify-center">
        <div className="w-1/2 lg:w-3/12">
        <div className='lg:min-h-[361px] min-h-[120px] bg-[red]'>
          <div className='flex justify-center items-center lg:h-[361px] h-[120px] ' >
           <h2 className='font-pops font-bold lg:text-[36px] px-[44px] text-white text-center'>
            Learn more about our company
            </h2>
            </div>
        </div>
        </div>
        <div className="w-1/2 lg:w-7/12">
        <div className='relative lg:min-h-[361px] min-h-[120px]'>
          <img className=' h-[120px] lg:h-[100%]' src={Comp} alt=''/>
          <button className='absolute top-[50%] left-[30%] lg:left-[35%]  translate-x-0 -translate-y-5 -lg:translate-y-2  px-2 py-1 lg:px-6 lg:py-3  text-[12px]  lg:text-[16px] border-2 border-[#fff]   text-[#f40404] bg-white  hover:bg-blue-300 ' ><a href='#'>Learn More</a></button>
        </div>
      </div>
     </div>
    </Container>
   </section>
  )
}

export default About