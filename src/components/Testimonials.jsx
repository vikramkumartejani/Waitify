import React from 'react'
import UserOne from "../assets/user-1.avif"
import Twitter from "../assets/x.svg"
import Instagram from "../assets/instagram.svg"
import SectionTitle from './SectionTitle'

const Testimonials = () => {
    const TestimonialsTitle = "Testimonials";
    return (
        <section id='testimonials' className="py-[70px] md:py-[100px] px-5">
            <div className="flex flex-col justify-center items-center gap-3 mb-10">
                <SectionTitle text={TestimonialsTitle}/>

                <h1 className="font-semibold text-2xl md:text-[40px] mt-3 text-center text-[#1c1c1c] dark:text-white">
                    What <span className="text-[#007dfc]">Our Early Users</span> Are Saying
                </h1>

                <p className="text-sm md:text-lg text-[#4d4d4d] dark:text-white/90 text-center">
                    Don’t just take our word for it. Here’s what users think about Nexora.
                </p>
            </div>

            <div className='max-w-[390px] md:max-w-[1100px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='testimoials-box'>
                    <div className='testimoials-box-header flex items-center gap-4 p-[15px] bg-[#ecedf1]'>
                        <div className='testimoials-box-img p-[3px]'>
                            <img src={UserOne} alt="UserOne" className='w-[50px] h-[50px] object-cover rounded-[7px]' />
                        </div>

                        <div className='flex-1'>
                            <h3 className='text-[#1c1c1c] text-base font-semibold'>David L.</h3>
                            <p className='text-[#4d4d4d] text-sm'>Operations Lead</p>
                        </div>

                        <div className='testimoials-box-socialicons p-[3px]'>
                            <button className='p-[10px]'>
                                <img src={Twitter} alt="Twitter" className='h-[30px]' />
                            </button>
                        </div>
                    </div>

                    <div className='p-[25px] text-[#4d4d4d] text-sm md:text-lg text-center'>
                        "I’ve tried countless tools, but Nexora stands out. The integrations are seamless. The workflow customization saves me hours every week."
                    </div>
                </div>

                <div className='testimoials-box'>
                    <div className='testimoials-box-header flex items-center gap-4 p-[15px] bg-[#ecedf1]'>
                        <div className='testimoials-box-img p-[3px]'>
                            <img src={UserOne} alt="UserOne" className='w-[50px] h-[50px] object-cover rounded-[7px]' />
                        </div>

                        <div className='flex-1'>
                            <h3 className='text-[#1c1c1c] text-base font-semibold'>Samantha R.</h3>
                            <p className='text-[#4d4d4d] text-sm'>Product Manager</p>
                        </div>

                        <div className='testimoials-box-socialicons p-[3px]'>
                            <button className='p-[10px]'>
                                <img src={Instagram} alt="Instagram" className='h-[30px]' />
                            </button>
                        </div>
                    </div>

                    <div className='p-[25px] text-[#4d4d4d] text-sm md:text-lg text-center'>
                    "Nexora has completely transformed how our team works together. It's simple, and keeps everyone on the same page. Can't wait for the launch!"
                    </div>
                </div>

                <div className='testimoials-box'>
                    <div className='testimoials-box-header flex items-center gap-4 p-[15px] bg-[#ecedf1]'>
                        <div className='testimoials-box-img p-[3px]'>
                            <img src={UserOne} alt="UserOne" className='w-[50px] h-[50px] object-cover rounded-[7px]' />
                        </div>

                        <div className='flex-1'>
                            <h3 className='text-[#1c1c1c] text-base font-semibold'>Carlos M.</h3>
                            <p className='text-[#4d4d4d] text-sm'>IT Specialist</p>
                        </div>

                        <div className='testimoials-box-socialicons p-[3px]'>
                            <button className='p-[10px]'>
                                <img src={Twitter} alt="Twitter" className='h-[30px]' />
                            </button>
                        </div>
                    </div>

                    <div className='p-[25px] text-[#4d4d4d] text-sm md:text-lg text-center'>
                    "The early access was incredible. Nexora is secure, reliable, and easy to set up. It’s exactly what we needed, and we’re excited for the future updates."
                    </div>
                </div>

                <div className='testimoials-box'>
                    <div className='testimoials-box-header flex items-center gap-4 p-[15px] bg-[#ecedf1]'>
                        <div className='testimoials-box-img p-[3px]'>
                            <img src={UserOne} alt="UserOne" className='w-[50px] h-[50px] object-cover rounded-[7px]' />
                        </div>

                        <div className='flex-1'>
                            <h3 className='text-[#1c1c1c] text-base font-semibold'>Emily T.</h3>
                            <p className='text-[#4d4d4d] text-sm'>Founder & CEO</p>
                        </div>

                        <div className='testimoials-box-socialicons p-[3px]'>
                            <button className='p-[10px]'>
                                <img src={Instagram} alt="Instagram" className='h-[30px]' />
                            </button>
                        </div>
                    </div>

                    <div className='p-[25px] text-[#4d4d4d] text-sm md:text-lg text-center'>
                    "From productivity to scaling, Nexora has it all. It’s rare to find something so flexible and reliable that adapts as your business continues to grow steadily."
                    </div>
                </div>

                <div className='testimoials-box'>
                    <div className='testimoials-box-header flex items-center gap-4 p-[15px] bg-[#ecedf1]'>
                        <div className='testimoials-box-img p-[3px]'>
                            <img src={UserOne} alt="UserOne" className='w-[50px] h-[50px] object-cover rounded-[7px]' />
                        </div>

                        <div className='flex-1'>
                            <h3 className='text-[#1c1c1c] text-base font-semibold'>James K.</h3>
                            <p className='text-[#4d4d4d] text-sm'>Marketing Director</p>
                        </div>

                        <div className='testimoials-box-socialicons p-[3px]'>
                            <button className='p-[10px]'>
                                <img src={Twitter} alt="Twitter" className='h-[30px]' />
                            </button>
                        </div>
                    </div>

                    <div className='p-[25px] text-[#4d4d4d] text-sm md:text-lg text-center'>
                    "Nexora makes managing projects effortless. It is secure, reliable, and easy to set up. It’s exactly what we needed, and we’re excited for the launch."
                    </div>
                </div>

                <div className='testimoials-box'>
                    <div className='testimoials-box-header flex items-center gap-4 p-[15px] bg-[#ecedf1]'>
                        <div className='testimoials-box-img p-[3px]'>
                            <img src={UserOne} alt="UserOne" className='w-[50px] h-[50px] object-cover rounded-[7px]' />
                        </div>

                        <div className='flex-1'>
                            <h3 className='text-[#1c1c1c] text-base font-semibold'>Jessica M.</h3>
                            <p className='text-[#4d4d4d] text-sm'>Team Lead</p>
                        </div>

                        <div className='testimoials-box-socialicons p-[3px]'>
                            <button className='p-[10px]'>
                                <img src={Instagram} alt="Instagram" className='h-[30px]' />
                            </button>
                        </div>
                    </div>

                    <div className='p-[25px] text-[#4d4d4d] text-sm md:text-lg text-center'>
                    "Finally, a tool that feels like it was made for us! Nexora’s features are a huge help for keeping our remote team in sync every day. Just amazing."
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Testimonials