import React from "react";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  const ContactTitle = "Contact";
  return (
    <section id="contact" className="py-[70px] md:py-[100px] px-5">
      <div className="flex flex-col justify-center items-center gap-3 mb-10">
        <SectionTitle text={ContactTitle} />

        <h1 className="font-semibold text-2xl md:text-[40px] mt-1 text-center text-[#1c1c1c] dark:text-white">
          Let's <span className="text-[#007dfc]">Stay Connected</span>
        </h1>

        <p className="text-sm md:text-lg text-[#4d4d4d] text-center dark:text-white/90">
          Have questions or feedback? Reach out, and we’ll get back to you in no
          time.
        </p>
      </div>

      <form className="max-w-[390px] md:max-w-[600px] mx-auto w-full space-y-5">
        <div className="flex items-center gap-5 flex-col md:flex-row">
          <div className="rounded-[25px] h-full shadow-input-shadow dark:shadow-input-shadow-dark flex items-start p-[2px] relative w-full">
            <div className="shadow-inside-input-shadow dark:shadow-inside-input-shadow-dark rounded-[25px] w-full">
              <input
                type="text"
                placeholder="Your name"
                className="w-full outline-none p-[20px] text-sm md:text-lg text-[#1c1c1c] dark:text-white bg-transparent border-none overflow-hidden h-full rounded-[20px]"
              />
            </div>
          </div>

          <div className="rounded-[25px] h-full shadow-input-shadow dark:shadow-input-shadow-dark flex items-start p-[2px] relative w-full">
            <div className="shadow-inside-input-shadow dark:shadow-inside-input-shadow-dark rounded-[25px] w-full">
              <input
                type="text"
                placeholder="Your email"
                className="w-full outline-none p-[20px] text-sm md:text-lg text-[#1c1c1c] bg-transparent border-none overflow-hidden h-full rounded-[20px]"
              />
            </div>
          </div>
        </div>

        <div className="rounded-[25px] h-[150px] shadow-input-shadow dark:shadow-input-shadow-dark flex items-start p-[2px] relative w-full">
          <div className="shadow-inside-input-shadow dark:shadow-inside-input-shadow-dark rounded-[25px] w-full h-full">
            <textarea
              type="text"
              placeholder="Your message..."
              className="resize-none w-full text-[#1c1c1c] text-sm md:text-lg outline-none p-[20px] bg-transparent border-none overflow-hidden h-full rounded-[20px]"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#007dfc] p-[15px] text-sm md:text-lg rounded-[50px] text-white hover:opacity-90 transo duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
