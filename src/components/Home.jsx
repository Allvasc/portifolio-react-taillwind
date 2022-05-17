import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f] z-10'>

      {/* Container */}
      <motion.div initial={{ y: '100vh' }} animate={{ y: 0 }} transition={{type: 'spring', duration:1, bounce: 0.2}}
       className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 text-base sm:text-4xl font-bold'>Hi, my name is</p>
        <h1 className='text-3xl sm:text-7xl font-bold text-[#ccd6f6]'>Allison Vasconcelos</h1>
        <h2 className='text-2xl sm:text-5xl font-bold text-[#8892b0]'>I'm Front end Developer.</h2>
        <p className='text-[#8892b0] text-lg sm:text-2xl py-4 max-w-[700px]'>specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.</p>
        <div>
          <button className='text-white border-2 group px-6 py-3 my-2 flex justify-center items-center hover:bg-pink-600 border-pink-600 text-base'><Link activeClass="active" to="about" smooth={true} duration={500}>View Work</Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </motion.div>

    </div>
  )
}

export default Home