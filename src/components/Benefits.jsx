import React from 'react'
import IconOne from "../assets/icon1.svg"
import IconTwo from "../assets/icon2.svg"
import IconThree from "../assets/icon3.svg"
import IconFour from "../assets/icon4.svg"
import IconFive from "../assets/icon5.svg"
import IconSix from "../assets/icon6.svg"
import SectionTitle from './SectionTitle'

const benefitsData = [
    {
        id: 1,
        icon: IconOne,
        title: "Streamlined Collaboration",
        description: "Connect effortlessly with real-time syncing and shared workspaces."
    },
    {
        id: 2,
        icon: IconTwo,
        title: "Enhanced Productivity",
        description: "Eliminate repetitive tasks with smart automation solutions."
    },
    {
        id: 3,
        icon: IconThree,
        title: "Scalable Solutions",
        description: "Built to grow with your team, no matter your size or industry."
    },
    {
        id: 4,
        icon: IconFour,
        title: "Secure and Reliable",
        description: "Enterprise-grade security ensures your data stays safe and accessible."
    },
    {
        id: 5,
        icon: IconFive,
        title: "Customizable Workflows",
        description: "Adapt Nexora to fit your unique business processes effortlessly."
    },
    {
        id: 6,
        icon: IconSix,
        title: "Seamless Integrations",
        description: "Works with your favorite tools for a cohesive workflow experience."
    }
];

const Benefits = () => {
    const BenefitsTitle = "Benefits";
    return (
        <section id='benefits' className="py-[70px] md:py-[100px] px-5">
            <div className="flex flex-col justify-center items-center gap-3 mb-10">
                <SectionTitle text={BenefitsTitle} />

                <h1 className="font-semibold text-2xl md:text-[40px] mt-3 text-center text-[#1c1c1c] dark:text-white">
                    Why <span className="text-[#007dfc]">Choose Nexora</span>?
                </h1>

                <p className="text-sm md:text-lg text-[#4d4d4d] text-center dark:text-white/90">
                    Everything you need to collaborate, create, and scale, all in one place.
                </p>
            </div>

            <div className='max-w-[390px] md:max-w-[1100px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]'>
                {benefitsData.map((benefit) => (
                    <div key={benefit.id} className='shadow-benefit border-2 border-[#007DFC0D] dark:border-white/10 bg-custom-white dark:bg-black/10 w-full opacity-100 rounded-[40px] p-[30px] space-y-6'>
                        {/* Icon  */}
                        <div className='p-[10px] relative w-[110px] h-[110px] mx-auto'>
                            <div className='overflow-hidden absolute inset-0 z-0 flex-none rounded-[50%] opacity-100 blur-xs dark:blur-none bg-custom-white dark:bg-black/10 shadow-benefit-image-box dark:shadow-benefit-image-box-dark'></div>
                            <div className='bg-custom-white opacity-100 rounded-[50%] shadow-benefit-image dark:shadow-benefit-image-dark relative w-full h-full flex justify-center items-center'>
                                <img
                                    src={benefit.icon}
                                    alt={benefit.title}
                                    className='h-[50px]'
                                    loading='lazy'
                                />
                            </div>
                        </div>

                        {/* Content  */}
                        <div className='space-y-[10px] text-center'>
                            <h3 className='text-[#1c1c1c] dark:text-white text-lg font-semibold'>
                                {benefit.title}
                            </h3>

                            <p className='text-[#4d4d4d] dark:text-white/90 text-lg'>
                                {benefit.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Benefits