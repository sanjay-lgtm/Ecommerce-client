import React, { useState } from 'react'
import Logo from './Logo'
import { FaShopify } from 'react-icons/fa'
import Button from './Button'
import { MdMenuOpen } from "react-icons/md";
import { IoCloseSharp, IoSunnySharp } from "react-icons/io5";
import { BsSun, BsMoon } from "react-icons/bs";
import { GiMoonBats } from "react-icons/gi";
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    let Links = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Contact', link: '/contact' },
        { name: 'Shop', link: '/shop' },
        { name: 'Cart', link: '/cart' },
        { name: 'Login', link: '/login' },
        { name: 'SignUp', link: '/signup' },

    ];
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`sticky top-0  shadow-md w-full ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} fixed top-0 left-0`}>
            <div className={ `md:flex items-center justify-between  py-4 md:px-10 px-7` }>
                <div className={ `font-bold text-2xl cursor-pointer flex items-center font-[Poppins] ${theme === 'light' ? 'text-gray-800' : 'text-white'}` }>

                    <Link to='/' className={ `text-3xl ${theme === 'light' ? 'text-indigo-600' : 'text-white'} mr-1 pt-2` }>
                    <span >
                        <FaShopify />
                    </span>
                    </Link>
                    <button onClick={ toggleTheme } className="text-3xl ml-4 px-20 mr-1 pt-2 duration-500 ease-in">
                        { theme === 'light' ? <GiMoonBats className='text-gray-800 ' /> : < IoSunnySharp className='text-yellow-300' /> }
                    </button>
                </div>


                <div onClick={ () => setIsOpen(!isOpen) } className={ `${theme === 'light' ? 'text-gray-800' : 'text-white'} text-3xl absolute right-8 top-6 cursor-pointer md:hidden` }>
                    { isOpen ? <IoCloseSharp /> : <MdMenuOpen /> }

                </div>

                <ul className={ `md:flex md:items-center md:pb-0 pb-12 absolute md:static ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'} ` }>
                    {
                        Links.map((link) => (
                            <li key={ link.name } className='md:ml-8 text-xl md:my-0 my-7'>
                                <a href={ link.link } className={ `${theme === 'light' ? 'text-gray-800 hover:text-gray-400' : 'text-white hover:text-indigo-300'} hover:text-gray-400 duration-500` }>{ link.name }</a>
                            </li>
                        ))
                    }
                    <Button>Get Started</Button>

                    {/* <Button>Read More</Button> */ }
                </ul>
            </div>

        </div>
    )
}

export default Navbar
//<h1 className={ `text-3xl font-bold mb-4 text-center ${theme === 'light' ? 'text-black' : 'text-white'}` }>Stack Generate</h1>