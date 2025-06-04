import React from 'react'


    

function BrandSection() {

const brand = [
  { label: "Samsung",logo:"src/assets/samsung-seeklogo.svg" },
  { label: "Apple",logo:"src/assets/iphone-seeklogo.png" },
  { label: "Xiaomi",logo:"src/assets/xiaomi-seeklogo.png" },
  // { label: "HTC" ,logo:"src/assets/huawei-seeklogo.svg"},
  { label: "Realme",logo:"src/assets/realme-seeklogo.png" },
  { label: "OnePlus",logo:"src/assets/oneplus-seeklogo.png" },
  { label: "Oppo",logo:"src/assets/oppo-seeklogo.svg" },
  { label: "Vivo",logo:"src/assets/vivo-seeklogo.png" },
  { label: "Huawei",logo:"src/assets/huawei-seeklogo.svg" },
  { label: "Infinix" ,logo:"src/assets/infinix-seeklogo.svg"},
  // { label: "Tecno" ,logo:"src/assets/motorola-seeklogo.png"},
  { label: "LG" ,logo:"src/assets/lg-mobile-seeklogo.png"},
  { label: "Motorola" ,logo:"src/assets/motorola-seeklogo.png"},
  // { label: "Nokia",logo:"src/assets/huawei-seeklogo.svg" },
  // { label: "Sony",logo:"src/assets/huawei-seeklogo.svg" },
  // { label: "Asus" ,logo:"src/assets/huawei-seeklogo.svg"},
  // { label: "Google" ,logo:"src/assets/huawei-seeklogo.svg"},
  // { label: "Honor" ,logo:"src/assets/huawei-seeklogo.svg"},
  // { label: "ZTE" ,logo:"src/assets/huawei-seeklogo.svg"},
  // { label: "Lenovo" ,logo:"src/assets/huawei-seeklogo.svg"},
  { label: "Itel" ,logo:"src/assets/itel-seeklogo.png"},
  // { label: "HTC" ,logo:"src/assets/huawei-seeklogo.svg"}
];



  // const brands = [
  //   { name: 'Apple', logo: '🍎' },
  //   { name: 'Samsung', logo: '📱' },
  //   { name: 'Infinix', logo: '∞' },
  //   { name: 'Tecno', logo: 'T' },
  //   { name: 'Xiaomi', logo: 'Mi' },
  //   { name: 'OnePlus', logo: '1+' },
  //   { name: 'Oppo', logo: 'O' },
  //   { name: 'Vivo', logo: 'V' },
  //   { name: 'Realme', logo: 'R' },
  //   { name: 'Google', logo: 'G' },
  //   { name: 'Sony', logo: 'S' },
  //   { name: 'Nokia', logo: 'N' }
  // ];
  return (
   <>
   {/* <section className="py-12 px-4 md:px-8 text-center">
          <h2 className="text-5xl font-normal mb-8">We Are Supported By</h2>
          <div className="flex flex-wrap justify-evenly  items-center gap-8 md:gap-6">
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all border border-[#E5E5E5] py-6 px-10 rounded-2xl">
              <img src="/images/Group.png" alt="" />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all   border border-[#E5E5E5] py-6 px-10 rounded-2xl">
            <img src="/images/Group (1).png" alt="" />

            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all h-full  border border-[#E5E5E5] py-6 px-10 rounded-2xl">
            <img src="/images/Group (2).png" alt="" />
              
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all   border border-[#E5E5E5] py-6 px-10 rounded-2xl">
            <img src="/images/chanel.png" alt="" />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all   border border-[#E5E5E5] py-6 px-10 rounded-2xl">
            <img src="/images/Vector.png" alt="" />
             
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all  border border-[#E5E5E5] py-6 px-10 rounded-2xl ">
            <img src="/images/Zara_(retailer)-Logo.wine 1.png" alt="" />

              
            </div>
          </div>
        </section> */}

              <section className="py-20 bg-gradient-to-r from-orange-50 via-white to-red-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Mobile Brands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore premium smartphones from the world's leading mobile manufacturers
          </p>
        </div>

        {/* Scrolling brands container */}
        <div className="relative">
          <div className="flex animate-pulse">
            <div className="flex space-x-16 animate-marquee">
              {brand.map((item, index) => (
                <div
                  key={`${item.label}-1-${index}`}
                  className="flex-shrink-0 group cursor-pointer transform hover:scale-110 transition-all duration-300"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-orange-200 min-w-[180px]">
                    <div className="text-center">
                      <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                        <img src={item.logo} alt={item.label} className="h-12 mx-auto" />
                      </div>
                      {/* <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                        {item.label}
                      </h3> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex space-x-16 animate-marquee">
              {brand.map((item, index) => (
                <div
                  key={`${item.label}-2-${index}`}
                  className="flex-shrink-0 group cursor-pointer transform hover:scale-110 transition-all duration-300"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-orange-200 min-w-[180px]">
                    <div className="text-center">
                      <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                        <img src={item.logo} alt={item.label} className="h-12 mx-auto" />
                      </div>
                      {/* <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                        {item.label}
                      </h3> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-orange-600 mb-2">12+</div>
            <div className="text-gray-600">Premium Brands</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600">Mobile Models</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-orange-600 mb-2">50K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-orange-600 mb-2">4.9★</div>
            <div className="text-gray-600">Customer Rating</div>
          </div>
        </div>
      </div>
    </section>
   
   </>
  )
}

export default BrandSection