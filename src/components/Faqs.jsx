"use client"

import { useState, useRef, useEffect } from "react"
import SectionTitle from "./SectionTitle"

const faqData = [
    {
        question: "When will I gain access to Nexora?",
        answer:
            "We're planning to launch early access in January 2025. Join the waitlist, and you'll be one of the first to try it out!",
    },
    {
        question: "Is Nexora free to use?",
        answer:
            "Yep, we'll offer a free trial for early users. After that, we'll have a few flexible plans so you can pick what works best for you.",
    },
    {
        question: "What makes Nexora different from other tools?",
        answer:
            "Nexora is all about making your work life easier. From customizable workflows to seamless integrations, it's built to help you get more done with less hassle.",
    },
    {
        question: "How do I know if Nexora is for me?",
        answer:
            "If you want to boost your team's productivity and simplify your workflow, Nexora's got your back. Plus, you'll get to try it free, so no pressure!",
    },
    {
        question: "Will Nexora integrate with the tools I already use?",
        answer:
            "Totally! Nexora plays nice with popular tools like Slack, Trello, and Google Workspace, so you won't have to change your setup.",
    },
    {
        question: "Can I invite my team to join Nexora?",
        answer: "Absolutely. Nexora is built for teams. Once you're in, you can easily bring your whole crew on board.",
    },
]

const FaqItem = ({ question, answer, initialOpen = false }) => {
    const [isOpen, setIsOpen] = useState(initialOpen)
    const contentRef = useRef(null)
    const [contentHeight, setContentHeight] = useState(initialOpen ? "auto" : 0)

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(isOpen ? contentRef.current.scrollHeight : 0)
        }
    }, [isOpen])

    // Set initial height on mount
    useEffect(() => {
        if (initialOpen && contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight)
        }
    }, [initialOpen])

    return (
        <div className={`p-5 md:p-6 opacity-100 rounded-[25px] transition-all duration-300 ${isOpen ? "shadow-faq-open dark:shadow-faq-open-dark" : ""}`}>
            <button
                className="flex items-center justify-between cursor-pointer gap-[10px] w-full text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-semibold flex-1 transition-colors duration-300 text-[#1c1c1c] hover:text-[#007dfc] dark:hover:text-[#007dfc] dark:text-white">
                    {question}
                </h3>

                {isOpen ? (
                    <svg
                        className="rotate-180 transition-transform duration-300"
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
                        className="transition-transform duration-300 dark:text-white"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 5V19M5 12H19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </button>
            <div
                ref={contentRef}
                style={{ height: `${contentHeight}px` }}
                className="overflow-hidden transition-all duration-300 ease-in-out"
            >
                <div className={`transition-opacity duration-300 ${isOpen ? "opacity-100 pt-4" : "opacity-0"}`}>
                    <p className="text-[#4d4d4d] dark:text-white/80 text-lg pr-4 md:pr-6">{answer}</p>
                </div>
            </div>
        </div>
    )
}

const Faqs = () => {
    const FaqsTitle = "FAQ"
    return (
        <section id="faq" className="py-[70px] md:py-[100px] px-5">
            <div className="flex flex-col justify-center items-center gap-3 mb-10">
                <SectionTitle text={FaqsTitle} />

                <h1 className="font-semibold text-2xl md:text-[40px] mt-3 text-center text-[#1c1c1c] dark:text-white">
                    Got Questions? <span className="text-[#007dfc]">We've Got Answers.</span>
                </h1>

                <p className="text-sm md:text-lg text-[#4d4d4d] text-center dark:text-white/90">
                    Quick, clear answers to help you get started with Nexora.
                </p>
            </div>

            <div className="space-y-[5px] max-w-[800px] mx-auto w-full text-black bg-custom-white dark:bg-gray-800 border-white rounded-[30px] opacity-100 shadow-faq-box dark:shadow-faq-box-dark p-[5px]">
                {faqData.map((faq, index) => (
                    <FaqItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        initialOpen={index === 0}
                    />
                ))}
            </div>
        </section>
    )
}

export default Faqs

