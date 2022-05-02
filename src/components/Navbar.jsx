import React, { useState } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa'
import Logo from '../assets/Logo.png'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

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
                <li><Link activeClass="active" to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link activeClass="active" to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link activeClass="active" to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li><Link activeClass="active" to="work" smooth={true} duration={500}>Work</Link></li>
                <li><Link activeClass="active" to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>

            {/* Hamburguer */}
            <div onClick={handleClick} className='md:hidden z-10' >
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-center'}>
                <li className='py-4 text-4xl'><Link onClick={handleClick} activeClass="active" to="home" smooth={true} duration={500}>Home</Link></li>
                <li className='py-4 text-4xl'><Link onClick={handleClick} activeClass="active" to="about" smooth={true} duration={500}>About</Link></li>
                <li className='py-4 text-4xl'><Link onClick={handleClick} activeClass="active" to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li className='py-4 text-4xl'><Link onClick={handleClick} activeClass="active" to="work" smooth={true} duration={500}>Work</Link></li>
                <li className='py-4 text-4xl'><Link onClick={handleClick} activeClass="active" to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0 text-xl'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#0a66c2]'>
                        <a href="https://www.linkedin.com/in/allvasc/" rel="noreferrer" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#161b22]'>
                        <a href="https://github.com/Allvasc" rel="noreferrer" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#BB001B]'>
                        <a href="mailto:ah.vasconcelos@gmail.com" rel="noreferrer" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#34A853]'>
                        <a href="https://drive.google.com/file/d/1f0pJlUJFL6HetbGNeQiAEPr8dhpi67GR/view?usp=sharing" download className='flex justify-between items-center w-full text-gray-300'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar