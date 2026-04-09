import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import ExperienceDetail from './pages/ExperienceDetail'

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.08 },
    )

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="glow-blob b1" />
      <div className="glow-blob b2" />
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience-detail" element={<ExperienceDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
