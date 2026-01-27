import React, { useState, useEffect } from 'react'

const Services: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })

  const content = {
    en: {
      title: 'Our Services',
      subtitle: 'Comprehensive creative solutions to boost your brand\'s digital presence',
      services: [
        {
          icon: 'fas fa-video',
          title: 'Videography & Photography',
          description: 'Premier videography and photography for conferences, events, and social occasions, ensuring every milestone is captured with excellence.',
          features: ['Event Photography', 'Conference Coverage', 'Medical Photography', 'Promotional Videos'],
          gradient: 'from-purple-500 to-pink-500',
          bgGradient: 'from-purple-500/10 to-pink-500/10',
          borderColor: 'border-purple-500/30'
        },
        {
          icon: 'fas fa-share-alt',
          title: 'Social Media Management',
          description: 'High-energy social media campaigns that blend technical precision with creative vision to bring your message to life.',
          features: ['Content Strategy', 'Campaign Management', 'Community Engagement', 'Brand Storytelling'],
          gradient: 'from-pink-500 to-red-500',
          bgGradient: 'from-pink-500/10 to-red-500/10',
          borderColor: 'border-pink-500/30'
        },
        {
          icon: 'fas fa-chart-line',
          title: 'Digital Marketing',
          description: 'Comprehensive digital marketing solutions from concept to delivery, empowering brands through impactful storytelling.',
          features: ['Brand Strategy', 'Campaign Development', 'Performance Analytics', 'Market Research'],
          gradient: 'from-red-500 to-orange-500',
          bgGradient: 'from-red-500/10 to-orange-500/10',
          borderColor: 'border-red-500/30'
        },
        {
          icon: 'fas fa-palette',
          title: 'Graphics Design',
          description: 'Creative visual solutions that blend technical precision with artistic vision to deliver impactful brand experiences.',
          features: ['Logo Design', 'Brand Identity', 'Print Design', 'Visual Storytelling'],
          gradient: 'from-orange-500 to-yellow-500',
          bgGradient: 'from-orange-500/10 to-yellow-500/10',
          borderColor: 'border-orange-500/30'
        }
      ]
    },
    am: {
      title: 'የእኛ አገልግሎቶች',
      subtitle: 'የእርስዎን ብራንድ ዲጂታል መገኘት ለማሳደግ አጠቃላይ የፈጠራ መፍትሄዎች',
      services: [
        {
          icon: 'fas fa-video',
          title: 'ቪዲዮግራፊ እና ፈዎቶግራፊ',
          description: 'ለክንፍርንሶች፣ አስተያየቶች እና የማህበራዊ አስተያየቶች መጀመሪያ ቪዲዮግራፊ እና ፈዎቶግራፊ፣ እያንዳንዱ ከፍተኛ ተገስታት በብልጽግና እንደሚፈጠስ እንደሚያስተዋውቅ።',
          features: ['የአስተያየት ፈዎቶግራፊ', 'የክንፍርንስ ስፋን', 'የመድሃና ፈዎቶግራፊ', 'የማስተዋወቂያ ቪዲዮዎች'],
          gradient: 'from-purple-500 to-pink-500',
          bgGradient: 'from-purple-500/10 to-pink-500/10',
          borderColor: 'border-purple-500/30'
        },
        {
          icon: 'fas fa-share-alt',
          title: 'የማህበራዊ ሚዲያ አስተዳደር',
          description: 'የእርስዎን መንገድ ወደ ህይወት ለማመጣት ቴክኒካዊ ትክክልን ከፈጠራ እይታ ጋር የሚዋሃዱ ከፍተኛ የማህበራዊ ሚዲያ ክስተቶች።',
          features: ['የይዝት ስትራቴጂ', 'የክስተት አስተዳደር', 'የማህበራዊ ተሳትፎ', 'የብራንድ ተረት'],
          gradient: 'from-pink-500 to-red-500',
          bgGradient: 'from-pink-500/10 to-red-500/10',
          borderColor: 'border-pink-500/30'
        },
        {
          icon: 'fas fa-chart-line',
          title: 'ዲጂታል ማርኬቲንግ',
          description: 'ከሀሳብ እስከ አቅርቦት አጠቃላይ ዲጂታል ማርኬቲንግ መፍትሄዎች፣ ብራንዶችን በተሳትፎ ተረት ማስካረስ።',
          features: ['የብራንድ ስትራቴጂ', 'የክስተት አስፈላል', 'የአፃፃል ትንታኔ', 'የመጠር ጥናት'],
          gradient: 'from-red-500 to-orange-500',
          bgGradient: 'from-red-500/10 to-orange-500/10',
          borderColor: 'border-red-500/30'
        },
        {
          icon: 'fas fa-palette',
          title: 'ግራፊክስ ዲዛይን',
          description: 'ተሳትፎ የብራንድ ተሞክሮዎች ለማስተላለፍ ቴክኒካዊ ትክክልን ከፈጠራ እይታ ጋር የሚዋሃዱ የፈጠራ ምስላዊ መፍትሄዎች።',
          features: ['የሎገ ዲዛይን', 'የብራንድ ማንነት', 'የሕትመት ዲዛይን', 'የእይታ ተረት'],
          gradient: 'from-orange-500 to-yellow-500',
          bgGradient: 'from-orange-500/10 to-yellow-500/10',
          borderColor: 'border-orange-500/30'
        }
      ]
    }
  }

  const totalSlides = content[currentLang].services.length
  const slidesToShow = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('services')
    if (section) observer.observe(section)

    // Auto-slide for all devices
    const autoSlide = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) => {
          if (window.innerWidth >= 1024) {
            // Desktop: alternate between showing services 0,1,2 and 1,2,3
            return prev === 0 ? 1 : 0
          } else {
            // Mobile/tablet: cycle through all services
            return (prev + 1) % totalSlides
          }
        })
      }
    }, 4000)

    const checkLang = setInterval(() => {
      const newLang = localStorage.getItem('language') || 'en'
      if (newLang !== currentLang) {
        setCurrentLang(newLang)
        setCurrentSlide(0)
      }
    }, 100)

    return () => {
      if (section) observer.unobserve(section)
      clearInterval(autoSlide)
      clearInterval(checkLang)
    }
  }, [currentLang, totalSlides, isPaused])

  const nextSlide = () => {
    if (window.innerWidth >= 1024) {
      // Desktop: alternate between 0 and 1
      setCurrentSlide((prev) => prev === 0 ? 1 : 0)
    } else {
      // Mobile/tablet: cycle through all services
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }
  }

  const prevSlide = () => {
    if (window.innerWidth >= 1024) {
      // Desktop: alternate between 0 and 1
      setCurrentSlide((prev) => prev === 0 ? 1 : 0)
    } else {
      // Mobile/tablet: cycle through all services
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="services" className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden py-16 sm:py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              {content[currentLang].title}
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto px-2">
            {content[currentLang].subtitle}
          </p>
        </div>

        {/* Services Slider */}
        <div className="relative max-w-7xl mx-auto">
          {/* Desktop Slider */}
          <div className="hidden lg:block relative px-16">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentSlide * (100/3)}%)`,
                }}
              >
                {content[currentLang].services.map((service, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0 px-4">
                    <div 
                      className={`group h-full p-6 sm:p-8 bg-gradient-to-br ${service.bgGradient} rounded-2xl border ${service.borderColor} backdrop-blur-sm hover:scale-105 transition-all duration-300`}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      onClick={() => setIsPaused(!isPaused)}
                    >
                      <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                        <i className={`${service.icon} text-2xl text-white`}></i>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-6 text-center leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <i className="fas fa-check text-green-400 mr-3 flex-shrink-0"></i>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-all z-20 border border-white/10"
            >
              <i className="fas fa-chevron-left text-lg"></i>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-all z-20 border border-white/10"
            >
              <i className="fas fa-chevron-right text-lg"></i>
            </button>

            {/* Desktop Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {Array.from({ length: 2 }).map((_, index) => (
                <button 
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative overflow-hidden rounded-full transition-all duration-500 ${
                    currentSlide === index 
                      ? 'w-8 h-3 bg-gradient-to-r from-purple-400 to-pink-400' 
                      : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                  }`}
                >
                  {currentSlide === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Slider */}
          <div className="lg:hidden relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {content[currentLang].services.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div 
                      className={`h-full p-6 sm:p-8 bg-gradient-to-br ${service.bgGradient} rounded-2xl border ${service.borderColor} backdrop-blur-sm relative overflow-hidden`}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      onClick={() => setIsPaused(!isPaused)}
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full"></div>
                        <div className="absolute bottom-4 left-4 w-24 h-24 bg-white rounded-full"></div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center shadow-2xl`}>
                          <i className={`${service.icon} text-3xl text-white`}></i>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 text-center">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 mb-6 text-center leading-relaxed">
                          {service.description}
                        </p>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-400">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3 flex-shrink-0`}></div>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-all z-20 border border-white/10"
            >
              <i className="fas fa-chevron-left text-lg"></i>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-all z-20 border border-white/10"
            >
              <i className="fas fa-chevron-right text-lg"></i>
            </button>

            {/* Modern Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button 
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative overflow-hidden rounded-full transition-all duration-500 ${
                    currentSlide === index 
                      ? 'w-8 h-3 bg-gradient-to-r from-purple-400 to-pink-400' 
                      : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                  }`}
                >
                  {currentSlide === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services