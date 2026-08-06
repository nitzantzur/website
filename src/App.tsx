import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import Home from '@/pages/Home'
import Publications from '@/pages/Publications'
import WorkingPapers from '@/pages/WorkingPapers'
import Discussions from '@/pages/Discussions'
import Media from '@/pages/Media'
import OtherPublications from '@/pages/OtherPublications'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.gtag?.('config', 'G-6RLG3EHSKE', {
      page_path: location.pathname + location.search,
    })
  }, [location])

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/working-papers" element={<WorkingPapers />} />
            <Route path="/discussions" element={<Discussions />} />
            <Route path="/media" element={<Media />} />
            <Route path="/policy-publications" element={<OtherPublications />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  )
}
