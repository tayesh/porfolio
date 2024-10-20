import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className='w-full text-2xl flex justify-between items-center py-7 px-7 bg-gradient-to-r from-teal-50 to-teal-300 relative'>
            <h2 className='text-3xl font-bold'>Portfolio</h2>
            <div className='lg:hidden flex items-center'>
                <button onClick={toggleMenu} className='text-3xl focus:outline-none'>
                    <FaBars />
                </button>
            </div>

            {/* Sidebar for mobile view */}
            <div
                className={`fixed right-0 top-0 h-full w-64 bg-white z-50 shadow-lg p-5 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } duration-300`}>
                <button
                    onClick={closeMenu}
                    className='text-3xl absolute top-5 right-5 focus:outline-none'>
                    <FaTimes />
                </button>
                <div className='flex flex-col gap-5 mt-16'>
                    <p onClick={closeMenu} className='cursor-pointer'> <a href="#intro">Introduction</a></p>
                    <p onClick={closeMenu} className='cursor-pointer'> <a href="#skill">Skills</a></p>
                    <p onClick={closeMenu} className='cursor-pointer'> <a href="#projects">Projects</a></p>
                    <p onClick={closeMenu} className='cursor-pointer'> <a href="#education">Education</a></p>
                    <p onClick={closeMenu} className='cursor-pointer'> <a href="#contact">Contact</a></p>
                </div>
            </div>

            {/* Backdrop for mobile view */}
            {isOpen && (
                <div
                    className='fixed inset-0 bg-black opacity-50 z-40'
                    onClick={closeMenu}></div>
            )}

            {/* Desktop Navbar */}
            <div className='hidden lg:flex items-center gap-10'>
                <p className='cursor-pointer'> <a href="#intro">Introduction</a></p>
                <p className='cursor-pointer'> <a href="#skill">Skills</a></p>
                <p className='cursor-pointer'> <a href="#projects">Projects</a></p>
                <p className='cursor-pointer'> <a href="#education">Education</a></p>
                <p className='cursor-pointer'> <a href="#contact">Contact</a></p>
            </div>
        </div>
    );
}

export default Navbar;
