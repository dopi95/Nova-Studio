import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SEO from './SEO'
import Navigation from './Navigation'
import { Footer } from './AboutSection'
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'
import { FaFacebookF, FaTiktok, FaTelegram } from 'react-icons/fa'

const Contact: React.FC = () => {
  const { lang } = useParams<{ lang: string }>()
  const [currentLang, setCurrentLang] = useState(() => {
    return lang || 'en'
  })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const seoData = {
    title: {
      en: 'Contact Nova Studio Ethiopia - Get Professional Photography & Videography Services | Free Consultation',
      am: 'የኖቫ ስቱዲዮን ያግኙ - ባለሙያ ፎቶግራፊ እና ቪዲዮግራፊ አገልግሎቶች ያግኙ | ነፃ ማማከር'
    },
    description: {
      en: 'Contact Nova Studio Ethiopia for professional photography, videography, and digital marketing services in Addis Ababa. Get a free consultation for your creative projects. Call +251722239964 or email novastudioet17@gmail.com for expert creative solutions.',
      am: 'ለባለሙያ ፎቶግራፊ፣ ቪዲዮግራፊ እና ዲጂታል ማርኬቲንግ አገልግሎቶች ኖቫ ስቱዲዮ ኢትዮጵያን ያግኙ። ለእርስዎ የፈጠራ ፕሮጀክቶች ነፃ ማማከር ያግኙ። +251722239964 ይደውሉ ወይም novastudioet17@gmail.com ኢሜይል ይላኩ ለባለሙያ የፈጠራ መፍትሄዎች።'
    },
    keywords: {
      en: 'contact Nova Studio, photography services Ethiopia, videography Addis Ababa, creative agency contact, digital marketing consultation, professional photography quote, video production inquiry, social media management contact, event photography booking, medical photography services',
      am: 'ኖቫ ስቱዲዮ ያግኙ, የፎቶግራፊ አገልግሎቶች ኢትዮጵያ, ቪዲዮግራፊ አዲስ አበባ, የፈጠራ ኤጀንሲ ካንታክት, ዲጂታል ማርኬቲንግ ማማከር, ባለሙያ ፎቶግራፊ ዋጋ, የቪዲዮ ምርት ጥያቄ, የማህበራዊ ሚዲያ አስተዳደር ካንታክት, የክስተት ፎቶግራፊ ቦታ ማስያዝ, የህክምና ፎቶግራፊ አገልግሎቶች'
    }
  }

  const content = {
    en: {
      title: 'Contact Us',
      subtitle: 'Get in touch with Nova Studio for your creative needs',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Your Message',
        send: 'Send Message'
      },
      info: {
        address: 'Our Location',
        phone: 'Call Us',
        email: 'Email Us',
        social: 'Contact Us'
      },
      success: {
        title: 'Message Sent Successfully!',
        message: 'Thank you for contacting Nova Studio. We will get back to you soon.',
        close: 'Close'
      }
    },
    am: {
      title: 'ያግኙን',
      subtitle: 'ለእርስዎ የፈጠራ ፍላጎቶች ከኖቫ ስቱዲዮ ጋር ያግኙን',
      form: {
        name: 'ሙሉ ስም',
        email: 'የኢሜይል አድራሻ',
        subject: 'ተጨማሪ',
        message: 'የእርስዎ መልክት',
        send: 'መልክት ላክ'
      },
      info: {
        address: 'የእኛ አድራሻ',
        phone: 'ይደውሉልን',
        email: 'ኢሜይል ይላኩልን',
        social: 'ያግኙን'
      },
      success: {
        title: 'መልክት በተሳካ ሁኔታ ተላከ!',
        message: 'ኖቫ ስቱዲዮን ስላግኙ አምስግናለን። በቅርብ እንመልሳትን።',
        close: 'ይዘጋ'
      }
    }
  }

  useEffect(() => {
    const urlLang = lang || 'en'
    setCurrentLang(urlLang)
    localStorage.setItem('language', urlLang)
  }, [lang])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('subject', formData.subject)
      formDataToSend.append('message', formData.message)
      formDataToSend.append('_to', 'novastudioet17@gmail.com')
      formDataToSend.append('_subject', `Nova Studio Contact: ${formData.subject}`)
      formDataToSend.append('_captcha', 'false')
      
      const response = await fetch('https://formsubmit.co/novastudioet17@gmail.com', {
        method: 'POST',
        body: formDataToSend
      })
      
      setShowSuccess(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
      
    } catch (error) {
      console.error('Failed to send email:', error)
      setShowSuccess(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        url="/contact"
        currentLang={currentLang as 'en' | 'am'}
      />
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-20 overflow-x-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                {content[currentLang].title}
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              {content[currentLang].subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/30 backdrop-blur-sm p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {content[currentLang].form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {content[currentLang].form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {content[currentLang].form.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {content[currentLang].form.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 resize-none text-sm sm:text-base"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-400 to-blue-500 text-black font-bold py-3 sm:py-4 px-6 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (currentLang === 'en' ? 'Sending...' : 'እየላክ ነው...') : content[currentLang].form.send}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              {/* Address */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/30 backdrop-blur-sm p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <HiLocationMarker className="text-black text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{content[currentLang].info.address}</h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      {currentLang === 'en' ? 'Addis Ababa, Ethiopia' : 'አዲስ አበባ፣ ኢትዮጵያ'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/30 backdrop-blur-sm p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <HiPhone className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{content[currentLang].info.phone}</h3>
                    <a href="tel:+251722239964" className="text-sm sm:text-base text-gray-300 hover:text-yellow-400 transition-colors">
                      +251 722 239 964
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/30 backdrop-blur-sm p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <HiMail className="text-white text-lg sm:text-xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{content[currentLang].info.email}</h3>
                    <a href="mailto:novastudioet17@gmail.com" className="text-sm sm:text-base text-gray-300 hover:text-yellow-400 transition-colors break-all">
                      novastudioet17@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/30 backdrop-blur-sm p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-4">{content[currentLang].info.social}</h3>
                <div className="flex justify-center sm:justify-start space-x-6">
                  <a 
                    href="https://www.facebook.com/share/17vpJC8ATQ/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    <FaFacebookF className="text-2xl sm:text-3xl" />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@novastudio17?_r=1&_t=ZS-93GHidBnPSX" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <FaTiktok className="text-2xl sm:text-3xl" />
                  </a>
                  <a 
                    href="https://t.me/negashabebe" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FaTelegram className="text-2xl sm:text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-6 sm:p-8 max-w-md w-full mx-4 transform animate-pulse">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {content[currentLang].success.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {content[currentLang].success.message}
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="bg-gradient-to-r from-yellow-400 to-blue-500 text-black font-bold py-3 px-6 rounded-lg hover:scale-105 transition-all duration-300"
              >
                {content[currentLang].success.close}
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  )
}

export default Contact