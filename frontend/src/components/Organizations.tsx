import React, { useState, useEffect } from 'react'

const Organizations: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })

  const content = {
    en: {
      title: "Organizations We've Worked With",
      subtitle: 'Trusted by leading organizations across healthcare, environmental, and social sectors',
      organizations: [
        'African Chiropractic Federation',
        'Pure Earth',
        'Ethiopian Society of Pediatric Hematology and Oncology',
        'Lancet Women and Children Hospital',
        'Konrad Adenauer Foundation',
        '1st Spine Clinics'
      ]
    },
    am: {
      title: 'ከእነዚህ ድርጅቶች ጋር ሰርተናል',
      subtitle: 'በጤና፣ በአካባቢ እና በማህበራዊ ዘርፎች ውስጥ ባሉ ዋና ዋና ድርጅቶች የተመረጥን',
      organizations: [
        'የአፍሪካ ቺሮፕራክቲክ ፌዴሬሽን',
        'ፒዩር አርዝ',
        'የኢትዮጵያ የህፃናት የደም እና የካንሰር ህክምና ማህበር',
        'ላንሴት የሴቶች እና ህፃናት ሆስፒታል',
        'ኮንራድ አዴናወር ፋውንዴሽን',
        '1ኛ የአከርካሪ አጥንት ክሊኒክ'
      ]
    }
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

    const section = document.getElementById('organizations')
    if (section) observer.observe(section)

    const checkLang = setInterval(() => {
      const newLang = localStorage.getItem('language') || 'en'
      if (newLang !== currentLang) {
        setCurrentLang(newLang)
      }
    }, 100)

    return () => {
      if (section) observer.unobserve(section)
      clearInterval(checkLang)
    }
  }, [currentLang])

  return (
    <section id="organizations" className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden py-16 sm:py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              {content[currentLang].title}
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto px-2">
            {content[currentLang].subtitle}
          </p>
        </div>

        {/* Logo Carousel */}
        <div className={`relative transform transition-all duration-1000 delay-700 mb-16 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="overflow-hidden p-4 sm:p-8">
            <div className="logos-container overflow-hidden">
              <div className="logos-track flex items-center animate-scroll-infinite">
                {/* First set */}
                {content[currentLang].organizations.map((org, index) => (
                  <div key={index} className="logo-item flex-shrink-0 mx-3 sm:mx-6 md:mx-8">
                    <div className="w-32 h-20 sm:w-32 sm:h-20 md:w-40 md:h-24 bg-white rounded-lg md:rounded-xl shadow-xl flex items-center justify-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-300 hover:border-purple-400">
                      <img 
                        src={`/img/${index + 1}.png`} 
                        alt={org} 
                        className="max-w-full max-h-full object-contain p-1 sm:p-2" 
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="text-center p-2"><div class="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center"><span class="text-white font-bold text-xs sm:text-sm">${index + 1}</span></div><span class="text-gray-800 font-semibold text-xs leading-tight">${org.length > 20 ? org.substring(0, 20) + '...' : org}</span></div>`;
                          }
                        }}
                      />
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {content[currentLang].organizations.map((org, index) => (
                  <div key={`duplicate-${index}`} className="logo-item flex-shrink-0 mx-3 sm:mx-6 md:mx-8">
                    <div className="w-32 h-20 sm:w-32 sm:h-20 md:w-40 md:h-24 bg-white rounded-lg md:rounded-xl shadow-xl flex items-center justify-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-300 hover:border-purple-400">
                      <img 
                        src={`/img/${index + 1}.png`} 
                        alt={org} 
                        className="max-w-full max-h-full object-contain p-1 sm:p-2" 
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="text-center p-2"><div class="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center"><span class="text-white font-bold text-xs sm:text-sm">${index + 1}</span></div><span class="text-gray-800 font-semibold text-xs leading-tight">${org.length > 20 ? org.substring(0, 20) + '...' : org}</span></div>`;
                          }
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Organizations Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {content[currentLang].organizations.map((org, index) => (
              <div key={index} className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 hover:scale-105 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold text-sm sm:text-base leading-tight group-hover:text-purple-300 transition-colors duration-300">
                        {org}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-infinite {
          animation: scroll-infinite 25s linear infinite;
        }
        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
        @media (max-width: 640px) {
          .animate-scroll-infinite {
            animation: scroll-infinite 20s linear infinite;
          }
        }
      `}</style>
    </section>
  )
}

export default Organizations