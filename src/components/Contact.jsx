import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-full bg-[#0a192f] flex justify-center items-center p-4 pt-[80px]'>
            <form action="https://getform.io/f/33a42a21-4522-45ed-aa0b-1e287601ddc8" method='POST' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4 text-lg sm:text-2xl'>Submit the form below or shut me an email - ah.vasconcelos@gmail.com</p>
                </div>
                <input className='p-2 bg-[#ccd6f6]' type="text" name="Name" id="name" placeholder='Name' required/>
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" name="Email" id="email" placeholder='E-mail' required/>
                <textarea className='bg-[#ccd6f6] p-2' name="Message" rows="10" placeholder='Message' required></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center text-center'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact