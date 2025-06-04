import React from 'react'
import { useState, useEffect } from "react"
import { Link } from 'lucide-react'
import { ChevronRight, ChevronLeft, Star, Info, ShoppingBag, Shield, Truck, RefreshCw } from "lucide-react"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetail } from '@/store/admin/products-slice'
import ProductSpecification from '@/components/shop/product/ProductSpecification'
import { addToCart, fetchCartItems } from '@/store/shop/cart'
import { toast } from 'sonner'
import ProductReviewForm from '@/components/shop/review.jsx/ProductReviewForm'
import ProductReviewSection from '@/components/shop/review.jsx/ProductReviewSection'
import LoginDialog from '@/components/auth/LoginDialog'
import { Button } from '@/components/ui/button'
import { getReviews } from '@/store/shop/review'
// import toast from 'daisyui/components/toast'

export default function ProductInfo() {
  const {id}=useParams()
  const [singleProduct,setSingleProduct]=useState({})
  const {isAuthenticated,user}=useSelector((state)=>state.auth)
  // const {reviews}=useSelector((state)=>state.productReview)
   const [showReviewForm, setShowReviewForm] = useState(false)
     const [isLoginOpen, setIsLoginOpen] = useState(false);
       const [isRegisterOpen, setIsRegisterOpen] = useState(false);
       const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
       const [page, setPage] = useState(1);
       const [limit, setLimit] = useState(5);
const { reviews
  , totalPages, 
 } = useSelector((state) => state.productReview);


  const userId=user?.id
    const productId=singleProduct?.id
   console.log("productId",productId)
 
  const dispatch=useDispatch()
  // const response= dispatch(getProductDetail(id))
  // response.then((data)=>setSingleProduct(data?.payload?.product))
  useEffect(() => {
    const getProduct = async () => {
      const response = await dispatch(getProductDetail(id));
      setSingleProduct(response?.payload?.product); // Assuming `response.payload.product` contains the product data
    };
  
    getProduct();
  }, [id, dispatch]); // Correct dependency array

     // State for selected tab
  const [activeTab, setActiveTab] = useState("details")

  // State for selected size and color
  const [selectedSize, setSelectedSize] = useState("M")
  const [selectedColor, setSelectedColor] = useState("brown")

  // State for current main image
  const [currentImage, setCurrentImage] = useState(0)

  // State for mobile detection
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile view on mount and window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (singleProduct?.id) {
    dispatch(getReviews({ productId: singleProduct.id, page, limit }));
  }
    
  },[dispatch,singleProduct?.id,
    page, limit
  ])



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


  const toggleReviewForm = () => {
    setShowReviewForm(!showReviewForm)
  }

  // Product images
  const productImages = [
"https://th.bing.com/th/id/OIP.YcsKzvyENFzeTSAwt2_gWAHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
"https://th.bing.com/th/id/OIP.YcsKzvyENFzeTSAwt2_gWAHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
"https://th.bing.com/th/id/OIP.YcsKzvyENFzeTSAwt2_gWAHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
"https://th.bing.com/th/id/OIP.YcsKzvyENFzeTSAwt2_gWAHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",

   
]
const handleAddToCart=async()=>{

  if(!isAuthenticated){
      // console.log('not authenticated')
      // return toast('Please login to add items to cart')
      // openLogin()
      setIsLoginOpen(true)
      return
    }
  
    const quantity=1
    const response=await dispatch(addToCart({userId,productId,quantity}))
   
    if(response.payload.success){
      toast(response.payload.message)
    dispatch(fetchCartItems(user?.id))
    }
   
  }
  // Product data
  const product = {
    name: "Winter Coat",
    rating: 4.5,
    reviews: 146,
    price: 124.99,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "pink", hex: "#D65DB1" },
      { name: "brown", hex: "#8B4513" },
      { name: "beige", hex: "#D2B48C" },
      { name: "black", hex: "#000000" },
      { name: "gray", hex: "#808080" },
    ],
    description: `We work with monitoring programs to guarantee compliance with our social, environmental and health and safety standards of our garments. To assess compliance, we have developed an audit program and continuous improvement plans.

Abroad
100% cotton

Taking care of your clothes is taking care of the environment.
To extend the life of your denim garments, always wash them at low temperatures and inside out, in this way we help preserve the colours, the structure of the fabric and reduce energy consumption.`,
  }

  // Reviews data
  // const reviews = [
  //   {
  //     id: 1,
  //     author: "Kierra Bergson",

  //     avatar:"https://th.bing.com/th/id/OIP.YcsKzvyENFzeTSAwt2_gWAHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" ,
  //     rating: 5,
  //     date: "1 week ago",
  //     content:
  //       "I am thrilled with my recent purchase, a dress from brand X. The fabric is of high quality and feels comfortable on the skin. The design is fashionable and unique. I have received many compliments when wearing it. The shopping experience on this website was delightful, and I will definitely return to buy more products!",
  //     likes: 6,
  //     replies: 0,
  //   },
  //   {
  //     id: 2,
  //     author: "Davis Ekstrom",
  //     avatar:"https://th.bing.com/th/id/OIP.YcsKzvyENFzeTSAwt2_gWAHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" ,

  //     rating: 5,
  //     date: "1 week ago",
  //     content:
  //       "I want to express my appreciation to brand Y for the shoes I purchased. Not only do they look stylish, but they are also incredibly comfortable for all-day wear. I'm also impressed with their excellent quality as the shoes still look brand new despite multiple uses. I highly recommend this brand to everyone!",
  //     likes: 6,
  //     replies: 0,
  //   },
  //   {
  //     id: 3,
  //     author: "Kianna Gouse",
  //     avatar:"https://th.bing.com/th/id/OIP.YcsKzvyENFzeTSAwt2_gWAHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" ,

  //     rating: 5,
  //     date: "1 week ago",
  //     content:
  //       "I am extremely pleased with the customer service from brand Z. When I had an issue with the product delivery, the customer service team promptly responded and assisted me in resolving the problem. They were highly professional and friendly. The product itself is outstanding as well. I am very satisfied with my shopping experience.",
  //     likes: 6,
  //     replies: 0,
  //   },
  // ]

  // Next image
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length)
  }

  // Previous image
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length)
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

     <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb - Desktop only */}
      <nav className="hidden md:flex items-center text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link href="/product" className="hover:text-gray-700">
          Product
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-gray-900">Winter Coat</span>
      </nav>

      {/* Product Section */}
      <div className="flex flex-col md:flex-row gap-8 ">
        {/* Product Images */}
        <div className="md:w-1/2">
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-4">
              {singleProduct?.image?.map((image, index) => (
                <button
                  key={index}
                  className={`w-20 h-20 border ${currentImage === index ? "border-black" : "border-gray-200"}`}
                  onClick={() => setCurrentImage(index)}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Product thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative flex-1 border-l border-gray-200 pl-4">
              <div className="relative h-[600px] w-full">
                <img
                  src={singleProduct?.image?.[currentImage] || "/placeholder.svg"}
                  alt="Product main image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="relative">
              <div className="relative h-[400px] w-full">
                <img
                  src={singleProduct?.image?.[currentImage] || "/placeholder.svg"}
                  alt="Product main image"
                  fill
                  className="object-cover"
                />

                {/* Navigation arrows */}
                <button
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {singleProduct?.image?.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full ${currentImage === index ? "bg-black" : "bg-gray-300"}`}
                      onClick={() => setCurrentImage(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnails for mobile */}
              <div className="flex justify-center gap-2 mt-4">
                {singleProduct?.image?.map((image, index) => (
                  <button
                    key={index}
                    className={`w-16 h-16 border ${currentImage === index ? "border-black" : "border-gray-200"}`}
                    onClick={() => setCurrentImage(index)}
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Product thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{singleProduct?.productName}</h1>

          {/* Rating */}
          <div className="flex items-center mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= Math.floor(singleProduct?.averageRating)
                      ? "text-yellow-400 fill-yellow-400"
                      : star <= singleProduct?.averageRating
                        ? "text-yellow-400 fill-yellow-400 half-filled"
                        : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              {singleProduct?.averageRating} ({reviews.length} reviews)
            </span>
          </div>

          {/* Size Selection */}
          {/* <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-medium">Select Size</h2>
              <button className="text-sm flex items-center text-gray-600 hover:text-black">
                <Info className="h-4 w-4 mr-1" />
                Size Guide
              </button>
            </div>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-white border border-gray-300 text-black hover:border-black"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div> */}

          {/* Color Selection */}
          <div className="mb-8">
            <h2 className="font-medium mb-2">Select Colors</h2>
            <div className="flex gap-2">
              {singleProduct?.colors?.map((color,index) => (
                <button
                  key={index}
                  className={`w-10 h-10 rounded-full ${
                    selectedColor === color ? "ring-2 ring-black ring-offset-2" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                  aria-label={`Select ${color} color`}
                />
              ))}
            </div>
          </div>

          {/* Price and Add to Cart */}
          <div className="flex gap-4 mb-8">
            <div className="px-6 py-3 border border-gray-300 rounded-full flex items-center justify-center">
              <span className="font-medium">${singleProduct?.price}</span>
            </div>
            <button onClick={handleAddToCart} className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Add To Cart
            </button>
          </div>

          {/* Benefits */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <div className="w-6 mr-3 flex-shrink-0">
                <Shield className="h-5 w-5 text-gray-600" />
              </div>
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 mr-3 flex-shrink-0">
                <Truck className="h-5 w-5 text-gray-600" />
              </div>
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 mr-3 flex-shrink-0">
                <RefreshCw className="h-5 w-5 text-gray-600" />
              </div>
              <span>Free Changes & Return</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 mr-3 flex-shrink-0">
                <Info className="h-5 w-5 text-gray-600" />
              </div>
              <span>Size & Fit</span>
            </div>
          </div>
        </div>
      </div>






{/* specification section  */}

<div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Smartphone Specifications</h1>
        <ProductSpecification singleProduct={singleProduct}/>
      </div>
    </div>




  <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-6 mt-8 px-4">Product Review</h1>

      {/* Full review section with existing reviews */}
      <ProductReviewSection userId={userId} productId={productId} reviews={reviews}
      page={page}
  setPage={setPage}
  totalPages={totalPages}
   limit={limit}      
      />

      {/* Standalone review form */}
      {/* <div className="mt-8 mb-16 px-4">
        <h2 className="text-xl font-bold mb-4">Write a Review</h2>
        <ProductReviewForm userId={userId} productId={productId}   />
      </div> */}
    </div>





    </div>
   
   </>
  )
}
