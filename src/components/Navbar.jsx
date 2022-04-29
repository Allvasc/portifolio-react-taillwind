import React, { useState } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa'
import Logo from '../assets/Logo.png'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonalLinesFill} from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={Logo} alt="Logomarca" style={{ width: '50px' }} />
            </div>

            {/* menu */}
                <ul className='hidden md:flex text-lg'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>

            {/* Hamburguer */}
            <div onClick={handleClick} className='md:hidden z-10' >
                {!nav ? <FaBars /> : <FaTimes/>}
            </div>

            {/* Mobile menu */}
                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-center'}>
                    <li className='py-4 text-4xl'>Home</li>
                    <li className='py-4 text-4xl'>About</li>
                    <li className='py-4 text-4xl'>Skills</li>
                    <li className='py-4 text-4xl'>Work</li>
                    <li className='py-4 text-4xl'>Contact</li>
                </ul>

            {/* Social icons */}
            <div className='flex fixed flax-col top-[35%] left-0 text-xl'>
                <ul>
                    <li>
                        <a href="/">
                            Linkedin <FaLinkedin size={20} />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Github <FaGithub size={20} />
                        </a>
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default Navbar