import { Heart, ShoppingBag } from 'lucide-react'
import React from 'react'

function ProductCard({product,index}) {
  console.log(product)
  return (
    <>
    <div className="bg-transparent  overflow-hidden group ">
                      <div className="relative ">
                        <img
                          src={product.image[0]}
                          alt="Winter Coat"
                          
                          className="w-full object-cover rounded-4xl"
                        />
                        <div className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Heart className="h-4 w-4" />
                        </div>
                      </div>
                      <div className="p-4 mt-1">
                       <div className="flex items-center justify-between">
                        <div>
                        <h3 className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-2xl text-xl font-medium">{product.productName}</h3>
                        <p className="font-normal text-normal  text-[#A3A3A3]">{product.category}</p>
                        </div>
                        <div>
                        <p className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base  sm:text-2xl text-xl  font-medium border rounded-full px-6 py-1">{product.price}</p>
    
                        </div>
                       </div>
                      </div>
                    </div>


              {/* <div className="bg-transparent rounded-lg overflow-hidden group">
                <div className="relative h-80 w-full">
                  <img src='/images/img.png' fill className="w-full object-cover rounded-4xl " />
                  <div className="absolute inset-0  group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <button
                      // onClick={() => addToCart(product.id)}
                      className="bg-white text-black px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium">ARY</h3>
                    <span className="font-medium">$price</span>
                  </div>
                  <p className="text-gray-500 text-sm">category</p>
                </div>
              </div> */}
           
    
    </>
  )
}

export default ProductCard