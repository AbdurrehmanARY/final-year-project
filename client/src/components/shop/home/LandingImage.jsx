import { Button } from '@/components/ui/button'
import React from 'react'

function LandingImage() {
  return (
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
  <section className="bg-[url('/images/Group 1.png')] rounded-3xl overflow-hidden  ">
          <div className="container  px-4 md:px-12 py-8 md:py-8  ">
            <div className="flex flex-col md:flex-row items-center ">
              <div className="md:w-1/2 space-y-6 md:pr-8 py-8 ">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-inter">
                  TRENDY FASHION
                  
                  <span className="block font-normal font-inter">COLLECTION</span>
                </h1>
                <p className="text-[#525252] max-w-md">
                  Finding your fashion has never been easier. Unleash the best version of yourself, fashion comes from
                  our style and confidence.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-sm text-white rounded-full px-6">Shop Now</Button>

                <div className="flex space-x-8 pt-4">
                  <div>
                    <div className="text-4xl font-normal">80+</div>
                    <div className="text-xs text-gray-500">Unique Style</div>
                  </div>
                  <div>
                    <div className="text-4xl font-normal">40+</div>
                    <div className="text-xs text-gray-500">Best Trusted</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-gray-300 -ml-1 border-2 border-white"></div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500">96+ Brands featured in our latest collection</div>
                </div>
              </div>

              <div className="md:w-1/2 relative">
                <img
                  src="/images/Minimalist Fashion Brand Catalog Mobile Presentation  1.png"
                  alt="Fashion model"
                
                  className="object-cover"
                  priority
                />
                
              </div>
            </div>
          </div>
        </section> 
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  )
}

export default LandingImage

