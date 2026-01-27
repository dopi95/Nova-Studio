import React, { useState, useEffect } from 'react'

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })
  
  const slides = {
    en: [
      { img: '/img/sl1.jpg', title: 'Creative Vision', subtitle: 'Transforming Ideas Into Reality' },
      { img: '/img/sl2.jpg', title: 'Digital Excellence', subtitle: 'Crafting Premium Experiences' },
      { img: '/img/sl3.jpg', title: 'Brand Innovation', subtitle: 'Elevating Your Digital Presence' },
      { img: '/img/sl4.jpg', title: 'Visual Storytelling', subtitle: 'Where Art Meets Technology' },
      { img: '/img/sl5.jpg', title: 'Creative Solutions', subtitle: 'Innovative Design Approaches' },
      { img: '/img/sl6.jpg', title: 'Digital Mastery', subtitle: 'Professional Media Production' },
      { img: '/img/sl7.jpg', title: 'Artistic Excellence', subtitle: 'Bringing Visions to Life' },
      { img: '/img/sl8.jpg', title: 'Modern Design', subtitle: 'Contemporary Creative Solutions' },
      { img: '/img/sl9.jpg', title: 'Brand Identity', subtitle: 'Unique Visual Experiences' },
      { img: '/img/sl10.jpg', title: 'Creative Process', subtitle: 'From Concept to Completion' },
      { img: '/img/sl11.jpg', title: 'Digital Innovation', subtitle: 'Next-Level Creative Work' },
      { img: '/img/sl12.jpg', title: 'Visual Impact', subtitle: 'Memorable Brand Experiences' }
    ],
    am: [
      { img: '/img/sl1.jpg', title: 'የፈጠራ እይታ', subtitle: 'ሀሳቦችን ወደ እውነታ መቀየር' },
      { img: '/img/sl2.jpg', title: 'ዲጂታል ብልጽግና', subtitle: 'ከፍተኛ ጥራት ያላቸው ተሞክሮዎች መፍጠር' },
      { img: '/img/sl3.jpg', title: 'የብራንድ ፈጠራ', subtitle: 'የእርስዎን ዲጂታል መገኘት ማሳደግ' },
      { img: '/img/sl4.jpg', title: 'የእይታ ተረት', subtitle: 'ጥበብ እና ቴክኖሎጂ የሚገናኙበት' },
      { img: '/img/sl5.jpg', title: 'የፈጠራ መፍትሄዎች', subtitle: 'አዳዲስ የዲዛይን አቀራረቦች' },
      { img: '/img/sl6.jpg', title: 'ዲጂታል ብቃት', subtitle: 'ሙያዊ የሚዲያ ምርት' },
      { img: '/img/sl7.jpg', title: 'የጥበብ ብልጽግና', subtitle: 'እይታዎችን ወደ ህይወት ማምጣት' },
      { img: '/img/sl8.jpg', title: 'ዘመናዊ ዲዛይን', subtitle: 'ዘመናዊ የፈጠራ መፍትሄዎች' },
      { img: '/img/sl9.jpg', title: 'የብራንድ ማንነት', subtitle: 'ልዩ የእይታ ተሞክሮዎች' },
      { img: '/img/sl10.jpg', title: 'የፈጠራ ሂደት', subtitle: 'ከሀሳብ እስከ ማጠናቀቅ' },
      { img: '/img/sl11.jpg', title: 'ዲጂታል ፈጠራ', subtitle: 'ቀጣይ ደረጃ የፈጠራ ስራ' },
      { img: '/img/sl12.jpg', title: 'የእይታ ተጽእኖ', subtitle: 'የማይረሳ የብራንድ ተሞክሮዎች' }
    ]
  }

  const content = {
    en: {
      brandName: { main: 'NOVA', sub: 'STUDIO' },
      cta: { services: 'Our Services', work: 'View Our Work' },
      scroll: 'Scroll'
    },
    am: {
      brandName: { main: 'ኖቫ', sub: 'ስቱዲዮ' },
      cta: { services: 'የእኛ አገልግሎቶች', work: 'የእኛ ስራዎች' },
      scroll: 'ወደ ታች'
    }
  }

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides[currentLang].length)
    }, 4000)
    
    const handleStorageChange = () => {
      setCurrentLang(localStorage.getItem('language') || 'en')
    }
    
    window.addEventListener('storage', handleStorageChange)
    const checkLang = setInterval(() => {
      const newLang = localStorage.getItem('language') || 'en'
      if (newLang !== currentLang) {
        setCurrentLang(newLang)
      }
    }, 100)
    
    return () => {
      clearInterval(interval)
      clearInterval(checkLang)
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [currentLang])

  return (
    <section id="home" className="min-h-screen h-[100dvh] relative overflow-hidden">
      {/* Animated Background Slides */}
      <div className="absolute inset-0">
        {slides[currentLang].map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <img 
              src={slide.img} 
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-yellow-400/30 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 right-32 w-20 h-20 bg-gradient-to-tr from-yellow-400/20 to-orange-500/20 transform rotate-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col justify-between py-6 sm:py-8">
        <div className="flex-1 flex items-center min-h-0">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl">
              {/* Animated Brand Name */}
              <div className={`transform transition-all duration-1000 lg:mt-16 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 leading-tight font-display">
                  <span className="block bg-gradient-to-r from-yellow-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-pulse brand-text">
                    {content[currentLang].brandName.main}
                  </span>
                  <span className="block text-white font-light tracking-widest text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-1 sm:mt-2 font-display">
                    {content[currentLang].brandName.sub}
                  </span>
                </h1>
              </div>

              {/* Dynamic Slide Content */}
              <div className={`transform transition-all duration-700 delay-300 ${
                isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 transition-all duration-500 font-heading">
                  {slides[currentLang][currentSlide].title}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 transition-all duration-500 leading-relaxed">
                  {slides[currentLang][currentSlide].subtitle}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-row gap-4 transform transition-all duration-1000 delay-500 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <a href="#services" className="group relative px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-block text-center text-sm font-heading">
                  <span className="relative z-10">{content[currentLang].cta.services}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
                <a href="#portfolio" className="group px-6 py-3 border-2 border-white text-white font-bold rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 inline-block text-center text-sm font-heading">
                  {content[currentLang].cta.work}
                  <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Indicators */}
        <div className="flex-shrink-0 pb-6 sm:pb-8">
          {/* Slide Indicators */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-2.5 max-w-sm px-4">
              {slides[currentLang].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 scale-125 shadow-lg shadow-yellow-400/50' 
                      : 'bg-white/50 hover:bg-white/80 backdrop-blur-sm'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center pb-2">
            <div className="flex flex-col items-center text-white/80 animate-bounce">
              <span className="text-sm sm:text-base mb-2 rotate-90 origin-center whitespace-nowrap font-medium font-sans">{content[currentLang].scroll}</span>
              <i className="fas fa-chevron-down text-sm sm:text-base"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero