import React, { useState, useEffect } from 'react'
import SEO from './SEO'
import Navigation from './Navigation'

const PortfolioPage: React.FC = () => {
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const seoData = {
    title: {
      en: 'Photography Portfolio - Nova Studio Ethiopia | Professional Event & Medical Photography Gallery',
      am: 'የፎቶግራፊ ስብስብ - ኖቫ ስቱዲዮ ኢትዮጵያ | ባለሙያ የክስተት እና የህክምና ፎቶግራፊ ጋለሪ'
    },
    description: {
      en: 'Explore Nova Studio Ethiopia\'s complete photography portfolio showcasing professional event photography, medical photography, conference coverage, and creative visual content from Addis Ababa. View our extensive gallery of high-quality photography work across healthcare, environmental, and social sectors.',
      am: 'የኖቫ ስቱዲዮ ኢትዮጵያን ባለሙያ የክስተት ፎቶግራፊ፣ የህክምና ፎቶግራፊ፣ የኮንፈረንስ ሽፋን እና የፈጠራ የእይታ ይዘቶችን የሚያሳይ ሙሉን የፎቶግራፊ ስብስብ ይመልከቱ። በጤና፣ በአካባቢ እና በማህበራዊ ዘርፎች ውስጥ የእኛን ሰፊ የፎቶግራፊ ስራዎች ጋለሪ ይመልከቱ።'
    },
    keywords: {
      en: 'Nova Studio portfolio, Ethiopia photography gallery, Addis Ababa photographer, event photography portfolio, medical photography examples, conference photography, professional photography showcase, creative photography Ethiopia, visual storytelling portfolio, healthcare photography, environmental photography',
      am: 'ኖቫ ስቱዲዮ ስብስብ, የፎቶግራፊ ጋለሪ ኢትዮጵያ, አዲስ አበባ ፎቶግራፊር, የክስተት ፎቶግራፊ ስብስብ, የህክምና ፎቶግራፊ ምሳሌዎች, የኮንፈረንስ ፎቶግራፊ, ባለሙያ ፎቶግራፊ ማሳያ, የፈጠራ ፎቶግራፊ ኢትዮጵያ, የእይታ ተረት ስብስብ, የጤና ፎቶግራፊ, የአካባቢ ፎቶግራፊ'
    }
  }

  const content = {
    en: {
      title: 'Photography Portfolio',
      subtitle: 'Explore our complete collection of photography works',
      backToHome: 'Back to Home'
    },
    am: {
      title: 'የፎቶግራፊ ስብስብ',
      subtitle: 'የእኛን ሙሉ የፎቶግራፊ ስራዎች ስብስብ ይመልከቱ',
      backToHome: 'ወደ መነሻ ይመለሱ'
    }
  }

  // Extended photography works - add more images here
  const allPhotographyWorks = [
    '/img/pgb1.jpg', '/img/pgb2.jpg', '/img/pgb3.jpg', '/img/pgb4.jpg', '/img/pgb5.jpg',
    '/img/pgb6.jpg', '/img/pgb7.jpg', '/img/pgb8.jpg', '/img/pgb9.jpg', '/img/pgb10.jpg',
    '/img/pgb11.jpg', '/img/pgb12.jpg', '/img/pgb13.jpg', '/img/pgb14.jpg', '/img/pgb15.jpg',
    '/img/pgb16.jpg', '/img/pgb17.jpg', '/img/pgb18.jpg', '/img/pgb19.jpg', '/img/pgb20.jpg'
  ]

  useEffect(() => {
    const checkLang = setInterval(() => {
      const newLang = localStorage.getItem('language') || 'en'
      if (newLang !== currentLang) {
        setCurrentLang(newLang)
      }
    }, 100)

    return () => clearInterval(checkLang)
  }, [currentLang])

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        url="/portfolio"
        currentLang={currentLang as 'en' | 'am'}
      />
      <Navigation />
      <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <a 
              href="/" 
              className="inline-flex items-center text-yellow-400 hover:text-blue-400 transition-colors mb-6"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              {content[currentLang].backToHome}
            </a>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                {content[currentLang].title}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              {content[currentLang].subtitle}
            </p>
          </div>

          {/* Photography Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allPhotographyWorks.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl bg-gray-800 hover:scale-105 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square relative">
                  <img 
                    src={image} 
                    alt={`Photography work ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `data:image/svg+xml;base64,${btoa(`<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#374151"/><text x="50%" y="50%" font-family="Arial" font-size="16" fill="#9CA3AF" text-anchor="middle" dy=".3em">Photo ${index + 1}</text></svg>`)}`;
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-semibold">{currentLang === 'en' ? 'Photography' : 'ፎቶግራፊ'}</h3>
                          <p className="text-gray-300 text-sm">{currentLang === 'en' ? 'Nova Studio' : 'ኖቫ ስቱዲዮ'}</p>
                        </div>
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <i className="fas fa-expand text-white text-xs"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img 
                src={selectedImage} 
                alt="Selected work"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default PortfolioPage