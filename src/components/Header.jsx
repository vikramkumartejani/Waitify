import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import CallIcon from "../assets/call-icon.svg";
import ThemeToggle from "./ThemeToggle";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = ["Benefits", "Integrations", "Testimonials", "FAQ"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 650);

      const isOnAnySection = navLinks.some((link) => {
        const element = document.getElementById(link.toLowerCase());
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        const isVisible =
          rect.top <= window.innerHeight * 0.4 &&
          rect.bottom >= window.innerHeight * 0.3;
        return isVisible;
      });

      if (!isOnAnySection) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

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
        } else if (activeSection === entry.target.id) {
          const anyVisible =
            document.querySelectorAll(".section-observed").length > 0;
          if (!anyVisible) {
            setActiveSection("");
          }
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
  }, [navLinks, activeSection]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="fixed -top-1 lg:top-5 left-0 right-0 z-50 lg:px-4">
        <div
          className={`mx-auto bg-custom-white ${
            isMobileMenuOpen ? "rounded-b-[25px]" : "rounded-0 lg:rounded-[50px]"
          }  shadow-header-shadow p-1 z-50 relative min-w-full lg:min-w-0 transition-all duration-700 ease-in-out ${
            isScrolled
              ? "w-full max-w-full lg:max-w-[700px] lg:scale-95 lg:rounded-full"
              : "w-full max-w-full lg:max-w-6xl scale-100"
          }`}
        >
          <div
            className={`header-inner-shadow ${
              isMobileMenuOpen
                ? "rounded-b-[25px]"
                : "rounded-0 lg:rounded-[50px]"
            }`}
          >
            <div className=" lg:rounded-[50px] py-[10px] pl-[15px] pr-[10px] flex items-center justify-between gap-4 w-full">
              {/* Logo  */}
              <a href="#hero" className="flex items-center gap-[5px]">
                <img src={Logo} alt="Logo" loading="lazy" className="h-10" />
                <span
                  className={`text-3xl lg:text-2xl font-semibold ${
                    isDarkTheme ? "text-white" : "text-[#1c1c1c]"
                  } ${
                    isScrolled
                      ? "opacity-0 scale-90 w-0 lg:overflow-hidden transition-opacity duration-500 ease-in-out"
                      : "opacity-100 scale-100 w-auto transition-opacity duration-500 ease-in-out"
                  }`}
                >
                  Waitify
                </span>
              </a>

              {/* NavLinks */}
              <div className="hidden lg:flex gap-[5px]">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className={`nav-link px-6 py-3 font-normal leading-[1.2em] text-base transition-all duration-300 ease-in-out ${
                      activeSection === link.toLowerCase()
                        ? "bg-[#007DFC] text-white rounded-[50px]"
                        : isDarkTheme
                        ? "text-white"
                        : "text-[#1c1c1c]"
                    }`}
                  >
                    {link}
                  </a>
                ))}
              </div>

              <div className="lg:hidden block">
                <button
                  className="flex items-center justify-center"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <RxCross2 className="text-3xl text-[#1c1c1c] dark:text-white" />
                  ) : (
                    <IoMenuOutline className="text-3xl text-[#1c1c1c] dark:text-white" />
                  )}
                </button>
              </div>

              {/* Book a Call btn  */}
              <div className="hidden lg:flex items-center gap-4">
                <button>
                  {isScrolled ? (
                    <div
                      className={`header-btn p-[10px] rounded-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                        isScrolled ? "opacity-100" : "opacity-0"
                      }`}
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
                      } font-normal leading-[1.2em] text-base transition-opacity duration-500 ease-in-out ${
                        isScrolled ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      Book a call
                    </div>
                  )}
                </button>
                <ThemeToggle />
              </div>
            </div>
            {/* Mobile Menu */}
            <div className="lg:hidden block px-4">
              <div
                className={` w-full transition-all duration-500 ease-in-out ${
                  isMobileMenuOpen
                    ? "max-h-[400px] opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <div className="flex flex-col gap-[25px] items-center">
                  {navLinks.map((link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      className="px-6 font-normal leading-[1.2em] text-[#4D4D4D] text-base transition-all duration-300 ease-in-out"
                    >
                      {link}
                    </a>
                  ))}
                </div>
                {/* Book a Call btn  */}
                <button className="mb-2.5 mt-[25px] header-btn w-full px-6 py-3 font-normal leading-[1.2em] text-base transition-opacity duration-500 ease-in-out">
                  Book a call
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
