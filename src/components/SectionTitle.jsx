import React from 'react';

const SectionTitle = ({ text }) => {
    return (
        <>
            {/* Light mode version - visible only in light mode */}
            <div className="framer-lpt block dark:hidden">
                <div className="framer-odhswi"></div>
                <div className="framer-1jnfpv7">
                    <p className="text-[#007dfc] text-base z-50">{text}</p>
                </div>
            </div>

            {/* Dark mode version - visible only in dark mode */}
            <div className="framer-lpt-dark dark:block hidden">
                <div className="framer-odhswi-dark"></div>
                <div className="framer-1jnfpv7-dark">
                    <p className="text-white text-base z-50">{text}</p>
                </div>
            </div>
        </>
    );
};

export default SectionTitle;