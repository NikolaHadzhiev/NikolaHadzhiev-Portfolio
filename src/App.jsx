import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from "./components/Navbar"
import Themes from "./components/Themes"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'

function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Themes />
   <Routes>
    <Route path="/NikolaHadzhiev-Portfolio/" element={<Home />} />
    <Route path="/NikolaHadzhiev-Portfolio/about" element={<About />} />
    <Route path="/NikolaHadzhiev-Portfolio/portfolio" element={<Portfolio />} />
    <Route path="/NikolaHadzhiev-Portfolio/contact" element={<Contact />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
