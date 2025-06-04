import React from 'react'
import TestimonialCard from './TestimonialCard'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'

function Testimonial({testimonials}) {
  return (
    <>

          {/* Testimonials */}
      <section className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 py-16 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 mb-12 relative z-10">
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-4 text-sm px-4 py-2 backdrop-blur-sm">
              Customer Reviews
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">What Our Customers Say</h2>
            <p className="text-lg sm:text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied mobile enthusiasts who trust us for their tech needs
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="flex animate-scroll space-x-6">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={`${testimonial.id}-${index}`} className="flex-shrink-0 w-80 sm:w-96 bg-white/15 backdrop-blur-lg border-white/20 text-white shadow-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 ring-4 ring-white/30"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-orange-100 text-sm">{testimonial.location}</p>
                      <div className="flex items-center gap-2 mt-1">
                        {testimonial.verified && (
                          <Badge className="bg-green-500 text-white text-xs">
                            Verified
                          </Badge>
                        )}
                        <Badge className="bg-blue-500 text-white text-xs">
                          {testimonial.device}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-orange-100 leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    {/* <section className="py-12 px-4 md:px-8">
          <h2 className="text-5xl font-normal text-center mb-2">What our clients have to say!</h2>
          <p className="text-gray-500 text-center font-normal text-base mb-8">95% Absolute feedback about your super product</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<TestimonialCard/>
<TestimonialCard/>
<TestimonialCard/>


             
          </div>
        </section> */}
    
    </>
  )
}

export default Testimonial