import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })))
const Work = lazy(() => import('./pages/Work').then(m => ({ default: m.Work })))
const WorkDetail = lazy(() => import('./pages/WorkDetail').then(m => ({ default: m.WorkDetail })))
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })))
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })))

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
  </div>
)

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/:id" element={<WorkDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
