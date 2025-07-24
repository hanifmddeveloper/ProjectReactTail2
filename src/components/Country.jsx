import React from 'react'
import Container from './Container'

const Country = () => {
  return (
    <section className='lg:py-[100px] py-[40px] w-[900px] mx-auto' >
      <Container>
        <div className='lg:flex items-center'>
         <div className="lg:w-5/12 w-full">
         <h2 className='font-pops lg:text-[48px] text-[28px] font-bold text-[#000] w-[289px] pb-4' >The biggest supplier on the country</h2>
         </div>

         <div className=" lg:w-7/12 w-full">
         <p className='font-pops text-[16px] text-[#000] font-medium lg:w-[500px]' > It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p> 
         </div>
        </div>
      </Container>  
    </section>
  )
}

export default Country