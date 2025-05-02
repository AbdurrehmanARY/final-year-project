import { Quote } from 'lucide-react'
import React from 'react'

function TestimonialCard() {
  return (
<>
{/* Testimonial 1 */}
<div className="border rounded-lg p-6">
              <div className="text-2xl mb-4"><Quote /></div>
              <p className="text-gray-600 text-[18px] font-normal mb-4">
                I purchased the most beautiful dress from this brand and I couldn't be happier! The quality is
                exceptional, the fabric is soft and high-quality material and the cut is extremely flattering.
              </p>
              <div className="font-medium text-base">Jessica Lindsay</div>
            </div>
</>
  )
}

export default TestimonialCard