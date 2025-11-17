import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SystemAdministration from './pages/SystemAdministration'
import Security from './pages/Security'
import About from './pages/About'
import CaseStudies from './pages/CaseStudies'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/system-administration" element={<SystemAdministration />} />
      <Route path="/security" element={<Security />} />
      <Route path="/about" element={<About />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
