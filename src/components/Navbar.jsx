import React from 'react'
import { LuMoon } from "react-icons/lu";
import { LuSun } from "react-icons/lu";
import { IoMdMenu } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState('home');
    const [isSticky, setIsSticky] = React.useState(false);
    const [isActive, setIsActive] = React.useState(false)

    const navs = [
        { title: 'Home', subject: 'home', link: '#home' },
        { title: 'About', subject: 'about', link: '#about' },
        { title: 'My Works', subject: 'works', link: '#works' },
        { title: 'Services', subject: 'services', link: '#services' },
    ];

    const handleDarkModeToggle = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    };

    const handleToggleMenu = () => {
        setIsActive(!isActive)
    }

    const hideMenu = () => {
        setIsActive()
    }

    React.useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('header nav a');

            let foundSection = '';
            sections.forEach((section) => {
                const top = window.scrollY;
                const offset = section.offsetTop - 100;
                const height = section.offsetHeight;
                const id = section.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    foundSection = id;
                }
            });

            setActiveSection(foundSection);

            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`fixed top-0 w-full max-w-[1440px] px-[7%] py-8 flex items-center z-[100] duration-500 max-[1024px]:py-8 max-[1024px]:px-[3%] ${isSticky ? 'bg-bg-color dark:bg-bg-color-dark' : 'bg-transparent'}`}>
                <a href="##" className='text-[2.5rem] text-main-color font-semibold mr-auto'>Portfolio.</a>

                <nav className={`max-[580px]:absolute max-[580px]:top-[7rem] max-[580px]:left-0 max-[580px]:w-full max-[580px]:p-0 max-[580px]:bg-bg-color max-[580px]:dark:bg-bg-color-dark max-[580px]:border-t-[0.1rem] max-[580px]:border-t-[#00000033] max-[580px]:shadow-buttonShadow max-[580px]:shadow-[#0000001a] ${isActive ? "max-[580px]:block" : "max-[580px]:hidden"}`}>
                    {navs.map((nav, index) => (
                        <a href={nav.link} key={index} className={`relative text-[1.7rem] font-semibold mr-[3.5rem] max-[580px]:block max-[580px]:text-[2rem] max-[580px]:p-[2.5rem] max-[580px]:pr-[3.5rem] max-[580px]:mr-0 max-[580px]:border-b-[0.1rem] max-[580px]:border-b-shadow-color max-[580px]:dark:border-b-shadow-color-dark ${activeSection === nav.subject ? "text-main-color dark:text-main-color before:absolute before:left-0 before:bottom-[-6px] before:w-full before:h-[0.2rem] before:bg-main-color max-[580px]:text-main-color max-[580px]:before:hidden" : "text-text-color dark:text-text-color-dark"}`}>{nav.title}</a>
                    ))}
                </nav>

                <i className="cursor-pointer text-[2.4rem] ml-8" onClick={handleDarkModeToggle}>
                    {isDarkMode ? <LuSun /> : <LuMoon />}
                </i>

                    {/* TODO: Change the icon */}
                <i className="cursor-pointer text-[2.4rem] ml-8 mr-4 hidden max-[580px]:block" onClick={handleToggleMenu}>
                    {isActive ? <FaXmark /> : <IoMdMenu />}
                </i>
            </header>
        </>
    )
}

export default Navbar
