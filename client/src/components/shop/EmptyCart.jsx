import { ShoppingBag } from 'lucide-react'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'

function EmptyCart() {
  const navigate=useNavigate()
  return (
    <>
     <div className="flex flex-col items-center justify-center max-w-md mx-auto px-4 py-12">

      <div className="flex flex-col items-center justify-center w-full gap-4 mb-8">
        <div className="flex items-center justify-center w-24 h-24 rounded-full border border-gray-200">
          <ShoppingBag className="w-10 h-10 text-gray-800" strokeWidth={1.5} />
        </div>

        <h2 className="text-lg font-medium mt-4">Oops! Your cart is empty</h2>

        <p className="text-center text-muted-foreground">
          Start exploring our collection now and add your favorite items to your cart.
        </p>
      </div>

      <Button onClick={()=>navigate('/listing')} className="bg-[#e67d4e] hover:bg-[#d46c3d] text-white rounded-full px-8 py-6 h-auto font-medium">
        Shop Now
      </Button>
    </div>
    
    </>
  )
}

export default EmptyCart