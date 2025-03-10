import React, { useState } from 'react'
import Logo from "../assets/logo.svg"
import Twitter from "../assets/x.svg"
import LinkedIn from "../assets/linkedIn.svg"
import Instagram from "../assets/instagram.svg"
import Facebook from "../assets/facebook.svg"
import LinkedInHover from "../assets/hover-linkedin.svg";
import InstagramHover from "../assets/hover-instagram.svg";
import FacebookHover from "../assets/hover-facebook.svg";

const Footer = () => {
    const [isHovered, setIsHovered] = useState(false);

    const links = [
        { href: '#benefits', label: 'Benefits' },
        { href: '#integrations', label: 'Integrations' },
        { href: '#testimonials', label: 'Testimonials' },
        { href: '#faq', label: 'FAQ' },
        { href: '#contact', label: 'Contact' },
        { href: '#', label: '404' }
    ];

    return (
        <footer className='p-6 max-w-[1000px] w-full mx-auto space-y-6 flex flex-col justify-center items-center'>
            {/* Logo  */}
            <div
                className="inline-block cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="flex items-center">
                    {/* Logo */}
                    <img
                        src={Logo}
                        alt="Waitify logo"
                        className="h-[46] w-[46px]"
                        loading="lazy"
                    />

                    {/* Text with simple slide and fade */}
                    <div
                        className={`
                            overflow-hidden transition-all duration-300 ease-in-out
                            ${isHovered ? 'w-32 opacity-100' : 'w-0 opacity-0'}
                        `}
                        style={{ transitionProperty: 'width, opacity' }}
                    >
                        <p className="text-4xl font-semibold text-gray-900 dark:text-white whitespace-nowrap pl-2">
                            Waitify
                        </p>
                    </div>
                </div>
            </div>

            {/* Links  */}
            <div className='flex items-center gap-6 flex-col md:flex-row text-[#4d4d4d] dark:text-white/90 text-base'>
                {links.map((link, index) => (
                    <a key={index} href={link.href}>{link.label}</a>
                ))}
            </div>

            {/* Copyright & Social Links  */}
            <div className='flex items-center justify-between w-full gap-4 flex-col-reverse md:flex-row'>
                <p className='text-[#4d4d4d] text-sm md:text-base dark:text-white'>© 2024 All Rights Reserved</p>

                {/* Social Icons  */}
                <div className="pt-4 flex justify-center items-center gap-[10px]">
                    <a
                        href="https://x.com/"
                        target="_blank"
                        className="bg-custom-white rounded-[20px] min-w-9 min-h-9 opacity-100 shadow-social-icons dark:shadow-social-icons-dark p-[3px] relative overflow-hidden group"
                    >
                        <div className="p-[10px] group-hover:translate-x-[120%] group-hover:rotate-[360deg] transition-all duration-700 ease-in-out">
                            <img src={Twitter} alt="Twitter" className="h-7 w-7" />
                        </div>
                        <div className="p-[10px] absolute top-0 left-0 -translate-x-[120%] rotate-[-360deg] group-hover:translate-x-0 group-hover:rotate-0 transition-all duration-700 ease-in-out">
                            <img src={Twitter} alt="Twitter" className="h-7 w-7 mt-[3px] ml-[3px]" />
                        </div>
                    </a>

                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        className="bg-custom-white rounded-[20px] min-w-9 min-h-9 opacity-100 shadow-social-icons dark:shadow-social-icons-dark p-[3px] relative overflow-hidden group"
                    >
                        <div className="p-[10px] group-hover:translate-x-[120%] group-hover:rotate-[360deg] transition-all duration-700 ease-in-out">
                            <img src={LinkedIn} alt="LinkedIn" className="h-7" />
                        </div>
                        <div className="p-[10px] absolute top-0 left-0 -translate-x-[120%] rotate-[-360deg] group-hover:translate-x-0 group-hover:rotate-0 transition-all duration-700 ease-in-out">
                            <img src={LinkedInHover} alt="LinkedIn" className="h-7 mt-[3px] ml-[3px]" />
                        </div>
                    </a>

                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="bg-custom-white rounded-[20px] min-w-9 min-h-9 opacity-100 shadow-social-icons dark:shadow-social-icons-dark p-[3px] relative overflow-hidden group"
                    >
                        <div className="p-[10px] group-hover:translate-x-[120%] group-hover:rotate-[360deg] transition-all duration-700 ease-in-out">
                            <img src={Instagram} alt="Instagram" className="h-7" />
                        </div>
                        <div className="p-[10px] absolute top-0 left-0 -translate-x-[120%] rotate-[-360deg] group-hover:translate-x-0 group-hover:rotate-0 transition-all duration-700 ease-in-out">
                            <img src={InstagramHover} alt="Instagram" className="h-7 mt-[3px] ml-[3px]" />
                        </div>
                    </a>

                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        className="bg-custom-white rounded-[20px] min-w-9 min-h-9 opacity-100 shadow-social-icons dark:shadow-social-icons-dark p-[3px] relative overflow-hidden group"
                    >
                        <div className="p-[10px] group-hover:translate-x-[120%] group-hover:rotate-[360deg] transition-all duration-700 ease-in-out">
                            <img src={Facebook} alt="Facebook" className="h-7" />
                        </div>
                        <div className="p-[10px] w-full absolute top-0 left-0 -translate-x-[130%] rotate-[-360deg] group-hover:translate-x-0 group-hover:rotate-0 transition-all duration-700 ease-in-out">
                            <img src={FacebookHover} alt="Facebook" className="h-7 mt-[3px] ml-[3px]" />
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer