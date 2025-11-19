import Navbar from './components/Navbar'
import Home from './components/Home'
import Gallery from './components/Gallery'
import UploadGallery from './components/UploadGallery'
import News from './components/News'
import UploadNews from './components/UploadNews'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/upload" element={<UploadGallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/upload" element={<UploadNews />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="mt-16 py-8 border-t border-slate-200 text-center text-slate-500">
        © {new Date().getFullYear()} Our NGO. All rights reserved.
      </footer>
    </div>
  )
}

export default App
