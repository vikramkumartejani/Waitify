import React, { useEffect } from "react";
import Logo from "../assets/logo.svg";
import Twitter from "../assets/x.svg";
import LinkedIn from "../assets/linkedIn.svg";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import LinkedInHover from "../assets/hover-linkedin.svg";
import InstagramHover from "../assets/hover-instagram.svg";
import FacebookHover from "../assets/hover-facebook.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="py-[100px] md:py-[140px] px-5 space-y-6 md:space-y-7"
    >
      {/* Logo  */}
      <div className="p-[30px] flex items-center justify-center relative w-[90px] md:w-[100px] h-[90px] md:h-[100px] mx-auto">
        <motion.div
          className="overflow-visible absolute rounded-full opacity-100 transform bg-custom-white dark:bg-hero-logo-dark inset-0 z-10 blur-sm shadow-hero-logo dark:shadow-none"
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        ></motion.div>
        <div className="h-10 w-10 relative z-30">
          <img src={Logo} alt="Logo" loading="lazy" className="md:mt-0 mt-1.5" />
        </div>
      </div>

      {/* Headings  */}
      <div className="space-y-[10px] max-w-[360px] md:max-w-full mx-auto">
        <h1 className="font-semibold text-[32px] md:text-[56px] leading-[1.29em] mt-1 text-center text-[#1c1c1c] dark:text-white">
          Welcome to <span className="text-[#007dfc]">Nexora</span> <br />
          The Next Era of Collaboration
        </h1>

        <p className="max-w-[560px] w-full mx-auto text-[#4d4d4d] dark:text-white/90 text-sm md:text-lg text-center">
          Say goodbye to chaos and hello to efficiency. Nexora is your ultimate
          productivity partner, built to help teams work smarter, not harder.
        </p>
      </div>

      {/* Form  */}
      <div className="shadow-hero-box-shadow dark:shadow-hero-box-shadow-dark bg-[#ecedf1] dark:bg-black/10 overflow-hidden relative border-2 border-[#007DFC0D] py-6 md:py-[50px] px-6 md:px-[100px] max-w-[330px] md:max-w-[800px] w-full mx-auto flex flex-col items-center gap-[18px] md:gap-7 rounded-[45px] md:rounded-[50px]">
        <div>
          <h2 className="text-[#1c1c1c] dark:text-white text-2xl md:text-[40px] font-semibold leading-[1.4em] text-center mb-[10px]">
            Join our waitlist
          </h2>

          <p className="text-[#4d4d4d] dark:text-white/90 text-sm md:text-lg text-center">
            Be the first to experience Nexora. Join the waitlist today for early
            access and updates.
          </p>
        </div>

        <form className="space-y-5 max-w-[400px] w-full mx-auto">
          <div className="rounded-full h-full shadow-input-shadow dark:shadow-input-shadow-dark flex items-start p-[2px] relative w-full">
            <div className="shadow-inside-input-shadow dark:shadow-inside-input-shadow-dark rounded-full w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none p-[20px] text-sm md:text-lg text-[#1c1c1c] dark:text-white bg-transparent border-none overflow-hidden h-full rounded-[20px]"
              />
            </div>
          </div>

          <div className="shadow-hero-btn dark:shadow-hero-btn-dark rounded-[100px] bg-custom-white dark:bg-gray-800 opacity-100 w-fit mx-auto">
            <button className="text-center py-3 px-6 text-[#4d4d4d] dark:text-white text-sm md:text-lg w-fit mx-auto hover:text-[#007dfc] transition-all duration-300">
              Join
            </button>
          </div>
        </form>
      </div>

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
    </section>
  );
};

export default Hero;
