import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

const faqData = [
    {
        question: "When will I gain access to Nexora?",
        answer: "We're planning to launch early access in January 2025. Join the waitlist, and you'll be one of the first to try it out!"
    },
    {
        question: "Is Nexora free to use?",
        answer: "Contact us to learn more about our pricing plans and options."
    },
    {
        question: "What makes Nexora different from other tools?",
        answer: "Nexora offers unique features and capabilities that set it apart from traditional solutions."
    },
    {
        question: "How do I know if Nexora is for me?",
        answer: "Nexora is designed for teams and individuals looking to enhance their workflow and productivity."
    },
    {
        question: "Will Nexora integrate with the tools I already use?",
        answer: "Yes, Nexora is built to integrate seamlessly with popular tools and platforms."
    },
    {
        question: "Can I invite my team to join Nexora?",
        answer: "Absolutely! Nexora is designed for team collaboration."
    }
];

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button
                className="faq-question flex items-center justify-between cursor-pointer gap-[10px] w-full text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-semibold flex-1 transition-colors duration-300 text-[#1c1c1c] hover:text-[#007dfc]">
                    {question}
                </p>

                {isOpen ? (
                    <svg
                        className="faq-icon open"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 8.5L12 15.5L5 8.5"
                            stroke="#007dfc"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                ) : (
                    <svg
                        className="faq-icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 5V19M5 12H19"
                            stroke="#1c1c1c"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </button>
            <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                <p className='text-[#4d4d4d] text-lg'>{answer}</p>
            </div>
        </div>
    );
};

const Faqs = () => {
    const FaqsTitle = "FAQ";
    return (
        <section id='faq' className='py-[70px] md:py-[100px] px-5'>
            <div className="flex flex-col justify-center items-center gap-3 mb-10">
                <SectionTitle text={FaqsTitle} />

                <h1 className="font-semibold text-2xl md:text-[40px] mt-3 text-center text-[#1c1c1c] dark:text-white">
                    Got Questions? <span className="text-[#007dfc]">We've Got Answers.</span>
                </h1>

                <p className="text-sm md:text-lg text-[#4d4d4d] text-center dark:text-white/90">
                    Quick, clear answers to help you get started with Nexora.
                </p>
            </div>

            <div className='space-y-[5px] max-w-[800px] mx-auto w-full text-black box-outer-shadow p-[5px]'>
                {faqData.map((faq, index) => (
                    <FaqItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                    />
                ))}
            </div>
        </section>
    );
};

export default Faqs;