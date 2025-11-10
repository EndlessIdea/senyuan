import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import GalleryDetail from './pages/GalleryDetail'
import Contact from './pages/Contact'
import Recruit from './pages/Recruit'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<GalleryDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recruit" element={<Recruit />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
