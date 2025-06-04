import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

function HeroSlider({ slides, currentSlide, setCurrentSlide, isVisible, onPrev, onNext }) {
  return (
    <section className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="w-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-start pl-6 sm:pl-8 md:pl-16">
              <div className={`text-left text-white max-w-xs sm:max-w-md transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white mb-3 text-xs px-3 py-1 animate-bounce">
                  {slide.discount}
                </Badge>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-lg md:text-xl mb-6 opacity-90 leading-relaxed">
                  {slide.subtitle}
                </p>
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base transform hover:scale-105 transition-all duration-300 shadow-xl border-0">
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-2 hover:bg-white/30 transition-all duration-300 group"
      >
        <ChevronLeft className="w-5 h-5 text-white group-hover:text-orange-200" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-2 hover:bg-white/30 transition-all duration-300 group"
      >
        <ChevronRight className="w-5 h-5 text-white group-hover:text-orange-200" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;