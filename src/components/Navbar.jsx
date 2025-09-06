import React from 'react'

const Navbar = () => {
    return (
        <header className="p-3 bg-transparent text-white font-bold w-full">
            <div className="container flex justify-between h-20 ">
                <a
                    href="#"
                    aria-label="Back to homepage"
                    className="flex items-center shadow-2xl mx-20 my-10"
                >
                    <img src="/Passecure-Logo.jpg" alt="Logo" className='w-18' />
                    <img src="/Passecure-Text.png" alt="Text" className='w-50' />
                </a>
                <div className='gap-8 mr-12 hidden md:flex'>
                    <span className='mt-2'>
                        <button className="relative block group hover:cursor-pointer">
                            <span className="absolute inset-0  bg-blue-800  rounded-lg"></span>
                            <div className="transition bg-black relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
                                <div className="p-2 flex gap-2">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/ynsswhvj.json"
                                        trigger="hover"
                                        colors="primary:#ffffff">
                                    </lord-icon>
                                    <span className="text-xl font-outerSans font-medium">My Passwords</span>
                                </div>
                            </div>
                        </button>
                    </span>
                    <span className='mt-2'>
                        <button className="relative block group hover:cursor-pointer">
                            <span className="absolute inset-0  bg-blue-800  rounded-lg"></span>
                            <div className="transition bg-black relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
                                <div className="p-2 flex gap-2">
                                    <img className='invert  w-7' src="/github.svg" alt="github logo" />
                                    <span className="text-xl font-outerSans font-medium">GitHub</span>
                                </div>
                            </div>
                        </button>
                    </span>
                </div>

            </div>
        </header>
    )
}

export default Navbar
