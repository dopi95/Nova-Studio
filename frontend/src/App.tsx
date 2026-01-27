import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Home from './components/Home'
import Contact from './components/Contact'
import PortfolioPage from './components/PortfolioPage'

function App() {
  return (
    <HelmetProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div className="bg-gray-900 text-gray-100 overflow-x-hidden" style={{ backgroundColor: '#1A1A1B', color: '#E2E2E2' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App