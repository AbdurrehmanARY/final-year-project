import React from 'react'

function Hero() {
  return (
      <section className="relative bg-gradient-to-br from-orange-600 via-red-600 to-yellow-600 min-h-screen flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-bold leading-tight transform transition-all duration-1000 hover:scale-105">
                Latest
                <span className="block text-yellow-300 animate-bounce">Mobile</span>
                Collection
              </h2>
              <p className="text-xl md:text-2xl text-orange-100 max-w-lg opacity-0 animate-fade-in animation-delay-500">
                Discover the newest smartphones with cutting-edge technology and stunning designs
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in animation-delay-1000">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                Shop Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all transform hover:scale-105">
                View Collection
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8 opacity-0 animate-fade-in animation-delay-1500">
              <div className="text-center transform hover:scale-110 transition-transform">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-orange-200">Products</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform">
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-orange-200">Happy Customers</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform">
                <div className="text-3xl font-bold">4.9</div>
                <div className="text-orange-200">Rating</div>
              </div>
            </div>
          </div>

          {/* Right content - Featured phone */}
          <div className="relative opacity-0 animate-fade-in animation-delay-700">
            <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl p-1 shadow-2xl">
                <div className="bg-black rounded-2xl h-96 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl mx-auto mb-4 flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                      <span className="text-4xl">📱</span>
                    </div>
                    <h3 className="text-xl font-semibold">iPhone 15 Pro</h3>
                    <p className="text-gray-300">Starting at $999</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                  🔥 Trending Now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
