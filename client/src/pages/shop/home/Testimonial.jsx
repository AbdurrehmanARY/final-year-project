import React from 'react'
import TestimonialCard from './TestimonialCard'

function Testimonial() {
  return (
    <>
    <section className="py-12 px-4 md:px-8">
          <h2 className="text-5xl font-normal text-center mb-2">What our clients have to say!</h2>
          <p className="text-gray-500 text-center font-normal text-base mb-8">95% Absolute feedback about your super product</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<TestimonialCard/>
<TestimonialCard/>
<TestimonialCard/>


             
          </div>
        </section>
    
    </>
  )
}

export default Testimonial