import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import AboutMe from './sections/AboutMe'
import Education from './sections/Education'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Footer from './components/Footer'
import Contact from './sections/Contact'
import Loader from './components/Loader'
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";


function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time (2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/thilina-jayamal-b70160213"
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/ThilinaJayamal"
    },
    {
      icon: <FaWhatsapp />,
      href: "https://api.whatsapp.com/send?phone=94759622397"
    },
    {
      icon: <RiTwitterXLine />,
      href: "https://x.com/Thilina_Jayamal"
    },
  ];

  return (
    <div className='bg-gray-900'>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <div key="content" className='min-h-screen text-white bg-gray-900'>
            <Navbar />
            <Hero />
            <AboutMe />
            <Education />
            <Skills />
            <Projects />
            <Contact />
            <Footer />

            <div className='hidden z-30 fixed bottom-0 left-2 xl:flex flex-col items-center gap-6'>
              {
                socialLinks.map((item, index) => (
                  <a target="_blank" href={item.href}
                    key={index}
                    className='hover:text-white hover:rotate-12 transition-all duration-300 text-white/80 text-3xl'>
                    {item.icon}
                  </a>
                ))
              }

              <div className='w-[1px] h-24 bg-white/70'></div>
            </div>
          </div >
        )}
      </AnimatePresence>
    </div>
  )
}

export default App