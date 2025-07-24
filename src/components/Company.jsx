import React from 'react'
import Container from './Container'
import partner1 from "../assets/PartnerLogo1.png"
import partner2 from "../assets/PartnerLogo2.png"
import partner3 from "../assets/PartnerLogo3.png"
import partner4 from "../assets/PartnerLogo4.png"



const Company = () => {
  return (
   <section className=''>
    <Container >
        <div className='flex lg:flex justify-center  flex-wrap ' >
        <div className='w-3/6 lg:w-2/12 py-5' >
         <img src={partner1} alt=''/>
         </div>
         <div className='w-3/6 lg:w-2/12 py-5' >
         <img src={partner2} alt=''/>
         </div> 
         <div className='w-3/6 lg:w-2/12 py-5'>
         <img src={partner3} alt=''/>
         </div>   
         <div className='w-3/6 lg:w-2/12 py-5' >
         <img src={partner4} alt=''/>
         </div>   
        </div>
      </Container>
   </section>
  )
}

export default Company
