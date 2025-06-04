"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useDispatch } from "react-redux"
import { addReview, getReviews } from "@/store/shop/review"
import { toast } from "sonner"

export default function ProductReviewForm({userId,productId,setShowReviewForm,page,limit}) {
  
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
    const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([])
  const dispatch=useDispatch()


 const { register, handleSubmit, reset, setValue, watch } = useForm(
  {
    defaultValues : {
      name: "",
      email: "",
      reviewMessage: "", 
    }

  })


  const handleRatingClick = (selectedRating) => {
    
    
    setRating(selectedRating)
    
  }

  const handleRatingHover = (hoveredRating) => {
    setHoveredRating(hoveredRating)
  }

  const handleRatingLeave = () => {
    setHoveredRating(0)
  }


  const handleImageUpload = async (e) => {
  
      const files = Array.from(e.target.files || []);
      const formData = new FormData();
      files.forEach((file) => {
        formData.append("productImage", file
        ); // Append each file to the FormData object
      });
  
  
      try {
        setUploading(true)
        const response = await axios.post(`http://localhost:5000/api/v1/admin/upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Set the correct content type
          },
        })
        
        const imageLink = response.data.result
      
        setImages((prev) => [...prev, imageLink]); // Add the new link to the image state
        
      }
      catch (e) {
        console.log(e)
  
      }
      finally {
        setUploading(false)
  
      }
    };

  const submitReview = (data) => {
 
     const formData2Send = {
    ...data,
    userId,
    productId,
    rating,
    images
  }
dispatch(addReview(formData2Send)).then((data)=>{
  console.log("data",data.payload.message)
  if(data.payload.success){
   toast.success(data?.payload?.message)
   dispatch(getReviews({productId}))
    setRating(0)
    setImages([])
    reset()
     dispatch(getReviews({productId,page, limit}))
    setShowReviewForm(false)
  }
  else{
    toast.error(data?.payload?.message)
    setShowReviewForm(false)
  }
})


  }
  


  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Write a Review</h2>
      </div>

      <form onSubmit={handleSubmit(submitReview)} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Quality</label>
          <div className="flex gap-1" onMouseLeave={handleRatingLeave}>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleRatingClick(star)}
                onMouseEnter={() => handleRatingHover(star)}
                className="focus:outline-none"
              >
                <Star
                  className={`h-6 w-6 ${
                    star <= (hoveredRating || rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Input
            type="text"
            placeholder="Enter your name"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            {...register("name")}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Email address"
            {...register("email")}
          
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="space-y-2">
          <Textarea
            placeholder="Enter your review"
                       {...register("reviewMessage")}

            required
            className="w-full p-2 border rounded min-h-[150px]"
          />
        </div>

        <div className="flex justify-between items-center">
          <div>
            <Button
              type="button"
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => document.getElementById("reviewImage")?.click()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              Add Photos
            </Button>
            <input
              id="reviewImage"
              type="file"
              accept="image/*"
              multiple
               onChange={handleImageUpload}
                          className="hidden"
                          disabled={uploading}
            />
          </div>

          <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
            Send Review
          </Button>
        </div>

        {images.length > 0 && (
          <div className="mt-4">
            <p className="text-sm font-medium mb-2">Selected Images ({images.length})</p>
            <div className="flex flex-wrap gap-2">
              {images.map((image, index) => (
                <div key={index} className="relative w-16 h-16 border rounded overflow-hidden">
                  <img
                    src={image}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
