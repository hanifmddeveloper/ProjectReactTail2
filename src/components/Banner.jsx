import React from 'react'
import Container from './Container'

 
const Banner = () => {
  return (
   <section className={`bg-[url(../public/Banner.png)] bg-no-repeat bg-center bg-cover lg:pt-[260px] py-[65px] lg:pb-[258px] relative z-[2]after:absolute after:content-[''] after:h-full after:w-full after:bg-[rgba(0,0,0,0.52)] after:left-0 after:top-0 after:z-[-1] text-center lg:text-start`}>
       <Container>
        <div className="div">
         <h2 className='text-white text font-pops font-bold lg:text-[64px] lg:w-[842px]'>
          We exist since 1975 on the oil and gas industry.
         </h2>
        <div className="pt-9">
           <a className='bg-navColor px-[40px] py-[14px] inline-block text-white hover:bg-blue-300' href='#'>Learn More</a> 
        </div>
        </div>
       </Container>
    </section>
  )
}

export default Banner 


