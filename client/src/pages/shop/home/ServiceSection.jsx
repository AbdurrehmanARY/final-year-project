import React from 'react'
import ServiceCard from './ServiceCard'

function ServiceSection() {
  return (
   <>
   <section className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
             <div>
               <h1 className="font-normal text-5xl">Our Services</h1>
   <p className="text-base font-medium mt-3 text-[#525252]">
   We understand the importance of a seamless and enjoyable shopping experience. 
   </p>
             </div>
   
            <ServiceCard/>
            <ServiceCard/>

            <ServiceCard/>
          

   
           </section>
   
   </>
  )
}

export default ServiceSection