// Localization data
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Our Work",
      contact: "Contact"
    },
    hero: {
      title: "Creative Solutions",
      subtitle: "for Your Brand",
      description: "Professional Social Media Management, Video Editing & Photo Enhancement",
      getStarted: "Get Started",
      viewPortfolio: "View Portfolio"
    },
    about: {
      title: "About Nova Studio",
      description: "We're a passionate team of creative professionals dedicated to elevating your brand through stunning visuals and strategic social media management.",
      expertTeam: "Expert Team",
      expertDesc: "Professional designers, editors, and social media strategists",
      fastDelivery: "Fast Delivery",
      fastDesc: "Quick turnaround times without compromising quality",
      clientFocused: "Client Focused",
      clientDesc: "Your success is our priority, always"
    },
    services: {
      title: "Our Services",
      description: "Comprehensive creative solutions to boost your brand's digital presence",
      socialMedia: "Social Media Management",
      socialDesc: "Complete social media strategy, content creation, and community management across all platforms.",
      videoEditing: "Video Editing",
      videoDesc: "Professional video editing for social media, marketing campaigns, and promotional content.",
      photoEnhancement: "Photo Enhancement",
      photoDesc: "Professional photo editing and enhancement to make your visuals stand out.",
      graphicDesign: "Graphic Design",
      graphicDesc: "Custom graphics, logos, and visual identity design for your brand.",
      digitalMarketing: "Digital Marketing",
      digitalDesc: "Strategic digital marketing campaigns to grow your online presence.",
      brandStrategy: "Brand Strategy",
      brandDesc: "Comprehensive brand strategy and positioning to differentiate your business."
    },
    portfolio: {
      title: "Our Work",
      description: "Showcasing our latest projects and creative solutions"
    },
    contact: {
      title: "Get In Touch",
      description: "Ready to elevate your brand? Let's discuss your project",
      info: "Contact Information",
      email: "Email",
      phone: "Phone",
      location: "Location",
      followUs: "Follow Us",
      firstName: "First Name",
      lastName: "Last Name",
      serviceNeeded: "Service Needed",
      selectService: "Select a service",
      message: "Message",
      messagePlaceholder: "Tell us about your project...",
      sendMessage: "Send Message"
    },
    footer: {
      description: "Elevating brands through creative digital solutions and strategic social media management.",
      services: "Services",
      company: "Company",
      newsletter: "Newsletter",
      newsletterDesc: "Subscribe to get updates on our latest work and insights.",
      copyright: "© 2024 Nova Studio. All rights reserved."
    }
  },
  am: {
    nav: {
      home: "ቤት",
      about: "ስለ እኛ",
      services: "አገልግሎቶች",
      portfolio: "የእኛ ስራ",
      contact: "ያግኙን"
    },
    hero: {
      title: "የፈጠራ መፍትሄዎች",
      subtitle: "ለእርስዎ ብራንድ",
      description: "ሙያዊ የማህበራዊ ሚዲያ አስተዳደር፣ የቪዲዮ አርትዖት እና የፎቶ ማሻሻያ",
      getStarted: "ይጀምሩ",
      viewPortfolio: "ስራዎችን ይመልከቱ"
    },
    about: {
      title: "ስለ ኖቫ ስቱዲዮ",
      description: "እኛ የፈጠራ ባለሙያዎች ቡድን ነን፣ የእርስዎን ብራንድ በሚያምር ምስላዊ እና ስትራቴጂካዊ የማህበራዊ ሚዲያ አስተዳደር ለማሳደግ የተወሰንን።",
      expertTeam: "ባለሙያ ቡድን",
      expertDesc: "ሙያዊ ዲዛይነሮች፣ አርታዒዎች እና የማህበራዊ ሚዲያ ስትራቴጂስቶች",
      fastDelivery: "ፈጣን አቅርቦት",
      fastDesc: "ጥራትን ሳንጎዳ ፈጣን የመላኪያ ጊዜ",
      clientFocused: "ደንበኛ ላይ ያተኮረ",
      clientDesc: "የእርስዎ ስኬት ሁልጊዜ የእኛ ቅድሚያ ነው"
    },
    services: {
      title: "የእኛ አገልግሎቶች",
      description: "የእርስዎን ብራንድ ዲጂታል መገኘት ለማሳደግ አጠቃላይ የፈጠራ መፍትሄዎች",
      socialMedia: "የማህበራዊ ሚዲያ አስተዳደር",
      socialDesc: "በሁሉም መድረኮች ላይ ሙሉ የማህበራዊ ሚዲያ ስትራቴጂ፣ የይዘት ፈጠራ እና የማህበረሰብ አስተዳደር።",
      videoEditing: "የቪዲዮ አርትዖት",
      videoDesc: "ለማህበራዊ ሚዲያ፣ የግብይት ዘመቻዎች እና የማስተዋወቂያ ይዘት ሙያዊ የቪዲዮ አርትዖት።",
      photoEnhancement: "የፎቶ ማሻሻያ",
      photoDesc: "የእርስዎ ምስሎች እንዲበልጡ ለማድረግ ሙያዊ የፎቶ አርትዖት እና ማሻሻያ።",
      graphicDesign: "ግራፊክ ዲዛይን",
      graphicDesc: "ለእርስዎ ብራንድ ብጁ ግራፊክስ፣ አርማዎች እና የእይታ ማንነት ዲዛይን።",
      digitalMarketing: "ዲጂታል ማርኬቲንግ",
      digitalDesc: "የእርስዎን የመስመር ላይ መገኘት ለማሳደግ ስትራቴጂካዊ ዲጂታል የግብይት ዘመቻዎች።",
      brandStrategy: "የብራንድ ስትራቴጂ",
      brandDesc: "የእርስዎን ንግድ ለመለየት አጠቃላይ የብራንድ ስትራቴጂ እና አቀማመጥ።"
    },
    portfolio: {
      title: "የእኛ ስራ",
      description: "የእኛን የቅርብ ጊዜ ፕሮጀክቶች እና የፈጠራ መፍትሄዎች ማሳያ"
    },
    contact: {
      title: "ያግኙን",
      description: "የእርስዎን ብራንድ ለማሳደግ ዝግጁ ነዎት? የእርስዎን ፕሮጀክት እንወያይ",
      info: "የመገኛ መረጃ",
      email: "ኢሜይል",
      phone: "ስልክ",
      location: "አድራሻ",
      followUs: "ይከተሉን",
      firstName: "የመጀመሪያ ስም",
      lastName: "የአባት ስም",
      serviceNeeded: "የሚፈለግ አገልግሎት",
      selectService: "አገልግሎት ይምረጡ",
      message: "መልእክት",
      messagePlaceholder: "ስለ ፕሮጀክትዎ ይንገሩን...",
      sendMessage: "መልእክት ላክ"
    },
    footer: {
      description: "ብራንዶችን በፈጠራ ዲጂታል መፍትሄዎች እና ስትራቴጂካዊ የማህበራዊ ሚዲያ አስተዳደር ማሳደግ።",
      services: "አገልግሎቶች",
      company: "ኩባንያ",
      newsletter: "ዜና መጽሔት",
      newsletterDesc: "በእኛ የቅርብ ጊዜ ስራ እና ግንዛቤዎች ላይ ዝማኔዎችን ለማግኘት ይመዝገቡ።",
      copyright: "© 2024 ኖቫ ስቱዲዮ። ሁሉም መብቶች የተጠበቁ ናቸው።"
    }
  }
};

// Current language state
let currentLang = 'en';

// Translation function
function t(key) {
  const keys = key.split('.');
  let value = translations[currentLang];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}

// Update all text content
function updateContent() {
  // Navigation
  document.querySelector('a[href="#home"]').textContent = t('nav.home');
  document.querySelector('a[href="#about"]').textContent = t('nav.about');
  document.querySelector('a[href="#services"]').textContent = t('nav.services');
  document.querySelector('a[href="#portfolio"]').textContent = t('nav.portfolio');
  document.querySelector('a[href="#contact"]').textContent = t('nav.contact');
  
  // Mobile navigation
  document.querySelectorAll('.mobile-nav-link')[0].textContent = t('nav.home');
  document.querySelectorAll('.mobile-nav-link')[1].textContent = t('nav.about');
  document.querySelectorAll('.mobile-nav-link')[2].textContent = t('nav.services');
  document.querySelectorAll('.mobile-nav-link')[3].textContent = t('nav.portfolio');
  document.querySelectorAll('.mobile-nav-link')[4].textContent = t('nav.contact');
  
  // Hero section
  document.querySelector('h1 span:first-child').textContent = t('hero.title');
  document.querySelector('h1 span:last-child').textContent = t('hero.subtitle');
  document.querySelector('#home p').textContent = t('hero.description');
  document.querySelector('#home button:first-of-type').textContent = t('hero.getStarted');
  document.querySelector('#home button:last-of-type').textContent = t('hero.viewPortfolio');
  
  // About section
  document.querySelector('#about h2').textContent = t('about.title');
  document.querySelector('#about > div > div:first-child p').textContent = t('about.description');
  
  // Services section
  document.querySelector('#services h2').textContent = t('services.title');
  document.querySelector('#services > div > div:first-child p').textContent = t('services.description');
  
  // Portfolio section
  document.querySelector('#portfolio h2').textContent = t('portfolio.title');
  document.querySelector('#portfolio > div > div:first-child p').textContent = t('portfolio.description');
  
  // Contact section
  document.querySelector('#contact h2').textContent = t('contact.title');
  document.querySelector('#contact > div > div:first-child p').textContent = t('contact.description');
  
  // Footer
  document.querySelector('footer p:first-of-type').textContent = t('footer.description');
  document.querySelector('footer .border-t p').textContent = t('footer.copyright');
}

export { translations, currentLang, t, updateContent };