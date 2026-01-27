import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
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
            <Route path="/" element={<Navigate to="/en" replace />} />
            <Route path="/:lang" element={<Home />} />
            <Route path="/:lang/contact" element={<Contact />} />
            <Route path="/:lang/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<Navigate to="/en/contact" replace />} />
            <Route path="/portfolio" element={<Navigate to="/en/portfolio" replace />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App