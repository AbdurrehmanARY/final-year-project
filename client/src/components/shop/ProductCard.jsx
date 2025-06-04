import { addToCart, fetchCartItems } from '@/store/shop/cart'
// import toast from 'daisyui/components/toast'
import { Eye, Heart, ShoppingBag, ShoppingCart, Star } from 'lucide-react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import LoginDialog from '../auth/LoginDialog'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'

function ProductCard({product,index}) {
   const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const {isAuthenticated,user}=useSelector((state)=>state.auth)
   
const features= ["ECG", "Blood Oxygen", "Always-On Display"]



  const navigate=useNavigate()
  const dispatch=useDispatch()
  const openRegister = () => {
    setIsLoginOpen(false); // Close Login Dialog
    setTimeout(() => setIsRegisterOpen(true), 300); // Open Register Dialog after a delay
  };

  const openLogin = () => {
    setIsRegisterOpen(false); // Close Register Dialog
    setIsForgotPasswordOpen(false); // Close Forgot Password Dialog
    setTimeout(() => setIsLoginOpen(true), 300); // Open Login Dialog after a delay
  };

  const openForgotPassword = () => {
    setIsLoginOpen(false); // Close Login Dialog
    setIsForgotPasswordOpen(true)
    // setTimeout(() => setIsForgotPasswordOpen(true), 300); // Open Forgot Password Dialog after a delay
  };

  const productDetail=()=>{
navigate(`/info/${product.id}`)
  }

  const handleAddToCart=async()=>{
    if(!isAuthenticated){

      // return toast('Please login to add items to cart')
      // openLogin()
      setIsLoginOpen(true)
      return
    }
    const userId=user?.id
    const productId=product?.id
    const quantity=1
    const response=await dispatch(addToCart({userId,productId,quantity}))
    
  if(response.payload?.success){
      toast.success(response?.payload?.message)
     dispatch(fetchCartItems(user?.id))

    }
  {}
  }
  

  return (
    <>
    <LoginDialog
            open={isLoginOpen}
            onOpenChange={setIsLoginOpen}
            openRegister={openRegister}
            openForgotPassword={openForgotPassword}
            trigger={<Button className="hidden"  />}
          /> 
    


          <Card
          className="mx-2 group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white via-orange-50/20 to-red-50/30 border-0 shadow-lg backdrop-blur-sm h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/0 via-transparent to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div
      onClick={productDetail}
      className="cursor-pointer  relative overflow-hidden">
        <img
          src={product.image[0]}
          alt={product.productName}
          className="w-full h-48 sm:h-56 object-contain transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg text-xs animate-pulse">
            {/* {product.badge} */}Best Seller
          </Badge>
        </div>
        <div className="absolute top-3 right-3 flex gap-2">
          <Badge className="bg-red-500 text-white border-0 shadow-lg text-xs">
            {/* {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF */}
          15%
          </Badge>
        </div>
        <div className="absolute top-12 right-3">
          <Button size="sm" variant="ghost" className="bg-white/90 backdrop-blur-sm hover:bg-white hover:text-red-500 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 w-8 h-8 p-0">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <CardContent className="p-4 relative flex flex-col flex-grow">
        <h3
          onClick={productDetail}
        
        
        className="cursor-pointer text-start font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors text-base leading-tight line-clamp-2">
          {product.productName}
        </h3>
        <div className="flex flex-wrap gap-1 mb-3">
          {features.map((feature, index) => (
            <Badge key={index} variant="outline" className="text-xs border-orange-200 text-orange-700 bg-orange-50">
              {feature}
            </Badge>
          ))}
        </div>
        <div className="flex items-center mb-3">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.averageRating) ? 'fill-current' : ''}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600 ml-2 font-medium">
            {/* ({product.reviews}) */}
            43
            </span>
        </div>
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                ${product.price}
              </span>
              <span className="text-sm text-gray-500 line-through font-medium">
                {/* ${product.originalPrice} */}
                RS.800
                </span>
            </div>
          </div>
          <Button
          onClick={handleAddToCart}
          className="cursor-pointer w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 text-sm">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
           
    
    </>
  )
}

export default ProductCard