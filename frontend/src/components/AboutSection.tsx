import React, { useState, useEffect } from 'react'
import { HiLocationMarker, HiPhone, HiMail, HiShare } from 'react-icons/hi'
import { FaFacebookF, FaTiktok } from 'react-icons/fa'

const AboutSection: React.FC = () => {
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })

  const content = {
    en: {
      title: 'About Nova Studio',
      paragraphs: [
        'Nova Studio, based in Addis Ababa Ethiopia is a creative production agency dedicated to empowering brands through impactful storytelling.',
        'From concept to delivery, we blend technical precision with creative vision to bring your message to life.',
        'Whether it is promotional and educational videos, specialized medical photography, or high-energy social media campaigns, we handle it all.',
        'We also provide premier videography and photography for conferences, events, and social occasions, ensuring every milestone is captured with excellence.'
      ],
      features: [
        {
          icon: 'fas fa-users',
          title: 'Expert Team',
          description: 'Professional designers, editors, and social media strategists'
        },
        {
          icon: 'fas fa-rocket',
          title: 'Fast Delivery',
          description: 'Quick turnaround times without compromising quality'
        },
        {
          icon: 'fas fa-heart',
          title: 'Client Focused',
          description: 'Your success is our priority, always'
        }
      ]
    },
    am: {
      title: 'ስለ ኖቫ ስቱዲዮ',
      paragraphs: [
        'ኖቫ ስቱዲዮ በአዲስ አበባ ኢትዮጵያ የምንገኝ የፈጠራ አስፈላላ ኤጀንሲ በተሳትፎ ተረት ብራንዶችን ለማስካረስ የተወቀፈ።',
        'ከሀሳብ እስከ አቅርቦት ድረስ፣ ቴክኒካዊ ትክክልን ከፈጠራ እይታ ጋር በማዋሃድ የእርስዎን መንገድ ወደ ህይወት እንዓመጣለን።',
        'የማስተዋወቂያ እና የትምህርት ቪዲዮዎች፣ ተከሳሽ የመድሃና ፈዎቶግራፊ፣ ወይም ከፍተኛ የማህበራዊ ሚዲያ ክስተቶች ይሁን ሁሉንም እንሰራለን።',
        'እንዲሁም ለክንፍርንሶች፣ አስተያየቶች እና የማህበራዊ አስተያየቶች መጀመሪያ ቪዲዮግራፊ እና ፈዎቶግራፊ እንሰጣለን፣ እያንዳንዱ ከፍተኛ ተገስታት በብልጽግና እንደሚፈጠስ እንደሚያስተዋውቅ።'
      ],
      features: [
        {
          icon: 'fas fa-users',
          title: 'ባለሙያ ቡድን',
          description: 'ባለሙያ ዲዛይነሮች፣ አርታየዎች እና የማህበራዊ ሚዲያ ስትራቴጂስቶች'
        },
        {
          icon: 'fas fa-rocket',
          title: 'ፈጣን አቅርቦት',
          description: 'ጥራትን ሳንጎዳ ፈጣን የመላኪያ ጊዜዎች'
        },
        {
          icon: 'fas fa-heart',
          title: 'ደንበኛ ላይ ያተኮረ',
          description: 'የእርስዎ ስኬት ሁሉን ጊዜ የእኛ ቅድሚያ ነው'
        }
      ]
    }
  }

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
    <section id="about" className="py-20 bg-gray-900 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              {content[currentLang].title}
            </span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {content[currentLang].paragraphs.map((paragraph, index) => (
              <p key={index} className={index === 0 ? "text-xl font-medium" : "text-lg"} style={{ color: index === 0 ? '#E2E2E2' : '#B8B8B8', lineHeight: index === 0 ? 1.7 : 1.8 }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {content[currentLang].features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all transform hover:scale-105">
              <div className={`text-4xl mb-4 ${
                index === 0 ? 'text-purple-400' : 
                index === 1 ? 'text-pink-400' : 'text-red-400'
              }`}>
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection

export const Portfolio: React.FC = () => {
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [displayCount, setDisplayCount] = useState(6)

  const content = {
    en: {
      title: 'Our Work',
      subtitle: 'Capturing moments that matter through our lens',
      category: 'Photography Portfolio'
    },
    am: {
      title: 'የእኛ ስራዎች',
      subtitle: 'በእኛ ሌንስ በኩል አስፈላጊ ጊዜዎችን መያዝ',
      category: 'የፎቶግራፊ ስብስብ'
    }
  }

  // Sample photography works - replace with your actual images
  const photographyWorks = [
    '/img/pgb1.jpg',
    '/img/pgb2.jpg', 
    '/img/pgb3.jpg',
    '/img/pgb4.jpg',
    '/img/pgb5.jpg',
    '/img/pgb6.jpg',
    '/img/pgb7.jpg',
    '/img/pgb8.jpg',
    '/img/pgb9.jpg',
    '/img/pgb10.jpg',
    '/img/pgb11.jpg',
    '/img/pgb12.jpg',
    '/img/pgb13.jpg',
    '/img/pgb14.jpg',
    '/img/pgb15.jpg',
    '/img/pgb16.jpg',
    '/img/pgb17.jpg',
    '/img/pgb18.jpg',
    '/img/pgb19.jpg',
    '/img/pgb20.jpg'
  ]

  useEffect(() => {
    const updateDisplayCount = () => {
      setDisplayCount(window.innerWidth >= 1024 ? 12 : 6)
    }
    
    updateDisplayCount()
    window.addEventListener('resize', updateDisplayCount)
    
    const checkLang = setInterval(() => {
      const newLang = localStorage.getItem('language') || 'en'
      if (newLang !== currentLang) {
        setCurrentLang(newLang)
      }
    }, 100)

    return () => {
      clearInterval(checkLang)
      window.removeEventListener('resize', updateDisplayCount)
    }
  }, [currentLang])

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              {content[currentLang].title}
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-4">
            {content[currentLang].subtitle}
          </p>
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-400/20 to-blue-500/20 rounded-full border border-yellow-400/30">
            <span className="text-yellow-400 font-semibold">{content[currentLang].category}</span>
          </div>
        </div>

        {/* Photography Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {photographyWorks.slice(0, displayCount).map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl bg-gray-800 hover:scale-105 transition-all duration-500 cursor-pointer"
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
                        <h3 className="text-white font-semibold text-lg">{currentLang === 'en' ? 'Photography' : 'ፎቶግራፊ'}</h3>
                        <p className="text-gray-300 text-sm">{currentLang === 'en' ? 'Nova Studio' : 'ኖቫ ስቱዲዮ'}</p>
                      </div>
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <i className="fas fa-expand text-white text-sm"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a 
            href="/portfolio" 
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-blue-500 text-black font-bold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-2xl"
          >
            <span className="mr-2">{currentLang === 'en' ? 'View More' : 'ተጨማሪ ይመልከቱ'}</span>
            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
          </a>
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
    </section>
  )
}

export const FAQ: React.FC = () => {
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const content = {
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about our services',
      faqs: [
        {
          question: 'What photography services do you offer?',
          answer: 'We offer comprehensive photography services including event photography, conference coverage, medical photography, promotional videos, and social media content creation. Our team specializes in capturing professional moments for healthcare, environmental, and social sectors.'
        },
        {
          question: 'Do you provide social media management services?',
          answer: 'Yes, we offer complete social media management including content strategy, campaign development, community engagement, and brand storytelling. We create high-energy campaigns that blend technical precision with creative vision.'
        },
        {
          question: 'What areas do you serve in Ethiopia?',
          answer: 'We are based in Addis Ababa, Ethiopia, and primarily serve clients throughout the country. For projects outside Addis Ababa, we can discuss travel arrangements and additional logistics as needed.'
        },
        {
          question: 'Can you handle large-scale events and conferences?',
          answer: 'Absolutely! We have extensive experience covering large conferences, medical events, and organizational gatherings. We work with leading organizations like the African Chiropractic Federation, Pure Earth, and Konrad Adenauer Foundation.'
        },
        {
          question: 'What are your pricing packages?',
          answer: 'Our pricing varies based on project scope, duration, and deliverables. We offer customized packages for photography, videography, social media management, and digital marketing. Contact us for a detailed quote tailored to your specific needs.'
        }
      ]
    },
    am: {
      title: 'በተደጋጋሚ የሚጠየቁ ጥያቄዎች',
      subtitle: 'ስለ እኛ አገልግሎቶች ማወቅ የሚፈልጉት ሁሉ',
      faqs: [
        {
          question: 'ምን ዓይነት የፎቶግራፊ አገልግሎቶች ትሰጣላችሁ?',
          answer: 'የእኛ አገልግሎቶች የክስተት ፎቶግራፊ፣ የኮንፈረንስ ሽፋን፣ የህክምና ፎቶግራፊ፣ የማስተዋወቂያ ቪዲዮዎች እና የማህበራዊ ሚዲያ ይዘት ፈጠራን ያካትታሉ። ቡድናችን በጤና፣ በአካባቢ እና በማህበራዊ ዘርፎች ውስጥ ባለሙያ ጊዜያትን በመያዝ ላይ ልዩ ችሎታ አለው።'
        },
        {
          question: 'የማህበራዊ ሚዲያ አስተዳደር አገልግሎት ትሰጣላችሁ?',
          answer: 'አዎ፣ የይዘት ስትራቴጂ፣ የዘመቻ ልማት፣ የማህበረሰብ ተሳትፎ እና የብራንድ ተረት ተረትን ጨምሮ ሙሉ የማህበራዊ ሚዲያ አስተዳደር እንሰጣለን። ቴክኒካዊ ትክክልን ከፈጠራ እይታ ጋር የሚያዋህዱ ከፍተኛ ኃይል ያላቸው ዘመቻዎችን እንፈጥራለን።'
        },
        {
          question: 'በኢትዮጵያ ውስጥ የትኞቹን አካባቢዎች ታገለግላላችሁ?',
          answer: 'በአዲስ አበባ፣ ኢትዮጵያ ውስጥ የምንገኝ ሲሆን በዋናነት በመላው ሀገሪቱ ደንበኞችን እናገለግላለን። ከአዲስ አበባ ውጭ ላሉ ፕሮጀክቶች፣ የጉዞ ዝግጅቶችን እና ተጨማሪ ሎጂስቲክስን እንደ አስፈላጊነቱ መወያየት እንችላለን።'
        },
        {
          question: 'ትላልቅ ክስተቶችን እና ኮንፈረንሶችን መያዝ ትችላላችሁ?',
          answer: 'በፍፁም! ትላልቅ ኮንፈረንሶችን፣ የህክምና ክስተቶችን እና የድርጅት ስብሰባዎችን በመሸፈን ላይ ሰፊ ልምድ አለን። እንደ የአፍሪካ ቺሮፕራክቲክ ፌዴሬሽን፣ ፒዩር አርዝ እና ኮንራድ አዴናወር ፋውንዴሽን ካሉ ዋና ዋና ድርጅቶች ጋር እንሰራለን።'
        },
        {
          question: 'የዋጋ ፓኬጆቻችሁ ምንድን ናቸው?',
          answer: 'የእኛ ዋጋ በፕሮጀክት ወሰን፣ ቆይታ እና ማድረሻዎች ላይ ይወሰናል። ለፎቶግራፊ፣ ቪዲዮግራፊ፣ የማህበራዊ ሚዲያ አስተዳደር እና ዲጂታል ማርኬቲንግ ብጁ ፓኬጆችን እንሰጣለን። ለእርስዎ ልዩ ፍላጎቶች የተዘጋጀ ዝርዝር ዋጋ ለማግኘት ያግኙን።'
        }
      ]
    }
  }

  useEffect(() => {
    const checkLang = setInterval(() => {
      const newLang = localStorage.getItem('language') || 'en'
      if (newLang !== currentLang) {
        setCurrentLang(newLang)
      }
    }, 100)

    return () => clearInterval(checkLang)
  }, [currentLang])

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-yellow-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              {content[currentLang].title}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            {content[currentLang].subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {content[currentLang].faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/30 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-yellow-400/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-700/20 transition-colors duration-300"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-blue-500 flex items-center justify-center transition-transform duration-300 ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}>
                  <i className="fas fa-chevron-down text-black text-sm"></i>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openFAQ === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="h-px bg-gradient-to-r from-yellow-400/20 to-blue-500/20 mb-4"></div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Footer: React.FC = () => {
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })

  const content = {
    en: {
      address: 'Address',
      contact: 'Contact',
      email: 'Email',
      followUs: 'Follow Us',
      copyright: '© 2026 Nova Studio. All rights reserved.'
    },
    am: {
      address: 'አድራሻ',
      contact: 'ያግኙን',
      email: 'ኢሜይል',
      followUs: 'ይከተሉን',
      copyright: '© 2018 ኖቫ ስቱዲዮ። ሁሉም መብቶች የተጠበቁ ናቸው።'
    }
  }

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
    <footer className="bg-gradient-to-b from-gray-900 to-black py-16 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6">
              <img src="/img/logo.jpg" alt="Nova Studio" className="h-10 w-10 sm:h-12 sm:w-12 mr-3 rounded-full border-2 border-yellow-400 shadow-md object-cover" />
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                {currentLang === 'en' ? 'NOVA STUDIO' : 'ኖቫ ስቱዲዮ'}
              </span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {currentLang === 'en' 
                ? 'Creative production agency dedicated to empowering brands through impactful storytelling.'
                : 'በተሳትፎ ተረት ብራንዶችን ለማስካረስ የተወቀፈ የፈጠራ አስፈላላ ኤጀንሲ።'
              }
            </p>
          </div>

          {/* Address Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
              {content[currentLang].address}
            </h3>
            <div className="flex items-center justify-center sm:justify-start">
              <HiLocationMarker className="text-yellow-400 text-lg mr-2" />
              <p className="text-gray-400 text-sm sm:text-base">
                {currentLang === 'en' ? 'Addis Ababa, Ethiopia' : 'አዲስ አበባ፣ ኢትዮጵያ'}
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
              {content[currentLang].contact}
            </h3>
            <div className="space-y-3 flex flex-col items-center sm:items-start">
              <div className="flex items-center">
                <HiPhone className="text-yellow-400 text-lg mr-2 flex-shrink-0" />
                <a href="tel:+251722239964" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm sm:text-base">
                  +251 722 239 964
                </a>
              </div>
              <div className="flex items-center">
                <HiMail className="text-yellow-400 text-lg mr-2 flex-shrink-0" />
                <a href="mailto:novastudioet17@gmail.com" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm sm:text-base break-all">
                  novastudioet17@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
              {content[currentLang].followUs}
            </h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a 
                href="https://www.facebook.com/share/17vpJC8ATQ/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition-colors"
              >
                <FaFacebookF className="text-2xl" />
              </a>
              <a 
                href="https://www.tiktok.com/@novastudio17?_r=1&_t=ZS-93GHidBnPSX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaTiktok className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center space-y-2">
            <p className="text-gray-500 text-sm">
              {content[currentLang].copyright}
            </p>
            <p className="text-gray-600 text-xs">
              {currentLang === 'en' ? 'Developed by' : 'የተሰራው በ'} <a href="https://awratech.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Awra Tech</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}