import React from 'react'

import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.svg'
import react from '../assets/react.svg'
import next from '../assets/nextjs-icon.svg'
import tailwind from '../assets/Tailwind.png'
import mysql from '../assets/mysql-icon.svg'
import git from '../assets/git.svg'


const Skills = () => {
    return (
        <div name="skills" className='w-full min-h-[100vh] bg-[#0a192f] text-grey-300 pt-[80px]'>
            {/*container*/}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-gray-300 text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='text-lg sm:text-2xl py-6 text-gray-300'>these are the technologies i've worked with</p>
                </div>


                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 text-gray-300'>
                    <div className='h-[150px] text-xl  justify-center items-center flex flex-col shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 py-4 mx-auto' src={html} alt="html icon" />
                        <p>HTML5</p>
                    </div>
                    <div className='h-[150px] text-xl justify-center items-center flex flex-col shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 py-4 mx-auto' src={css} alt="CSS icon" />
                        <p>CSS3</p>
                    </div>
                    <div className='h-[150px] text-xl justify-center items-center flex flex-col shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 py-4 mx-auto' src={javascript} alt="javascript icon" />
                        <p>JAVASCRIPT</p>
                    </div>
                    <div className='h-[150px] text-xl justify-center items-center flex flex-col shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 py-4 mx-auto' src={react} alt="react icon" />
                        <p>REACT.JS</p>
                    </div>
                    <div className='h-[150px] text-xl justify-center items-center flex flex-col shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 py-4 mx-auto' src={next} alt="next icon" />
                        <p>NEXT.jS</p>
                    </div>
                    <div className='h-[150px] text-xl justify-center items-center flex flex-col shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 py-4 mx-auto' src={tailwind} alt="tailwind icon" />
                        <p>TAILWIND</p>
                    </div>
                    <div className='h-[150px] text-xl justify-center items-center flex flex-col shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 py-4 mx-auto' src={mysql} alt="mysql icon" />
                        <p>MYSQL</p>
                    </div>
                    <div className='h-[150px] text-xl justify-center items-center flex flex-col shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 py-4 mx-auto' src={git} alt="git icon" />
                        <p>GIT</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills