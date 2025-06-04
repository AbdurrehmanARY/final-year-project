import { Link, useNavigate } from "react-router-dom"
import { Search, Moon, Heart, Truck, CreditCard, HeadphonesIcon, ChevronDown, Quote, ShieldCheck, Star, ChevronRight, ChevronLeft, Smartphone, Watch, Tablet, GamepadIcon, Speaker, Camera, Battery, ArrowRight, Shield, Zap, Headphones, Users, Award } from "lucide-react"
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
import { useEffect, useState } from "react"
import { getAllProducts } from "@/store/admin/products-slice"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { testimonials } from "@/config"
import { Card, CardContent } from "@/components/ui/card"
import LandingImage from "@/components/shop/home/LandingImage"
import { category } from "@/config"
import Hero from "./home/Hero"
import HeroSlider from "@/components/shop/HeroSlider"
// import Hero from "daisyui/components/hero"

function Home() {
const navigate=useNavigate()
const dispatch=useDispatch()
const isAuth=useSelector((state)=>state.auth)
   const {isAuthenticated,user,isLoading}=isAuth
   console.log(category,"category is")
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      id: 1,
      title: "Latest iPhone Collection",
      subtitle: "Experience the future of mobile technology",
      image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=1200&h=800&fit=crop",
      cta: "Shop iPhones",
      discount: "Up to 25% OFF"
    },
    {
      id: 2,
      title: "Premium Android Devices",
      subtitle: "Flagship smartphones at unbeatable prices",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&h=800&fit=crop",
      cta: "Explore Android",
      discount: "Best Deals"
    },
    {
      id: 3,
      title: "Mobile Accessories",
      subtitle: "Complete your mobile experience",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200&h=800&fit=crop",
      cta: "Shop Accessories",
      discount: "New Arrivals"
    }
  ]


  const categories = [
    {
      id: 1,
      name: "Smartphones",
      icon: Smartphone,
      description: "Latest mobile phones",
      itemCount: "50+ Items",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      name: "Accessories",
      icon: HeadphonesIcon,
      description: "Mobile accessories",
      itemCount: "100+ Items",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      name: "Wearables",
      icon: Watch,
      description: "Smart watches & fitness",
      itemCount: "30+ Items",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      name: "Tablets",
      icon: Tablet,
      description: "iPads & Android tablets",
      itemCount: "25+ Items",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      name: "Gaming",
      icon: GamepadIcon,
      description: "Mobile gaming gear",
      itemCount: "40+ Items",
      color: "from-red-500 to-red-600"
    },
    {
      id: 6,
      name: "Audio",
      icon: Speaker,
      description: "Speakers & earbuds",
      itemCount: "60+ Items",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: 7,
      name: "Cameras",
      icon: Camera,
      description: "Mobile photography",
      itemCount: "20+ Items",
      color: "from-pink-500 to-pink-600"
    },
    {
      id: 8,
      name: "Power Banks",
      icon: Battery,
      description: "Chargers & power",
      itemCount: "35+ Items",
      color: "from-teal-500 to-teal-600"
    }
  ];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
};



  

useEffect(() => { 
  dispatch(getAllProducts());
}, [dispatch]);


  const products=useSelector((state)=>state.adminProducts)

// const product=useSelector((state)=>state.listOfProduct)
const {listOfProduct}=products
   console.log('listOfProduct',listOfProduct)

if(isLoading)return <div> ..... Loading</div>

  return (
    <>
     <div className="min-h-screen ">
      {/* Header */}
      

      <main >
        {/* Hero Section */}
        {/* <LandingImage/> */}
        {/* <Hero/> */}

<HeroSlider
  slides={heroSlides}
  currentSlide={currentSlide}
  setCurrentSlide={setCurrentSlide}
  isVisible={isVisible}
  onPrev={prevSlide}
  onNext={nextSlide}
/>
              
        
        {/* <section className="bg-[url('/images/Group 1.png')] rounded-3xl overflow-hidden  ">
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
                
              </div>
            </div>
          </div>

        </section> */}



      <section className="container mx-auto px-4 py-12 sm:py-16">
        <div className="text-center mb-12">
          <Badge className="rounded-3xl  bg-gradient-to-r from-orange-500 to-red-500 text-white mb-4 text-sm px-4 py-2">
            Shop by Category
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
            Explore Categories
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our wide range of mobile products and accessories
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {category.description}
                </p>
                <Badge variant="outline" className="text-xs border-orange-200 text-orange-700 bg-orange-50">
                  {category.itemCount}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

        {/* Products Section */}
            {/* Featured Products */}
      <section className="container mx-auto px-4 py-12 sm:py-20">
        <div className="text-center mb-12">
          <Badge className="rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 text-white mb-4 text-sm px-4 py-2">
            Mobile Collection
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
            Featured Products
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the latest smartphones, accessories, and wearables with exclusive mobile deals
          </p>
        </div>

       <Tabs defaultValue="all" className="w-full ">
 <TabsList className=" mb-8 flex  justify-center items-center self-center gap-3 bg-transparent">
  <TabsTrigger
    value="all"
    className="transition-all duration-300 ease-in-out
               font-medium text-base rounded-full h-full px-5 py-2
               hover:scale-105 hover:shadow-md
               data-[state=active]:bg-orange-600 data-[state=active]:text-white"
  >
    All
  </TabsTrigger>

  {category.map((cat) => (
    <TabsTrigger
      key={cat.id}
      value={cat.id}
      className="transition-all duration-300 ease-in-out
                 font-medium text-base rounded-full px-5 py-2
                 hover:scale-105 hover:shadow-md
                 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
    >
      {cat.label}
    </TabsTrigger>
  ))}
</TabsList>


  {/* All Products */}
  <TabsContent value="all" className="mt-0">
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {listOfProduct.map((product, index) => (
          <CarouselItem key={index} className="pl-1 sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
            <ProductCard index={index} product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    <div className="flex justify-center mt-8">
      <Button
        onClick={() => navigate('/listing')}
        variant="outline"
        className="rounded-full border border-[#E16F3D] text-[#E16F3D] hover:text-[#E16F3D]"
      >
        See All Products
      </Button>
    </div>
  </TabsContent>

  {/* Category-specific Products */}
  {category.map((cat) => (
    <TabsContent key={cat.id} value={cat.id} className="mt-0">
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {listOfProduct
            .filter(product => product.category === cat.label)
            .map((product, index) => (
              
             <>
             
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <ProductCard index={index} product={product} />
              </CarouselItem>
             </>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex justify-center mt-8">
        <Button
          onClick={() => navigate('/listing')}
          variant="outline"
          className="rounded-full border border-[#E16F3D] text-[#E16F3D] hover:text-[#E16F3D]"
        >
          See All Products
        </Button>
      </div>
    </TabsContent>
  ))}
         </Tabs>
      </section>



        





        {/* New Style Section */}
      


              {/*  */}

        {/* Brands Section */}
        <BrandSection/>

     



        {/* Inspiration Section */}
        {/* <section className="py-12 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Outfit Inspiration 
            <div className="bg-[url('images/orange2.png')]  bg-cover bg-no-repeat rounded-lg p-8 text-white">
              <div className="mb-6">
                {/* <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4"> */}
                
                {/* </div > 
                <h3 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-5xl text-3xl font-normal text-[#E2DBCB] ">
                  OUTFIT
                
                  INSPIRATION
                  
                  OF THE DAY
                </h3>
              </div>
              <p className="text-base  font-medium text-[#E2DBCB]">80+ Molestie hendrerit amet sapien volutpat. </p>
            </div>

            {/* New Casual Style 
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
        {/* <ServiceSection/> */}

              {/* Our Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-600 border-orange-200 mb-4">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete Mobile Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From device sales to comprehensive support, we provide everything you need for your mobile lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Device Sales & Trade-ins",
                description:
                  "Latest smartphones, tablets, and wearables with competitive trade-in values for your old devices",
                features: ["New & Refurbished Devices", "Trade-in Program", "Flexible Payment Plans"],
                color: "from-orange-500 to-red-500",
              },
              {
                icon: Shield,
                title: "Extended Warranty",
                description:
                  "Comprehensive protection plans covering accidental damage, liquid damage, and hardware failures",
                features: ["Accidental Damage Coverage", "Liquid Damage Protection", "Hardware Replacement"],
                color: "from-red-500 to-pink-500",
              },
              {
                icon: Zap,
                title: "Device Setup & Transfer",
                description:
                  "Professional setup service including data transfer, app installation, and personalization",
                features: ["Data Migration", "App Installation", "Personal Setup"],
                color: "from-orange-400 to-amber-500",
              },
              {
                icon: Headphones,
                title: "Technical Support",
                description: "24/7 expert technical support for troubleshooting, repairs, and device optimization",
                features: ["24/7 Live Support", "Remote Assistance", "In-Store Repairs"],
                color: "from-amber-500 to-yellow-500",
              },
              {
                icon: Battery,
                title: "Accessories & Parts",
                description: "Genuine accessories, replacement parts, and custom solutions for all your devices",
                features: ["Genuine Parts", "Custom Cases", "Bulk Orders"],
                color: "from-pink-500 to-rose-500",
              },
              {
                icon: Truck,
                title: "Express Delivery",
                description: "Same-day delivery in metro areas, express shipping nationwide with real-time tracking",
                features: ["Same-Day Delivery", "Express Shipping", "Real-time Tracking"],
                color: "from-rose-500 to-red-500",
              },
            ].map((service, index) => (
              <Card
                key={service.title}
                className={`group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-gradient-to-br from-white to-gray-50 animate-in fade-in-50 slide-in-from-bottom-6`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-start text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className=" text-start text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    className="mt-6 text-orange-600 hover:text-orange-700 hover:bg-orange-50 p-0 h-auto font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>




            {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/30 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-red-200/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">Why Choose Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Your Trusted Mobile Partner</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who trust us for their mobile needs
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "50K+", label: "Happy Customers", icon: Users },
              { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
              { number: "24/7", label: "Support Available", icon: Headphones },
              { number: "500+", label: "Products Available", icon: Smartphone },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center group animate-in fade-in-50 slide-in-from-bottom-4`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-orange-200 shadow-lg hover:shadow-xl">
                  <stat.icon className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Industry Recognition",
                description: "Winner of 'Best Mobile Retailer 2024' and certified by major manufacturers",
                highlight: "Award Winning",
              },
              {
                icon: Shield,
                title: "Secure Shopping",
                description: "SSL encrypted checkout, secure payment processing, and data protection guarantee",
                highlight: "100% Secure",
              },
              {
                icon: Zap,
                title: "Lightning Fast Service",
                description: "Average response time under 2 minutes, same-day processing for most orders",
                highlight: "Ultra Fast",
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified technicians and mobile specialists with 10+ years of experience",
                highlight: "Certified Experts",
              },
              {
                icon: Heart,
                title: "Customer First",
                description: "30-day money-back guarantee, hassle-free returns, and lifetime support",
                highlight: "Customer Love",
              },
              {
                icon: Truck,
                title: "Global Reach",
                description: "Shipping to 50+ countries with local support and international warranty",
                highlight: "Worldwide",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className={`group p-6 rounded-2xl bg-white border border-orange-100 hover:bg-orange-50 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-in fade-in-50 slide-in-from-bottom-6`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-start text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {feature.title}
                      </h3>
                      <Badge className="ml-2 bg-orange-100 text-orange-700 border-orange-200 text-xs">
                        {feature.highlight}
                      </Badge>
                    </div>
                    <p className="text-start text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

         {/* Testimonials Section */}
        {/* <Testimonial testimonials={testimonials}/> */}
        <section className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 py-16 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 mb-12 relative z-10">
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-4 text-sm px-4 py-2 backdrop-blur-sm">
              Customer Reviews
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">What Our Customers Say</h2>
            <p className="text-lg sm:text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied mobile enthusiasts who trust us for their tech needs
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="flex animate-scroll space-x-6">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={`${testimonial.id}-${index}`} className="flex-shrink-0 w-80 sm:w-96 bg-white/15 backdrop-blur-lg border-white/20 text-white shadow-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 ring-4 ring-white/30"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-orange-100 text-sm">{testimonial.location}</p>
                      <div className="flex items-center gap-2 mt-1">
                        {testimonial.verified && (
                          <Badge className="bg-green-500 text-white text-xs">
                            Verified
                          </Badge>
                        )}
                        <Badge className="bg-blue-500 text-white text-xs">
                          {testimonial.device}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-orange-100 leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



        {/* Newsletter Section */}
         <NewsSection/>
      
      </main>

     
    </div>
    </>
  )
}

export default Home