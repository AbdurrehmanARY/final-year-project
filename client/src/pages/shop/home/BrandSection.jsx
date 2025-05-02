import React from 'react'

function BrandSection() {
  return (
   <>
   <section className="py-12 px-4 md:px-8 text-center">
          <h2 className="text-5xl font-normal mb-8">We Are Supported By</h2>
          <div className="flex flex-wrap justify-evenly  items-center gap-8 md:gap-6">
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all border border-[#E5E5E5] py-6 px-10 rounded-2xl">
              <img src="/images/Group.png" alt="" />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all   border border-[#E5E5E5] py-6 px-10 rounded-2xl">
            <img src="/images/Group (1).png" alt="" />

            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all h-full  border border-[#E5E5E5] py-6 px-10 rounded-2xl">
            <img src="/images/Group (2).png" alt="" />
              
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all   border border-[#E5E5E5] py-6 px-10 rounded-2xl">
            <img src="/images/chanel.png" alt="" />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all   border border-[#E5E5E5] py-6 px-10 rounded-2xl">
            <img src="/images/Vector.png" alt="" />
             
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all  border border-[#E5E5E5] py-6 px-10 rounded-2xl ">
            <img src="/images/Zara_(retailer)-Logo.wine 1.png" alt="" />

              
            </div>
          </div>
        </section>
   
   </>
  )
}

export default BrandSection