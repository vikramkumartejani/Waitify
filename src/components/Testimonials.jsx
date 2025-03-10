import React from "react";
import UserOne from "../assets/user-1.avif";
import Twitter from "../assets/x.svg";
import Instagram from "../assets/instagram.svg";
import SectionTitle from "./SectionTitle";
import InstagramHover from "../assets/hover-instagram.svg";
import { motion } from "framer-motion";

const Testimonials = () => {
    const TestimonialsTitle = "Testimonials";
    return (
        <section id="testimonials" className="py-[70px] md:py-[100px] px-5">
            <div className="flex flex-col justify-center items-center gap-3 mb-10">
                <SectionTitle text={TestimonialsTitle} />

                <h1 className="font-semibold text-2xl md:text-[40px] mt-3 text-center text-[#1c1c1c] dark:text-white">
                    What <span className="text-[#007dfc]">Our Early Users</span> Are
                    Saying
                </h1>

                <p className="text-sm md:text-lg text-[#4d4d4d] dark:text-white/90 text-center">
                    Don’t just take our word for it. Here’s what users think about Nexora.
                </p>
            </div>

            <div className="max-w-[390px] md:max-w-[1100px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-custom-white dark:bg-black/10 w-full opacity-100 rounded-[24px] shadow-hero-btn dark:shadow-hero-btn-dark">
                    <div className=" bg-custom-white dark:bg-black/20 w-full opacity-100 rounded-[24px] shadow-header-testimonials dark:shadow-none dark:border-b border-white/90 flex items-center gap-4 p-[15px]">
                        <div className="bg-custom-white rounded-[10px] opacity-100 shadow-section-title-inside dark:shadow-section-title-dark p-[3px]">
                            <img
                                src={UserOne}
                                alt="UserOne"
                                className="w-[50px] h-[50px] object-cover rounded-[7px]"
                            />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-[#1c1c1c] dark:text-white text-base font-semibold">
                                David L.
                            </h3>
                            <p className="text-[#4d4d4d] dark:text-white/80 text-sm">Operations Lead</p>
                        </div>

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
                    </div>

                    <p className="p-[25px] text-[#4d4d4d] dark:text-white text-sm md:text-lg text-center">
                        "I’ve tried countless tools, but Nexora stands out. The integrations are seamless. The workflow customization saves me hours every week."
                    </p>
                </div>

                <div className="bg-custom-white dark:bg-black/10 w-full opacity-100 rounded-[24px] shadow-hero-btn dark:shadow-hero-btn-dark">
                    <p className="px-[30px] py-[25px] text-[#4d4d4d] dark:text-white text-sm md:text-lg text-center">
                        "Nexora has completely transformed how our team works together. It's simple, and keeps everyone on the same page. Can't wait for the launch!"
                    </p>
                    <div className=" bg-custom-white dark:bg-black/20 w-full opacity-100 rounded-[24px] shadow-header-testimonials dark:shadow-none dark:border-t border-white/90 flex items-center gap-4 p-[15px]">
                        <div className="bg-custom-white rounded-[10px] opacity-100 shadow-section-title-inside dark:shadow-section-title-dark p-[3px]">
                            <img
                                src={UserOne}
                                alt="UserOne"
                                className="w-[50px] h-[50px] object-cover rounded-[7px]"
                            />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-[#1c1c1c] dark:text-white text-base font-semibold">
                                David L.
                            </h3>
                            <p className="text-[#4d4d4d] dark:text-white/80 text-sm">Operations Lead</p>
                        </div>

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
                    </div>
                </div>

                <div className="bg-custom-white dark:bg-black/10 w-full opacity-100 rounded-[24px] shadow-hero-btn dark:shadow-hero-btn-dark">
                    <div className=" bg-custom-white dark:bg-black/20 w-full opacity-100 rounded-[24px] shadow-header-testimonials dark:shadow-none dark:border-b border-white/90 flex items-center gap-4 p-[15px]">
                        <div className="bg-custom-white rounded-[10px] opacity-100 shadow-section-title-inside dark:shadow-section-title-dark p-[3px]">
                            <img
                                src={UserOne}
                                alt="UserOne"
                                className="w-[50px] h-[50px] object-cover rounded-[7px]"
                            />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-[#1c1c1c] dark:text-white text-base font-semibold">
                                David L.
                            </h3>
                            <p className="text-[#4d4d4d] dark:text-white/80 text-sm">Operations Lead</p>
                        </div>

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
                    </div>

                    <p className="p-[25px] text-[#4d4d4d] dark:text-white text-sm md:text-lg text-center">
                        "The early access was incredible. Nexora is secure, reliable, and easy to set up. It’s exactly what we needed, and we’re excited for the future updates."
                    </p>
                </div>

                <div className="bg-custom-white dark:bg-black/10 w-full opacity-100 rounded-[24px] shadow-hero-btn dark:shadow-hero-btn-dark">
                    <p className="px-[30px] py-[25px] text-[#4d4d4d] dark:text-white text-sm md:text-lg text-center">
                        "From productivity to scaling, Nexora has it all. It’s rare to find something so flexible and reliable that adapts as your business continues to grow steadily."
                    </p>
                    <div className=" bg-custom-white dark:bg-black/20 w-full opacity-100 rounded-[24px] shadow-header-testimonials dark:shadow-none dark:border-t border-white/90 flex items-center gap-4 p-[15px]">
                        <div className="bg-custom-white rounded-[10px] opacity-100 shadow-section-title-inside dark:shadow-section-title-dark p-[3px]">
                            <img
                                src={UserOne}
                                alt="UserOne"
                                className="w-[50px] h-[50px] object-cover rounded-[7px]"
                            />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-[#1c1c1c] dark:text-white text-base font-semibold">
                                David L.
                            </h3>
                            <p className="text-[#4d4d4d] dark:text-white/80 text-sm">Operations Lead</p>
                        </div>

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
                    </div>
                </div>

                <div className="bg-custom-white dark:bg-black/10 w-full opacity-100 rounded-[24px] shadow-hero-btn dark:shadow-hero-btn-dark">
                    <div className=" bg-custom-white dark:bg-black/20 w-full opacity-100 rounded-[24px] shadow-header-testimonials dark:shadow-none dark:border-b border-white/90 flex items-center gap-4 p-[15px]">
                        <div className="bg-custom-white rounded-[10px] opacity-100 shadow-section-title-inside dark:shadow-section-title-dark p-[3px]">
                            <img
                                src={UserOne}
                                alt="UserOne"
                                className="w-[50px] h-[50px] object-cover rounded-[7px]"
                            />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-[#1c1c1c] dark:text-white text-base font-semibold">
                                David L.
                            </h3>
                            <p className="text-[#4d4d4d] dark:text-white/80 text-sm">Operations Lead</p>
                        </div>

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
                    </div>

                    <p className="p-[25px] text-[#4d4d4d] dark:text-white text-sm md:text-lg text-center">
                        "Nexora makes managing projects effortless. It is secure, reliable, and easy to set up. It’s exactly what we needed, and we’re excited for the launch."
                    </p>
                </div>

                <div className="bg-custom-white dark:bg-black/10 w-full opacity-100 rounded-[24px] shadow-hero-btn dark:shadow-hero-btn-dark">
                    <p className="px-[30px] py-[25px] text-[#4d4d4d] dark:text-white text-sm md:text-lg text-center">
                        "Finally, a tool that feels like it was made for us! Nexora’s features are a huge help for keeping our remote team in sync every day. Just amazing."
                    </p>
                    <div className=" bg-custom-white dark:bg-black/20 w-full opacity-100 rounded-[24px] shadow-header-testimonials dark:shadow-none dark:border-t border-white/90 flex items-center gap-4 p-[15px]">
                        <div className="bg-custom-white rounded-[10px] opacity-100 shadow-section-title-inside dark:shadow-section-title-dark p-[3px]">
                            <img
                                src={UserOne}
                                alt="UserOne"
                                className="w-[50px] h-[50px] object-cover rounded-[7px]"
                            />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-[#1c1c1c] dark:text-white text-base font-semibold">
                                David L.
                            </h3>
                            <p className="text-[#4d4d4d] dark:text-white/80 text-sm">Operations Lead</p>
                        </div>

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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
