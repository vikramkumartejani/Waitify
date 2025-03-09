import React from "react";

const SectionTitle = ({ text }) => {
    return (
        <>
            <div className="overflow-visible p-[5px] relative">
                <div className="bg-custom-white dark:bg-hero-logo-dark blur-sm rounded-[50px] inset-0 overflow-hidden absolute z-0 flex-none transform-none shadow-section-title dark:shadow-section-title-dark"></div>
                <div className=" rounded-[50px] bg-custom-white dark:bg-gray-800 transform-none overflow-hidden relative py-[12px] px-[24px] shadow-section-title-inside dark:shadow-section-title-inside-dark">
                    <p className="text-[#007dfc] dark:text-white text-base z-50">{text}</p>
                </div>
            </div>
        </>
    );
};

export default SectionTitle;
