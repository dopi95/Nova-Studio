import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { t, updateContent } from '../i18n'

const Navigation: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { lang } = useParams<{ lang: string }>()
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState(() => {
    return lang || 'en'
  })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [translations, setTranslations] = useState({
    brandName: 'NOVA STUDIO',
    nav: {
      home: 'Home',
      about: 'About', 
      services: 'Services',
      portfolio: 'Our Work',
      contact: 'Contact'
    }
  })

  const toggleLanguage = (newLang: string) => {
    setCurrentLang(newLang)
    setIsLangOpen(false)
    localStorage.setItem('language', newLang)
    updateTranslations(newLang)
    
    // Update URL with new language
    const currentPath = location.pathname.replace(/^\/(en|am)/, '')
    navigate(`/${newLang}${currentPath}`)
  }

  const updateTranslations = (lang: string) => {
    if (lang === 'am') {
      setTranslations({
        brandName: 'ኖቫ ስቱዲዮ',
        nav: {
          home: 'መነሻ',
          about: 'ስለ እኛ',
          services: 'አገልግሎቶች', 
          portfolio: 'የእኛ ስራ',
          contact: 'ያግኙን'
        }
      })
    } else {
      setTranslations({
        brandName: 'NOVA STUDIO',
        nav: {
          home: 'Home',
          about: 'About',
          services: 'Services',
          portfolio: 'Our Work', 
          contact: 'Contact'
        }
      })
    }
  }

  const handleSectionNavigation = (sectionId: string) => {
    const targetPath = `/${currentLang}`
    if (location.pathname !== targetPath) {
      navigate(targetPath)
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const urlLang = lang || 'en'
    setCurrentLang(urlLang)
    localStorage.setItem('language', urlLang)
    updateTranslations(urlLang)
  }, [lang])

  return (
    <>
      <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-b" style={{ backgroundColor: 'rgba(26, 26, 27, 0.95)', borderColor: '#2D2E32' }}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/img/logo.jpg" alt="Nova Studio" className="h-10 w-10 mr-3 rounded-full border-2 shadow-md object-cover" style={{ borderColor: '#C5A059' }} />
              <a href={`/${currentLang}`} className="text-2xl font-bold hover:opacity-80 transition-opacity" style={{ background: 'linear-gradient(to right, #C5A059, #2F58CD)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {translations.brandName}
              </a>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href={`/${currentLang}`} className="nav-link hover:text-purple-400 transition-colors">{translations.nav.home}</a>
              <button onClick={() => handleSectionNavigation('about')} className="nav-link hover:text-purple-400 transition-colors bg-transparent border-none cursor-pointer">{translations.nav.about}</button>
              <button onClick={() => handleSectionNavigation('services')} className="nav-link hover:text-purple-400 transition-colors bg-transparent border-none cursor-pointer">{translations.nav.services}</button>
              <button onClick={() => handleSectionNavigation('portfolio')} className="nav-link hover:text-purple-400 transition-colors bg-transparent border-none cursor-pointer">{translations.nav.portfolio}</button>
              <a href={`/${currentLang}/contact`} className="nav-link hover:text-purple-400 transition-colors">{translations.nav.contact}</a>
            </div>
            <div className="flex items-center space-x-4">
              {/* Language Toggle - Desktop Only */}
              <div className="relative hidden md:block">
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors" 
                  style={{ color: '#E2E2E2' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(45, 46, 50, 0.5)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <img src={currentLang === 'en' ? '/assets/uk.png' : '/assets/et.png'} alt="Flag" className="w-5 h-4 object-cover rounded-sm" />
                  <span>{currentLang === 'en' ? 'EN' : 'አማ'}</span>
                  <i className="fas fa-chevron-down text-xs"></i>
                </button>
                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-32 rounded-lg shadow-lg border" style={{ backgroundColor: '#2D2E32', borderColor: '#C5A059' }}>
                    <button 
                      onClick={() => toggleLanguage('en')}
                      className="w-full px-4 py-2 text-left rounded-t-lg flex items-center transition-colors" 
                      style={{ color: '#E2E2E2' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(197, 160, 89, 0.2)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <img src="/assets/uk.png" alt="UK Flag" className="w-5 h-4 object-cover rounded-sm mr-2" />English
                    </button>
                    <button 
                      onClick={() => toggleLanguage('am')}
                      className="w-full px-4 py-2 text-left rounded-b-lg flex items-center transition-colors" 
                      style={{ color: '#E2E2E2' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(197, 160, 89, 0.2)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <img src="/assets/et.png" alt="Ethiopia Flag" className="w-5 h-4 object-cover rounded-sm mr-2" />አማርኛ
                    </button>
                  </div>
                )}
              </div>
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg transition-all duration-300" 
                style={{ color: '#E2E2E2' }}
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                  <span className={`absolute h-0.5 w-6 bg-current top-3 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} style={{ backgroundColor: 'rgba(26, 26, 27, 0.98)', backdropFilter: 'blur(10px)' }}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a href={`/${currentLang}`} onClick={() => setIsMobileMenuOpen(false)} className={`text-2xl font-semibold transition-all duration-500 hover:scale-105 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ color: '#E2E2E2', transitionDelay: '100ms' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C5A059'} onMouseLeave={(e) => e.currentTarget.style.color = '#E2E2E2'}>{translations.nav.home}</a>
          <button onClick={() => handleSectionNavigation('about')} className={`text-2xl font-semibold transition-all duration-500 hover:scale-105 bg-transparent border-none cursor-pointer ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ color: '#E2E2E2', transitionDelay: '200ms' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C5A059'} onMouseLeave={(e) => e.currentTarget.style.color = '#E2E2E2'}>{translations.nav.about}</button>
          <button onClick={() => handleSectionNavigation('services')} className={`text-2xl font-semibold transition-all duration-500 hover:scale-105 bg-transparent border-none cursor-pointer ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ color: '#E2E2E2', transitionDelay: '300ms' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C5A059'} onMouseLeave={(e) => e.currentTarget.style.color = '#E2E2E2'}>{translations.nav.services}</button>
          <button onClick={() => handleSectionNavigation('portfolio')} className={`text-2xl font-semibold transition-all duration-500 hover:scale-105 bg-transparent border-none cursor-pointer ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ color: '#E2E2E2', transitionDelay: '400ms' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C5A059'} onMouseLeave={(e) => e.currentTarget.style.color = '#E2E2E2'}>{translations.nav.portfolio}</button>
          <a href={`/${currentLang}/contact`} onClick={() => setIsMobileMenuOpen(false)} className={`text-2xl font-semibold transition-all duration-500 hover:scale-105 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ color: '#E2E2E2', transitionDelay: '500ms' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C5A059'} onMouseLeave={(e) => e.currentTarget.style.color = '#E2E2E2'}>{translations.nav.contact}</a>
          
          {/* Language Toggle in Mobile Menu */}
          <div className={`mt-8 pt-8 border-t transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ borderColor: '#2D2E32', transitionDelay: '600ms' }}>
            <div className="flex items-center justify-center space-x-4">
              <button 
                onClick={() => { toggleLanguage('en'); setIsMobileMenuOpen(false); }}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 border-2 ${
                  currentLang === 'en' 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-yellow-400 shadow-lg shadow-yellow-400/30' 
                    : 'bg-gray-800/50 text-gray-300 border-gray-600 hover:border-yellow-400/50 hover:bg-gray-700/50'
                }`}
              >
                <img src="/assets/uk.png" alt="UK Flag" className="w-5 h-4 object-cover rounded-sm" />
                <span className="text-sm font-semibold">EN</span>
              </button>
              <button 
                onClick={() => { toggleLanguage('am'); setIsMobileMenuOpen(false); }}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 border-2 ${
                  currentLang === 'am' 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-yellow-400 shadow-lg shadow-yellow-400/30' 
                    : 'bg-gray-800/50 text-gray-300 border-gray-600 hover:border-yellow-400/50 hover:bg-gray-700/50'
                }`}
              >
                <img src="/assets/et.png" alt="Ethiopia Flag" className="w-5 h-4 object-cover rounded-sm" />
                <span className="text-sm font-semibold">አማ</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation