import { ShieldCheck } from 'lucide-react'
import React from 'react'

function ServiceCard() {
  return (
    <>
     <div className="flex flex-col gap-4  p-6 border border-[#E5E5E5] rounded-3xl">
             <ShieldCheck size={64} strokeWidth={0.5} className="" />
             <h3 className="text-2xl font-normal 2">Secure Payment</h3>
             <p className="font-normal text-base text-[#525252]">
             Our customers can return or exchange their purchases hassle-free, with our easy-to-use return policy.
             </p>
             </div>
            
    </>
  )
}

export default ServiceCard