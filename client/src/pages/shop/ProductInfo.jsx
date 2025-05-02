import React from 'react'
import { useState, useEffect } from "react"
import { Link } from 'lucide-react'
import { ChevronRight, ChevronLeft, Star, Info, ShoppingBag, Shield, Truck, RefreshCw } from "lucide-react"

export default function ProductInfo() {

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

  // Product images
  const productImages = [
"https://th.bing.com/th/id/OIP.YcsKzvyENFzeTSAwt2_gWAHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
"https://th.bing.com/th/id/OIP.YcsKzvyENFzeTSAwt2_gWAHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
"https://th.bing.com/th/id/OIP.YcsKzvyENFzeTSAwt2_gWAHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
"https://th.bing.com/th/id/OIP.YcsKzvyENFzeTSAwt2_gWAHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",

   
]

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
  const reviews = [
    {
      id: 1,
      author: "Kierra Bergson",

      avatar:"https://th.bing.com/th/id/OIP.YcsKzvyENFzeTSAwt2_gWAHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" ,
      rating: 5,
      date: "1 week ago",
      content:
        "I am thrilled with my recent purchase, a dress from brand X. The fabric is of high quality and feels comfortable on the skin. The design is fashionable and unique. I have received many compliments when wearing it. The shopping experience on this website was delightful, and I will definitely return to buy more products!",
      likes: 6,
      replies: 0,
    },
    {
      id: 2,
      author: "Davis Ekstrom",
      avatar:"https://th.bing.com/th/id/OIP.YcsKzvyENFzeTSAwt2_gWAHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" ,

      rating: 5,
      date: "1 week ago",
      content:
        "I want to express my appreciation to brand Y for the shoes I purchased. Not only do they look stylish, but they are also incredibly comfortable for all-day wear. I'm also impressed with their excellent quality as the shoes still look brand new despite multiple uses. I highly recommend this brand to everyone!",
      likes: 6,
      replies: 0,
    },
    {
      id: 3,
      author: "Kianna Gouse",
      avatar:"https://th.bing.com/th/id/OIP.YcsKzvyENFzeTSAwt2_gWAHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" ,

      rating: 5,
      date: "1 week ago",
      content:
        "I am extremely pleased with the customer service from brand Z. When I had an issue with the product delivery, the customer service team promptly responded and assisted me in resolving the problem. They were highly professional and friendly. The product itself is outstanding as well. I am very satisfied with my shopping experience.",
      likes: 6,
      replies: 0,
    },
  ]

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
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Images */}
        <div className="md:w-1/2">
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-4">
              {productImages.map((image, index) => (
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
                  src={productImages[currentImage] || "/placeholder.svg"}
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
                  src={productImages[currentImage] || "/placeholder.svg"}
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
                  {productImages.map((_, index) => (
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
                {productImages.map((image, index) => (
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
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= Math.floor(product.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : star <= product.rating
                        ? "text-yellow-400 fill-yellow-400 half-filled"
                        : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
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
          </div>

          {/* Color Selection */}
          <div className="mb-8">
            <h2 className="font-medium mb-2">Select Colors</h2>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  className={`w-10 h-10 rounded-full ${
                    selectedColor === color.name ? "ring-2 ring-black ring-offset-2" : ""
                  }`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setSelectedColor(color.name)}
                  aria-label={`Select ${color.name} color`}
                />
              ))}
            </div>
          </div>

          {/* Price and Add to Cart */}
          <div className="flex gap-4 mb-8">
            <div className="px-6 py-3 border border-gray-300 rounded-full flex items-center justify-center">
              <span className="font-medium">${product.price}</span>
            </div>
            <button className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
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

      {/* Tabs */}
      <div className="mt-12 border-b border-gray-200">
        <div className="flex space-x-8">
          <button
            className={`pb-4 font-medium ${
              activeTab === "details" ? "border-b-2 border-black text-black" : "text-gray-500 hover:text-black"
            }`}
            onClick={() => setActiveTab("details")}
          >
            Details
          </button>
          <button
            className={`pb-4 font-medium ${
              activeTab === "reviews" ? "border-b-2 border-black text-black" : "text-gray-500 hover:text-black"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews ({product.reviews})
          </button>
          <button
            className={`pb-4 font-medium ${
              activeTab === "discussion" ? "border-b-2 border-black text-black" : "text-gray-500 hover:text-black"
            }`}
            onClick={() => setActiveTab("discussion")}
          >
            Discussion
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-8">
        {/* Details Tab */}
        {activeTab === "details" && (
          <div className="prose max-w-none">
            <p className="whitespace-pre-line">{product.description}</p>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === "reviews" && (
          <div>
            {/* Rating Summary */}
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="md:w-1/3">
                <div className="text-5xl font-bold mb-2">{product.rating}</div>
                <div className="flex mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">Based on {product.reviews} reviews</p>

                {/* Review images preview */}
                <div className="mt-6 relative">
                  <div className="relative h-24 w-24 inline-block">
                    <img
                      src="/placeholder.svg?height=100&width=100"
                      alt="Review image"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-medium">
                      +56
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3">
                <div className="flex items-center justify-between mb-6">
                  <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-sm">
                    <span>Write a Review</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Sort by</span>
                    <select className="border-none text-sm font-medium focus:ring-0">
                      <option>Newest</option>
                      <option>Highest Rating</option>
                      <option>Lowest Rating</option>
                    </select>
                  </div>
                </div>

                {/* Reviews List */}
                <div className="space-y-8">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 pb-8">
                      <div className="flex justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative h-10 w-10 rounded-full overflow-hidden">
                            <img
                              src={review.avatar || "/placeholder.svg"}
                              alt={review.author}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{review.author}</h3>
                            <div className="flex items-center">
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className={`h-4 w-4 ${
                                      star <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="ml-2 text-xs text-gray-500">{review.date}</span>
                            </div>
                          </div>
                        </div>

                        <button className="text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                          </svg>
                        </button>
                      </div>

                      <p className="mt-3 text-gray-700">{review.content}</p>

                      <div className="flex items-center gap-4 mt-4">
                        <button className="flex items-center text-gray-500 text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                            />
                          </svg>
                          {review.likes}
                        </button>
                        <button className="flex items-center text-gray-500 text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                          {review.replies}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center mt-10 space-x-2">
                  <button className="flex items-center px-3 py-1 border rounded hover:bg-gray-50">
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </button>
                  <button className="px-3 py-1 border rounded hover:bg-gray-50">1</button>
                  <button className="px-3 py-1 border rounded bg-orange-500 text-white">2</button>
                  <button className="px-3 py-1 border rounded hover:bg-gray-50">3</button>
                  <span className="px-2">...</span>
                  <button className="px-3 py-1 border rounded hover:bg-gray-50">10</button>
                  <button className="flex items-center px-3 py-1 border rounded hover:bg-gray-50">
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Discussion Tab */}
        {/* Discussion Tab */}
        {activeTab === "discussion" && (
          <div>
            {/* Rating Summary */}
            <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
              <div className="md:w-1/3">
                <div className="text-5xl font-bold mb-2">4.5</div>
                <div className="flex mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">Based on 146 reviews</p>

                {/* Review images preview */}
                <div className="mt-6 relative">
                  <div className="relative h-24 w-24 inline-block">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Section%20%288%29-eoLvPNmOrkVIJTTc04sUvSgsmDC3i5.png"
                      alt="Review image"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-medium">
                      +56
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3">
                <div className="flex items-center justify-between mb-6">
                  <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-sm">
                    <span>Start Discussion</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Sort by</span>
                    <select className="border-none text-sm font-medium focus:ring-0">
                      <option>Newest</option>
                      <option>Highest Rating</option>
                      <option>Lowest Rating</option>
                    </select>
                  </div>
                </div>

                {/* Discussion List */}
                <div className="space-y-8">
                  {/* Ryan Baptista */}
                  <div className="border-b border-gray-100 pb-8">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Ryan Baptista"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">Ryan Baptista</h3>
                          <div className="flex items-center">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              ))}
                            </div>
                            <span className="ml-2 text-xs text-gray-500">1 week ago</span>
                          </div>
                        </div>
                      </div>

                      <button className="text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </button>
                    </div>

                    <p className="mt-3 text-gray-700">
                      Hi everyone! I just bought a pair of sneakers from this brand, and I absolutely love them! The
                      design is cool and they're really comfortable. Has anyone else had any experience with this brand?
                    </p>

                    <div className="flex items-center gap-4 mt-4">
                      <button className="flex items-center text-gray-500 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          />
                        </svg>
                        6
                      </button>
                      <button className="flex items-center text-gray-500 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        2
                      </button>
                      <button className="text-gray-500 text-sm">Hide replies</button>
                    </div>
                  </div>

                  {/* Marilyn Kenter */}
                  <div className="border-b border-gray-100 pb-8">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Marilyn Kenter"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">Marilyn Kenter</h3>
                          <div className="flex items-center">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              ))}
                            </div>
                            <span className="ml-2 text-xs text-gray-500">1 week ago</span>
                          </div>
                        </div>
                      </div>

                      <button className="text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </button>
                    </div>

                    <p className="mt-3 text-gray-700">
                      I've tried sneakers from brand X too, and I agree with you! The quality is great, and they're also
                      reasonably priced. I've been wearing mine for a few months now, and they still look brand new.
                    </p>

                    <div className="flex items-center gap-4 mt-4">
                      <button className="flex items-center text-gray-500 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        0
                      </button>
                    </div>
                  </div>

                  {/* Jocelyn Franci */}
                  <div className="border-b border-gray-100 pb-8">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Jocelyn Franci"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">Jocelyn Franci</h3>
                          <div className="flex items-center">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              ))}
                            </div>
                            <span className="ml-2 text-xs text-gray-500">2 weeks ago</span>
                          </div>
                        </div>
                      </div>

                      <button className="text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </button>
                    </div>

                    <p className="mt-3 text-gray-700">
                      I haven't tried brand X yet, but I've seen them in stores. The designs do look appealing, but I'm
                      concerned about the comfort. Are their shoes comfortable for long-term wear?
                    </p>

                    <div className="flex items-center gap-4 mt-4">
                      <button className="flex items-center text-gray-500 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          />
                        </svg>
                        6
                      </button>
                      <button className="flex items-center text-gray-500 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        2
                      </button>
                    </div>
                  </div>

                  {/* Tiana Geidt */}
                  <div className="border-b border-gray-100 pb-8">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Tiana Geidt"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">Tiana Geidt</h3>
                          <div className="flex items-center">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              ))}
                            </div>
                            <span className="ml-2 text-xs text-gray-500">1 week ago</span>
                          </div>
                        </div>
                      </div>

                      <button className="text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </button>
                    </div>

                    <p className="mt-3 text-gray-700">
                      Based on my experience, shoes from brand X are really comfortable. The soles are cushioned and
                      provide good support. I can wear them all day without feeling tired.
                    </p>

                    <div className="flex items-center gap-4 mt-4">
                      <button className="flex items-center text-gray-500 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          />
                        </svg>
                        6
                      </button>
                      <button className="flex items-center text-gray-500 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        1
                      </button>
                      <button className="text-gray-500 text-sm">Show replies</button>
                    </div>
                  </div>
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center mt-10 space-x-2">
                  <button className="flex items-center px-3 py-1 border rounded hover:bg-gray-50">
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </button>
                  <button className="px-3 py-1 border rounded hover:bg-gray-50">1</button>
                  <button className="px-3 py-1 border rounded bg-orange-500 text-white">2</button>
                  <button className="px-3 py-1 border rounded hover:bg-gray-50">3</button>
                  <span className="px-2">...</span>
                  <button className="px-3 py-1 border rounded hover:bg-gray-50">8</button>
                  <button className="px-3 py-1 border rounded hover:bg-gray-50">9</button>
                  <button className="px-3 py-1 border rounded hover:bg-gray-50">10</button>
                  <button className="flex items-center px-3 py-1 border rounded hover:bg-gray-50">
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
   
   </>
  )
}
