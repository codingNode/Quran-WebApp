"use client"

import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import logo from '../../public/images/logo-w.png';
import Image from 'next/image';


export const getServerSideProps = async () => {
  return {
    props: {}
  };
};


function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }


  return (

    <nav className="bg-gray-800">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center sm:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            aria-label="Main menu"
            aria-expanded="false"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0">
            <Link href="/"className="">
              <Image className='hidden lg:inline' src={logo} alt='logo' width={30} height={20}/>
            </Link>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex-shrink-0">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300 focus:outline-none focus:text-gray-100 focus:bg-gray-700 transition duration-150 ease-in-out">
                  Home  
              </Link>
              <Link href="/quran/chapters" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300 focus:outline-none focus:text-gray-100 focus:bg-gray-700 transition duration-150 ease-in-out">
                  Quran Chapters  
              </Link>
              <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300 focus:outline-none focus:text-gray-100 focus:bg-gray-700 transition duration-150 ease-in-out">
                  Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile menu */}
    <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
      <div className="px-2 pt-2 pb-3">
        <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 focus:outline-none focus:text-gray-100 focus:bg-gray-700 transition duration-150 ease-in-out">
            Home
        </Link>
        <Link href="/quran/chapters" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 focus:outline-none focus:text-gray-100 focus:bg-gray-700 transition duration-150 ease-in-out">
           Quran Chapters
        
        </Link>
        <Link href="/about"
           className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 focus:outline-none focus:text-gray-100 focus:bg-gray-700 transition duration-150 ease-in-out">
            Contact
          
        </Link>
      </div>
    </div>
  
  </nav>

  )
}

export default NavBar