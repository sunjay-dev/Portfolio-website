import { useState } from "react";

export default function Header() {

    const [menuStatus, setmenuStatus] = useState(false)

    const openMenu = () => {
        setmenuStatus(true)
        document.body.classList.add('overflow-hidden');
    }

    const closeMenu = () => {
        setmenuStatus(false)
        document.body.classList.remove('overflow-hidden');
    }

    return (
        <header className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-2 dark:text-white">
                {/* logo */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 select-none" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4 17 10 11 4 5"></polyline>
                    <line x1="12" x2="20" y1="19" y2="19"></line>
                </svg>
                <h1 className="font-bold opacity-80 dark:opacity-100 text-xl dark:text-white">Sunjay Kumar</h1>
            </div>

            <div className="[&>*]:cursor-pointer items-center space-x-8 pr-4 font-medium text-gray-600 hidden md:flex">
                <a href="#home" className="hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-200">Home</a>
                <a href="#about" className="hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-200">About</a>
                <a href="#skills" className="hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-200">Skills</a>
                <a href="#projects" className="hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-200">Projects</a>
                <a href="#achievements" className="hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-200">Achievements</a>
                <a href="#contact" className="hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-200">Contact</a>
            </div>
            <button aria-label="Open menu" onClick={() => openMenu()} className="md:hidden dark:text-white">
                {/* Hamburger */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-6 w-6" aria-hidden="true" focusable="false" >
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
            </button>

            <div id="menu"
                className={`fixed inset-0 text-[#3d3d3d] bg-[#f8f8f8] dark:bg-[#3d3d3d] dark:text-white flex-col items-center justify-center space-y-6 text-xl z-50 ${menuStatus ? 'flex' : 'hidden'}`}>
                <button onClick={() => closeMenu()} aria-label="Close menu" id="close-btn" className="absolute top-7 right-6">
                    <svg
                        viewBox="0 0 16 16"
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false" 
                    >
                        <rect transform="rotate(45)" x="4.31" y="-1" width="14" height="2" />
                        <rect transform="rotate(-45)" x="-7" y="10.31" width="14" height="2" />
                    </svg>
                </button>
                {["home", "about", "skills", "achievements", "contact"].map((item) => (
                    <a key={item} href={`#${item}`} onClick={closeMenu} className="active:underline font-medium capitalize">
                        {item}
                    </a>
                ))}
            </div>
        </header>
    )
}
