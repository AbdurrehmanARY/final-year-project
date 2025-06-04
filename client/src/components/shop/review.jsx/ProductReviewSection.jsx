"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import ProductReviewForm from "./product-review-form"
import ProductReviewForm from "./ProductReviewForm"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationNext, PaginationLink } from "@/components/ui/pagination"



export default function ProductReviewSection({userId,productId,reviews
  , page, setPage
  , totalPages 
  ,limit
}) {
  console.log('reviews in section',reviews)
  
  const [showReviewForm, setShowReviewForm] = useState(false)



  // Product data
  const product = {
    rating: 4.5,
    // reviews: 146,
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
  //     avatar: "/placeholder.svg?height=40&width=40",
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
  //     avatar: "/placeholder.svg?height=40&width=40",
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
  //     avatar: "/placeholder.svg?height=40&width=40",
  //     rating: 5,
  //     date: "1 week ago",
  //     content:
  //       "I am extremely pleased with the customer service from brand Z. When I had an issue with the product delivery, the customer service team promptly responded and assisted me in resolving the problem. They were highly professional and friendly. The product itself is outstanding as well. I am very satisfied with my shopping experience.",
  //     likes: 6,
  //     replies: 0,
  //   },
  //   {
  //     id: 4,
  //     author: "Madelyn Press",
  //     avatar: "/placeholder.svg?height=40&width=40",
  //     rating: 5,
  //     date: "1 week ago",
  //     content:
  //       "Recently purchased a pair of jeans from brand A, and I must say they are the best-fitting jeans I've ever owned. The material is stretchy yet retains its shape perfectly. The sizing guide provided on the website was accurate, ensuring a great fit. I love the trendy design and the attention to detail in the stitching. I highly recommend these jeans!",
  //     likes: 6,
  //     replies: 0,
  //   },
  //   {
  //     id: 5,
  //     author: "Brandon Aminoff",
  //     avatar: "/placeholder.svg?height=40&width=40",
  //     rating: 5,
  //     date: "1 week ago",
  //     content:
  //       "I have been a loyal customer of brand B for years, and their products never disappoint. The quality of their clothing is unmatched, and I appreciate the sustainable practices they follow. The website is user-friendly, and I always find trendy and unique pieces to add to my wardrobe. Their customer support team is also helpful and responsive. I can't recommend this brand enough!",
  //     likes: 6,
  //     replies: 0,
  //   },
  // ]

  const toggleReviewForm = () => {
    setShowReviewForm(!showReviewForm)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tabs using shadcn/ui */}
      <Tabs defaultValue="reviews" className="w-full">
        <TabsList className="border-b w-full rounded-none justify-start mb-8">
          <TabsTrigger
            value="details"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-black"
          >
            Details
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-black"
          >
            Reviews 
            {/* ({product.reviews}) */}
          </TabsTrigger>
          <TabsTrigger
            value="discussion"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-black"
          >
            Discussion
          </TabsTrigger>
        </TabsList>

        {/* Details Tab Content */}
        <TabsContent value="details" className="py-4">
          <div className="prose max-w-none">
            <p className="whitespace-pre-line text-start">{product.description}</p>
          </div>
        </TabsContent>

        {/* Reviews Tab Content */}
        <TabsContent value="reviews" className="py-4">
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
                <p className="text-sm text-gray-600">Based on
                   {/* {product.reviews} reviews */}
                   </p>

                {/* Review images preview */}
                <div className="mt-6 relative">
                  <div className="relative h-24 w-24 inline-block">
                    <img src="/placeholder.svg?height=100&width=100" alt="Review image" className="object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-medium">
                      +56
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3">
                <div className="flex items-center justify-between mb-6">
                  <button
                    className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-sm"
                    onClick={toggleReviewForm}
                  >
                    <span>{showReviewForm ? "Cancel Review" : "Write a Review"}</span>
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

                {/* Review Form */}
  
                {showReviewForm && <ProductReviewForm userId={userId} productId={productId} setShowReviewForm={setShowReviewForm} page={page} limit={limit} />}

                {/* Reviews List */}
                <div className="space-y-8">
                  {Array.isArray(reviews) && reviews.length > 0 ? (
  reviews.map((review) => (
    <div key={review.id} className="border-b border-gray-100 pb-8">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <img
              src={review.images?.[0] || "/placeholder.svg?height=40&width=40"}
              alt={review.name || "User"}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium">{review.name || "Anonymous"}</h3>
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
              <span className="ml-2 text-xs text-gray-500">
                {review.createdAt
                  ? new Date(review.createdAt).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })
                  : ""}
              </span>
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

      <p className="mt-3 text-gray-700 text-start">{review?.reviewMessage || ""}</p>

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
          likes
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
          replies
        </button>
      </div>
    </div>
  ))
) : (
  <div className="text-center text-gray-500 py-8">No reviews yet.</div>
)}
                </div>
                {/* Pagination */}
      
          <Pagination>
            <PaginationContent className="flex justify-center items-center mt-10 space-x-2">
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  aria-disabled={page === 1}
                  className={`flex items-center px-3 py-1 border rounded hover:bg-gray-50 cursor-pointer ${
                    page === 1 ? "pointer-events-none opacity-50" : ""
                  }`}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </PaginationPrevious>
              </PaginationItem>
              {Array.from({ length: totalPages }).map((_, idx) => (
                <PaginationItem key={idx + 1}>
                  <PaginationLink
                    isActive={page === idx + 1}
                    onClick={() => setPage(idx + 1)}
                    className={`px-3 py-1 border rounded cursor-pointer ${
                      page === idx + 1
                        ? "bg-orange-500 text-white"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {idx + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  aria-disabled={page === totalPages}
                  className={`flex items-center px-3 py-1 border rounded hover:bg-gray-50 cursor-pointer ${
                    page === totalPages ? "pointer-events-none opacity-50" : ""
                  }`}
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </PaginationNext>
              </PaginationItem>
            </PaginationContent>
          </Pagination>



              </div>
            </div>
          </div>
        </TabsContent>

        {/* Discussion Tab Content */}
        <TabsContent value="discussion" className="py-4">
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
                    <img src="/placeholder.svg?height=100&width=100" alt="Review image" className="object-cover" />
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
                          <img src="/placeholder.svg?height=40&width=40" alt="Ryan Baptista" className="object-cover" />
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

                  {/* More discussion items... */}
                  {/* Pagination section remains the same */}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
