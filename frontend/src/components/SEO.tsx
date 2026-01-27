import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: {
    en: string
    am: string
  }
  description?: {
    en: string
    am: string
  }
  keywords?: {
    en: string
    am: string
  }
  url?: string
  image?: string
  type?: string
  currentLang: 'en' | 'am'
  noIndex?: boolean
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  url = '',
  image = '/img/logo.jpg',
  type = 'website',
  currentLang = 'en',
  noIndex = false
}) => {
  const baseUrl = 'https://novastudio.et'
  const fullUrl = `${baseUrl}${url}`
  
  // Default SEO data
  const defaultSEO = {
    title: {
      en: 'Nova Studio Ethiopia - Premier Creative Production Agency | Photography & Videography',
      am: 'ኖቫ ስቱዲዮ ኢትዮጵያ - ዋና የፈጠራ ምርት ኤጀንሲ | ፎቶግራፊ እና ቪዲዮግራፊ'
    },
    description: {
      en: 'Nova Studio is Ethiopia\'s leading creative production agency in Addis Ababa. We specialize in professional photography, videography, social media management, digital marketing, event coverage, and medical photography. Transform your brand with our expert creative services.',
      am: 'ኖቫ ስቱዲዮ በአዲስ አበባ የሚገኝ የኢትዮጵያ ዋና የፈጠራ ምርት ኤጀንሲ ነው። በባለሙያ ፎቶግራፊ፣ ቪዲዮግራፊ፣ የማህበራዊ ሚዲያ አስተዳደር፣ ዲጂታል ማርኬቲንግ፣ የክስተት ሽፋን እና የህክምና ፎቶግራፊ ላይ ልዩ ችሎታ አለን። ከእኛ ባለሙያ የፈጠራ አገልግሎቶች ጋር የእርስዎን ብራንድ ይለውጡ።'
    },
    keywords: {
      en: 'Nova Studio Ethiopia, photography Addis Ababa, videography Ethiopia, creative agency, social media management, digital marketing, event photography, medical photography, brand storytelling, professional photography, video production, content creation, marketing agency Ethiopia',
      am: 'ኖቫ ስቱዲዮ ኢትዮጵያ, ፎቶግራፊ አዲስ አበባ, ቪዲዮግራፊ ኢትዮጵያ, የፈጠራ ኤጀንሲ, የማህበራዊ ሚዲያ አስተዳደር, ዲጂታል ማርኬቲንግ, የክስተት ፎቶግራፊ, የህክምና ፎቶግራፊ, የብራንድ ተረት, ባለሙያ ፎቶግራፊ, የቪዲዮ ምርት, የይዘት ፈጠራ, የማርኬቲንግ ኤጀንሲ ኢትዮጵያ'
    }
  }

  const seoTitle = title?.[currentLang] || defaultSEO.title[currentLang]
  const seoDescription = description?.[currentLang] || defaultSEO.description[currentLang]
  const seoKeywords = keywords?.[currentLang] || defaultSEO.keywords[currentLang]
  const seoImage = image.startsWith('http') ? image : `${baseUrl}${image}`

  // Structured data for different page types
  const getStructuredData = () => {
    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": currentLang === 'en' ? "Nova Studio Ethiopia" : "ኖቫ ስቱዲዮ ኢትዮጵያ",
      "alternateName": currentLang === 'en' ? "ኖቫ ስቱዲዮ" : "Nova Studio",
      "url": baseUrl,
      "logo": `${baseUrl}/img/logo.jpg`,
      "description": seoDescription,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": currentLang === 'en' ? "Addis Ababa" : "አዲስ አበባ",
        "addressCountry": currentLang === 'en' ? "Ethiopia" : "ኢትዮጵያ"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+251722239964",
        "contactType": "customer service",
        "email": "novastudioet17@gmail.com",
        "availableLanguage": ["English", "Amharic"]
      },
      "sameAs": [
        "https://www.facebook.com/share/17vpJC8ATQ/",
        "https://www.tiktok.com/@novastudio17",
        "https://t.me/negashabebe"
      ],
      "serviceArea": {
        "@type": "Country",
        "name": currentLang === 'en' ? "Ethiopia" : "ኢትዮጵያ"
      },
      "foundingDate": "2018",
      "slogan": currentLang === 'en' ? "Transforming Ideas Into Reality" : "ሀሳቦችን ወደ እውነታ መቀየር"
    }

    // Add specific structured data based on page type
    if (url === '/contact') {
      return {
        ...baseStructuredData,
        "@type": "LocalBusiness",
        "priceRange": "$$",
        "openingHours": "Mo-Fr 09:00-18:00",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "9.0192",
          "longitude": "38.7525"
        }
      }
    }

    if (url === '/portfolio') {
      return {
        ...baseStructuredData,
        "@type": "CreativeWork",
        "about": currentLang === 'en' ? "Photography and videography portfolio" : "የፎቶግራፊ እና ቪዲዮግራፊ ስብስብ"
      }
    }

    return baseStructuredData
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={currentLang} />
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content="Nova Studio Ethiopia" />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="language" content={currentLang === 'en' ? 'English' : 'Amharic'} />
      
      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="ET-AA" />
      <meta name="geo.placename" content={currentLang === 'en' ? 'Addis Ababa, Ethiopia' : 'አዲስ አበባ፣ ኢትዮጵያ'} />
      <meta name="geo.position" content="9.0192;38.7525" />
      <meta name="ICBM" content="9.0192, 38.7525" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={currentLang === 'en' ? 'Nova Studio Ethiopia' : 'ኖቫ ስቱዲዮ ኢትዮጵያ'} />
      <meta property="og:locale" content={currentLang === 'en' ? 'en_US' : 'am_ET'} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Alternate Language Links */}
      <link rel="alternate" hrefLang="en" href={`${baseUrl}${url}`} />
      <link rel="alternate" hrefLang="am" href={`${baseUrl}${url}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${url}`} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData(), null, 2)}
      </script>
    </Helmet>
  )
}

export default SEO