import { Link, useNavigate } from "react-router-dom"
import { Search, Moon, Heart, Truck, CreditCard, HeadphonesIcon, ChevronDown, Quote, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import ProductCard from "../../components/shop/ProductCard"
import Testimonial from "./home/Testimonial"
import ServiceSection from "./home/ServiceSection"
import NewsSection from "./home/NewsSection"
import Footer from "./Footer"
import BrandSection from "./home/BrandSection"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAllProducts } from "@/store/admin/products-slice"

function Home() {
const navigate=useNavigate()
const dispatch=useDispatch()
useEffect(() => {
  dispatch(getAllProducts());
}, [dispatch]);


  const products=useSelector((state)=>state.adminProducts)

// const product=useSelector((state)=>state.listOfProduct)
const {listOfProduct}=products
console.log(products)
console.log(listOfProduct)

  return (
    <>
     <div className="min-h-screen ">
      {/* Header */}
      

      <main >
        {/* Hero Section */}
        <section className="bg-[url('/images/Group 1.png')] rounded-3xl overflow-hidden  ">
          <div className="container  px-4 md:px-12 py-8 md:py-8  ">
            <div className="flex flex-col md:flex-row items-center ">
              <div className="md:w-1/2 space-y-6 md:pr-8 py-8 ">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-inter">
                  TRENDY FASHION
                  
                  <span className="block font-normal font-inter">COLLECTION</span>
                </h1>
                <p className="text-[#525252] max-w-md">
                  Finding your fashion has never been easier. Unleash the best version of yourself, fashion comes from
                  our style and confidence.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-sm text-white rounded-full px-6">Shop Now</Button>

                <div className="flex space-x-8 pt-4">
                  <div>
                    <div className="text-4xl font-normal">80+</div>
                    <div className="text-xs text-gray-500">Unique Style</div>
                  </div>
                  <div>
                    <div className="text-4xl font-normal">40+</div>
                    <div className="text-xs text-gray-500">Best Trusted</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-gray-300 -ml-1 border-2 border-white"></div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500">96+ Brands featured in our latest collection</div>
                </div>
              </div>

              <div className="md:w-1/2 relative">
                <img
                  src="/images/Minimalist Fashion Brand Catalog Mobile Presentation  1.png"
                  alt="Fashion model"
                
                  className="object-cover"
                  priority
                />
                {/* <div className="absolute top-1/4 right-1/4 bg-black bg-opacity-80 rounded-full p-3 hidden md:block">
                  <div className="w-16 h-16 rounded-full border-2 border-gray-400 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-xs">BEST</div>
                      <div className="text-xs">SELLER</div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12 px-4 md:px-8">
          <h2 className=" text-5xl  font-normal mb-8">Our Products</h2>

          <Tabs defaultValue="all" className="w-full   ">
            <TabsList className="mb-8 bg-transparent    flex justify-center gap-6">
              <TabsTrigger value="women" className="data-[state=active]:bg-black data-[state=active]:text-white font-medium text-base py-3 px-5   border border-gray-200  rounded-full ">
                Women
                <ChevronDown />
              </TabsTrigger>
              <TabsTrigger value="all" className="data-[state=active]:bg-black data-[state=active]:text-white font-medium text-base  rounded-full h-full">
                All
              </TabsTrigger>
              <TabsTrigger value="tshirt" className="data-[state=active]:bg-black data-[state=active]:text-white font-medium py-3 px-5  text-base  rounded-full">
                T-Shirt
              </TabsTrigger>
              <TabsTrigger value="skirt" className="data-[state=active]:bg-black data-[state=active]:text-white py-3 px-5 font-medium text-base rounded-full">
                Skirt
              </TabsTrigger>
              <TabsTrigger value="pants" className="data-[state=active]:bg-black data-[state=active]:text-white py-3 px-5 font-medium text-base rounded-full">
                Pants
              </TabsTrigger>
              <TabsTrigger value="accessories" className="data-[state=active]:bg-black data-[state=active]:text-white py-3 px-5 font-medium text-base rounded-full">
                Accessories
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Product Card 1 */}

{listOfProduct.map((product,index)=>(<ProductCard index={index} product={product}/>))}

               


                             
                              </div>

              <div className="flex justify-center mt-8">
                <Button
                onClick={()=>navigate('/listing')}
                variant="outline" className="rounded-full border border-[#E16F3D] text-[#E16F3D] hover:text-[#E16F3D]  ">
                  See All Products
                </Button>
              </div>
            </TabsContent>

            {/* Other tabs content would go here */}
          </Tabs>
        </section>

        {/* New Style Section */}
        <section className="py-12 px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <h2 className="text-5xl font-normal">New Style for Latest Collections</h2>
            <p className="  font-normal text-base    text-gray-600 max-w-md mt-2 md:mt-0">
              Discover our latest collection of clothing, shoes, and accessories that are perfect for any occasion. From
              casual wear to formal attire, we have everything you need to express your unique style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* New Casual Style */}
            <div className="bg-[url('images/handsome.png')] bg-cover bg-no-repeat rounded-lg p-8 relative flex overflow-hidden">
              <div className="  ">
                <h3 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-5xl text-3xl   w-1/2  text-wrap font-normal  mb-6">
                  NEW
                  CASUAL
                  STYLE
                </h3>
                <Badge className="font-normal text-base block  bg-transparent text-[#525252] mb-4">Collection</Badge>

                <Button variant="outline" className="m-2 font-medium text-sm     bg-black text-white hover:bg-gray-800 rounded-full">
                  Shop Now
                </Button>
              </div>
              
            </div>

            {/* Spring Dating */}
            <div className="grid grid-rows-2 gap-6 w-full">
              <div className="bg-[url('images/beauti.png')]  bg-cover bg-no-repeat rounded-lg p-0 relative overflow-hidden flex flex-col ">
                <div className=" p-6">
                <span className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base">SPRING</span>

                  <h3 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-5xl text-3xl font-medium">
                  DATING
                  </h3>

                  <Badge className="bg-transparent text-base text-[#525252] mt-2">Collection</Badge>
                </div>
                <div className="w-auto h-full">
               
              </div>
              </div>

              <div className="bg-[url('images/orange.png')]  bg-cover bg-no-repeat rounded-lg p-6  text-[#E2DBCB] relative overflow-hidden">
                <div className="flex justify-between items-center ">
                <div className="">
                  <h3 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-5xl text-3xl  font-normal mb-2">
                    GET
                  <br />
                    $15 OFF
                  </h3>
                  <p className="text-base font-normal">
                  For all item in our store or website
                  </p>
                </div>

                </div>
                {/* <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 border border-white/50 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 border border-white/50 rounded-full"></div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <BrandSection/>

        {/* Testimonials Section */}
        <Testimonial/>
        



        {/* Inspiration Section */}
        <section className="py-12 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Outfit Inspiration */}
            <div className="bg-[url('images/orange2.png')]  bg-cover bg-no-repeat rounded-lg p-8 text-white">
              <div className="mb-6">
                {/* <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4"> */}
                
                {/* </div > */}
                <h3 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-5xl text-3xl font-normal text-[#E2DBCB] ">
                  OUTFIT
                
                  INSPIRATION
                  
                  OF THE DAY
                </h3>
              </div>
              <p className="text-base  font-medium text-[#E2DBCB]">80+ Molestie hendrerit amet sapien volutpat. </p>
            </div>

            {/* New Casual Style */}
            <div className="bg-[url('images/blond.png')]  bg-cover bg-no-repeat rounded-lg p-8  overflow-hidden flex">
              <div>
                <h3 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-5xl text-3xl font-normal mb-2">
                  NEW
                <br />
                  CASUAL
                  <br />
               
                  STYLE
                </h3>
              </div>
             
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServiceSection/>

        {/* Newsletter Section */}
         <NewsSection/>
      
      </main>

     
    </div>
    </>
  )
}

export default Home