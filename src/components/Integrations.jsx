import React from "react";
import SectionTitle from "./SectionTitle";
import WavyAnimation from "./WavyAnimation";

const Integrations = () => {
  const integrationTitle = "Integrations";

  return (
    <section id="integrations" className="py-[70px] md:py-[100px] px-5">
      <div className="flex flex-col justify-center items-center gap-3 mb-20">
        <SectionTitle text={integrationTitle} />

        <h1 className="font-semibold text-2xl md:text-[40px] mt-3 text-center text-[#1c1c1c] dark:text-white">
          <span className="text-[#007dfc]">Everything you need</span>, Talking
          Together
        </h1>

        <p className="text-sm md:text-lg text-[#4d4d4d] text-center dark:text-white/90">
          Your apps, your workflows, perfectly in sync. Just the way it should
          be.
        </p>
      </div>
      <WavyAnimation />
    </section>
  );
};

export default Integrations;
