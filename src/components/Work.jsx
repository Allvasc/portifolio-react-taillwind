import React from 'react'
import WorkImg1 from '../assets/work1.jpg'
import WorkImg2 from '../assets/work2.jpg'
import WorkImg3 from '../assets/work3.jpg'
import WorkImg4 from '../assets/work4.jpg'
import WorkImg5 from '../assets/work5.jpg'
import WorkImg6 from '../assets/work6.jpg'



const Work = () => {
    return (
        <div name='work' className='w-full min-h-[100vh] text-gray-300 bg-[#0a192f] pt-[80px]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-gray-300 text-4xl font-bold inline border-b-4 border-pink-600'>work</p>
                    <p className='text-lg sm:text-2xl py-6 text-gray-300'>Check out some of my recent work</p>
                </div>

                {/*Container*/}

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/*grid*/}

                    <div style={{ backgroundImage: `url(${WorkImg1})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center md:auto content-div'>

                        {/*Hover effect*/}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React.js Aplication
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <button>Demo</button>
                                </a>
                                <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <button>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${WorkImg2})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center md:auto content-div'>

                        {/*Hover effect*/}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React.js Aplication
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <button>Demo</button>
                                </a>
                                <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <button>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div style={{ backgroundImage: `url(${WorkImg3})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center md:auto content-div'>

                        {/*Hover effect*/}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React.js Aplication
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <button>Demo</button>
                                </a>
                                <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <button>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${WorkImg4})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center md:auto content-div'>

                        {/*Hover effect*/}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React.js Aplication
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <button>Demo</button>
                                </a>
                                <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <button>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${WorkImg5})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center md:auto content-div'>

                        {/*Hover effect*/}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React.js Aplication
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <button>Demo</button>
                                </a>
                                <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <button>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${WorkImg6})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center md:auto content-div'>

                        {/*Hover effect*/}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React.js Aplication
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <button>Demo</button>
                                </a>
                                <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <button>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default Work