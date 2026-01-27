import React, { useState, useEffect } from 'react'
import SEO from './SEO'
import Navigation from './Navigation'
import Hero from './Hero'
import AboutSection, { Portfolio, FAQ, Footer } from './AboutSection'
import Services from './Services'
import Organizations from './Organizations'
import { HiPhone, HiMail, HiInformationCircle } from 'react-icons/hi'
import { FaTelegram } from 'react-icons/fa'

const Home: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [showContactBox, setShowContactBox] = useState(false)
  const [currentIconIndex, setCurrentIconIndex] = useState(0)
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })

  const seoData = {
    title: {
      en: 'Nova Studio Ethiopia - Premier Creative Production Agency | Photography & Videography Addis Ababa',
      am: 'ኖቫ ስቱዲዮ ኢትዮጵያ - ዋና የፈጠራ ምርት ኤጀንሲ | ፎቶግራፊ እና ቪዲዮግራፊ አዲስ አበባ'
    },
    description: {
      en: 'Nova Studio is Ethiopia\'s leading creative production agency in Addis Ababa. We specialize in professional photography, videography, social media management, digital marketing, event coverage, and medical photography. Transform your brand with our expert creative services and impactful storytelling.',
      am: 'ኖቫ ስቱዲዮ በአዲስ አበባ የሚገኝ የኢትዮጵያ ዋና የፈጠራ ምርት ኤጀንሲ ነው። በባለሙያ ፎቶግራፊ፣ ቪዲዮግራፊ፣ የማህበራዊ ሚዲያ አስተዳደር፣ ዲጂታል ማርኬቲንግ፣ የክስተት ሽፋን እና የህክምና ፎቶግራፊ ላይ ልዩ ችሎታ አለን። ከእኛ ባለሙያ የፈጠራ አገልግሎቶች እና ተጽዕኖ ፈጣሪ ተረት ተረት ጋር የእርስዎን ብራንድ ይለውጡ።'
    },
    keywords: {
      en: 'Nova Studio Ethiopia, photography Addis Ababa, videography Ethiopia, creative agency, social media management, digital marketing, event photography, medical photography, brand storytelling, professional photography, video production, content creation, marketing agency Ethiopia, conference photography, promotional videos',
      am: 'ኖቫ ስቱዲዮ ኢትዮጵያ, ፎቶግራፊ አዲስ አበባ, ቪዲዮግራፊ ኢትዮጵያ, የፈጠራ ኤጀንሲ, የማህበራዊ ሚዲያ አስተዳደር, ዲጂታል ማርኬቲንግ, የክስተት ፎቶግራፊ, የህክምና ፎቶግራፊ, የብራንድ ተረት, ባለሙያ ፎቶግራፊ, የቪዲዮ ምርት, የይዘት ፈጠራ, የማርኬቲንግ ኤጀንሲ ኢትዮጵያ, የኮንፈረንስ ፎቶግራፊ, የማስተዋወቂያ ቪዲዮዎች'
    }
  }

  const contactIcons = [
    { icon: HiMail, color: 'from-red-500 to-red-600' },
    { icon: HiPhone, color: 'from-green-500 to-green-600' },
    { icon: FaTelegram, color: 'from-blue-500 to-blue-600' }
  ]

  useEffect(() => {
    const checkLang = setInterval(() => {
      const newLang = localStorage.getItem('language') || 'en'
      if (newLang !== currentLang) {
        setCurrentLang(newLang)
      }
    }, 100)

    const handleScroll = () => {
      const aboutSection = document.getElementById('about')
      if (aboutSection) {
        const aboutTop = aboutSection.offsetTop
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        setShowContactBox(scrollTop >= aboutTop - 100)
      }
    }

    // Icon rotation effect
    const iconInterval = setInterval(() => {
      setCurrentIconIndex((prev) => (prev + 1) % contactIcons.length)
    }, 7000)

    window.addEventListener('scroll', handleScroll)
    return () => {
      clearInterval(checkLang)
      window.removeEventListener('scroll', handleScroll)
      clearInterval(iconInterval)
    }
  }, [currentLang])

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        url=""
        currentLang={currentLang as 'en' | 'am'}
      />
      <Navigation />
      <Hero />
      <AboutSection />
      <Services />
      <Organizations />
      <Portfolio />
      <FAQ />
      <Footer />
      
      {/* Fixed Contact Info Box - Shows from About section */}
      {showContactBox && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Contact Icons */}
          <div className={`mb-4 space-y-3 transition-all duration-500 transform ${
            isContactOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95 pointer-events-none'
          }`}>
            <a 
              href="mailto:novastudioet17@gmail.com?subject=Contact from Nova Studio Website" 
              onClick={() => setIsContactOpen(false)}
              className="flex items-center justify-center w-12 h-12 bg-red-500 hover:bg-red-400 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <HiMail className="text-white text-xl" />
            </a>
            <a 
              href="tel:+251722239964" 
              onClick={() => setIsContactOpen(false)}
              className="flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-400 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <HiPhone className="text-white text-xl" />
            </a>
            <a 
              href="https://t.me/negashabebe" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsContactOpen(false)}
              className="flex items-center justify-center w-12 h-12 bg-blue-500 hover:bg-blue-400 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <FaTelegram className="text-white text-xl" />
            </a>
          </div>
          
          {/* Main Info Button */}
          <button 
            onClick={() => setIsContactOpen(!isContactOpen)}
            className={`w-14 h-14 bg-gradient-to-r ${contactIcons[currentIconIndex].color} rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              isContactOpen ? 'rotate-45' : 'animate-bounce'
            }`}
          >
            {React.createElement(contactIcons[currentIconIndex].icon, { className: 'text-white text-2xl' })}
          </button>
        </div>
      )}
    </>
  )
}

export default Home