import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import CallIcon from "../assets/call-icon.svg";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = ["Benefits", "Integrations", "Testimonials", "FAQ"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 650);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0.4,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    navLinks.forEach((link) => {
      const element = document.getElementById(link.toLowerCase());
      if (element) {
        element.classList.add("section-observed");
        observer.observe(element);
      }
    });

    return () => {
      navLinks.forEach((link) => {
        const element = document.getElementById(link.toLowerCase());
        if (element) {
          element.classList.remove("section-observed");
          observer.unobserve(element);
        }
      });
    };
  }, [navLinks]);

  return (
    <div className="">
      <nav className="fixed top-5 left-0 right-0 z-50">
        <div
          className={`
                    mx-auto 
                    ${
                      isDarkTheme
                        ? "header-shadow-dark bg-[#1c1c1c]"
                        : "header-shadow bg-white"
                    } 
                    p-1 z-50 relative
                    transition-all duration-700 ease-in-out
                    ${
                      isScrolled
                        ? "w-[700px] scale-95 rounded-full"
                        : "w-full max-w-6xl scale-100"
                    }
                `}
        >
          <div className="header-inner-shadow py-[10px] pl-[15px] pr-[10px] flex items-center justify-between gap-4 w-full">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-[5px]">
              <img src={Logo} alt="Logo" loading="lazy" className="h-10" />
              <span
                className={`
                                text-2xl font-semibold 
                                ${isDarkTheme ? "text-white" : "text-[#1c1c1c]"}
                                transition-all duration-300 ease-in-out
                                ${
                                  isScrolled
                                    ? "opacity-0 scale-90 w-0 overflow-hidden"
                                    : "opacity-100 scale-100 w-auto"
                                }
                            `}
              >
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
                                        ${
                                          activeSection === link.toLowerCase()
                                            ? "bg-[#007DFC] text-white rounded-[50px]"
                                            : isDarkTheme
                                            ? "text-white"
                                            : "text-[#1c1c1c]"
                                        }
                                    `}
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Book a Call btn */}
            <div className="flex items-center gap-4">
              <button className="transition-all duration-300 ease-in-out">
                {isScrolled ? (
                  <div
                    className={`header-btn p-[10px] rounded-full flex items-center justify-center transition-opacity duration-300 ease-in-out`}
                  >
                    <img
                      src={CallIcon}
                      alt="CallIcon"
                      loading="lazy"
                      className="h-[30px]"
                    />
                  </div>
                ) : (
                  <div
                    className={`header-btn px-6 py-3 ${
                      isDarkTheme ? "text-white" : "text-[#1c1c1c]"
                    } font-normal leading-[1.2em] text-base`}
                  >
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
