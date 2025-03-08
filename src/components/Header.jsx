import React, { useState, useEffect } from 'react';
import Logo from "../assets/logo.svg"
import CallIcon from "../assets/call-icon.svg"
import ThemeToggle from './ThemeToggle';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const navLinks = ['Benefits', 'Integrations', 'Testimonials', 'FAQ'];

    // Add scroll event listener for header sizing
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 650);
            
            // Check if we're not on any section and reset active state
            const isOnAnySection = navLinks.some(link => {
                const element = document.getElementById(link.toLowerCase());
                if (!element) return false;
                
                const rect = element.getBoundingClientRect();
                const isVisible = 
                    rect.top <= (window.innerHeight * 0.4) && 
                    rect.bottom >= (window.innerHeight * 0.3);
                return isVisible;
            });
            
            if (!isOnAnySection) {
                setActiveSection('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navLinks]);

    // Add observer to track which section is in view
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -20% 0px',
            threshold: 0.4, // Section is considered in view when 40% visible
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Remove the '#' from the id to match our navLinks
                    setActiveSection(entry.target.id);
                } else if (activeSection === entry.target.id) {
                    // If we're leaving this section and it was active, clear the active state
                    // We'll only do this if no other section becomes active
                    const anyVisible = document.querySelectorAll('.section-observed').length > 0;
                    if (!anyVisible) {
                        setActiveSection('');
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections that correspond to nav links
        navLinks.forEach(link => {
            const element = document.getElementById(link.toLowerCase());
            if (element) {
                element.classList.add('section-observed');
                observer.observe(element);
            }
        });

        return () => {
            navLinks.forEach(link => {
                const element = document.getElementById(link.toLowerCase());
                if (element) {
                    element.classList.remove('section-observed');
                    observer.unobserve(element);
                }
            });
        };
    }, [navLinks, activeSection]);

    return (
        <div className="">
            <nav className="fixed top-5 left-0 right-0 z-50">
                <div className={`
                    transform transition-all duration-500 ease-out
                    mx-auto ${isDarkTheme ? 'header-shadow-dark bg-[#1c1c1c]' : 'header-shadow bg-white'} p-1 z-50 relative
                    ${isScrolled ? 'w-fit scale-95 transition-transform duration-500 ease-in-out' :
                        'w-full max-w-6xl scale-100 transition-transform duration-500 ease-in-out'}
                `}>
                    <div className='header-inner-shadow py-[10px] pl-[15px] pr-[10px] flex items-center justify-between gap-4 w-full'>
                        {/* Logo  */}
                        <a href='#hero' className="flex items-center gap-[5px]">
                            <img src={Logo} alt="Logo" loading='lazy' className='h-10' />
                            <span className={`
                                text-2xl font-semibold ${isDarkTheme ? 'text-white' : 'text-[#1c1c1c]'}
                                ${isScrolled ? 'opacity-0 scale-90 w-0 overflow-hidden transition-opacity duration-500 ease-in-out' : 'opacity-100 scale-100 w-auto transition-opacity duration-500 ease-in-out'}
                            `}>
                                Waitify
                            </span>
                        </a>

                        <div className="flex gap-[5px]">
                            {navLinks.map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className={`
                                        nav-link px-6 py-3 font-normal leading-[1.2em] text-base
                                        transition-all duration-300 ease-in-out
                                        ${activeSection === link.toLowerCase() ?
                                            'bg-[#007DFC] text-white rounded-[50px]' : 
                                            isDarkTheme ? 'text-white' : 'text-[#1c1c1c]'}
                                    `}
                                >
                                    {link}
                                </a>
                            ))}
                        </div>

                        {/* Book a Call btn  */}
                        <div className='flex items-center gap-4'>
                            <button>
                                {isScrolled ? (
                                    <div className={`header-btn p-[10px] rounded-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${isScrolled ? "opacity-100" : "opacity-0"}`}>
                                        <img src={CallIcon} alt="CallIcon" loading='lazy' className='h-[30px]' />
                                    </div>
                                ) : (
                                    <div className={`header-btn px-6 py-3 ${isDarkTheme ? 'text-white' : 'text-[#1c1c1c]'} font-normal leading-[1.2em] text-base transition-opacity duration-500 ease-in-out ${isScrolled ? "opacity-0" : "opacity-100"}`}>
                                        Book a call
                                    </div>
                                )}
                            </button>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;