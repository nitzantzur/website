import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import Home from '@/pages/Home'
import Publications from '@/pages/Publications'
import WorkingPapers from '@/pages/WorkingPapers'
import Media from '@/pages/Media'
import Talks from '@/pages/Talks'
import Service from '@/pages/Service'
import OtherPublications from '@/pages/OtherPublications'

export default function App() {
  const location = useLocation()

  return (
    <div className="flex flex-col">
      <NavBar />
      <div>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/working-papers" element={<WorkingPapers />} />
            <Route path="/media" element={<Media />} />
            <Route path="/talks" element={<Talks />} />
            <Route path="/service" element={<Service />} />
            <Route path="/policy-publications" element={<OtherPublications />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  )
}
