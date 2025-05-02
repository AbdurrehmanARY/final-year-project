import { Button } from "@/components/ui/button"

export default function NewsSection() {
  return (
   <>
    <section className="py-12 bg-[#F6F6F6] rounded-3xl my-15">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-5xl font-normal font-helvetica text-center mb-2">Subscribe Newsletter and Get $15 Off</h2>
          <p className=" font-normal text-base text-center text-[#525252] mb-6">Be the first to know about sales and special offers</p>
          
          <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto ">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none"
            />
            <Button
             className="px-10 py-4 font-medium text-base  bg-[#E16F3D] hover:bg-orange-600 rounded-full h-full">Subscribe</Button>
          </form>
        </div>
      </section>
   
   </>
  )
}
