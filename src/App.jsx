import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import Home from './pages/Home'
import Construction from './pages/Construction'
import Equipment from './pages/Equipment'
import Materials from './pages/Materials'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function NotFound() {
  return (
    <section className="py-24 text-center">
      <h1 className="text-5xl mb-4">Page not found</h1>
      <p className="text-secondary-text mb-8">The page you asked for does not exist or has moved.</p>
      <Button to="/" variant="accent">Back to home</Button>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="skip-link">Skip to main content</a>
      <ScrollToTop />
      <Header />
      <main id="main" className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
