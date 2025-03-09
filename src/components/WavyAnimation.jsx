"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Integrations1 from '../assets/integrations1.svg'
import Integrations2 from '../assets/integrations2.svg'
import Integrations3 from '../assets/integrations3.svg'
import Integrations4 from '../assets/integrations4.svg'
import Integrations5 from '../assets/integrations5.svg'
import Integrations6 from '../assets/integrations6.svg'
import Integrations7 from '../assets/integrations7.svg'
import Integrations8 from '../assets/integrations8.svg'

export default function WavyAnimation() {
  const [centerCompressed, setCenterCompressed] = useState(false);
  const [showWaves, setShowWaves] = useState(false);
  const [isEmitting, setIsEmitting] = useState(false);
  const [waveCount, setWaveCount] = useState(0);
  const [buttonPressed, setButtonPressed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCenterCompressed(true);
      setTimeout(() => {
        startWaveEmissionCycle();
      }, 500);
    }, 1000);

    return () => {
      // Clear any pending timeouts when component unmounts
    };
  }, []);

  // Function to handle the complete wave emission cycle
  const startWaveEmissionCycle = () => {
    // First animate the button press
    setButtonPressed(true);

    // After button press animation, start the waves
    setTimeout(() => {
      setButtonPressed(false);
      setShowWaves(true);
      startWaveEmission();
    }, 300); // Button press animation duration
  };

  // Function to handle wave emission cycle
  const startWaveEmission = () => {
    // Start a cycle of waves
    setIsEmitting(true);

    // Calculate total time for all waves to complete
    // Last wave starts at 5 * 0.2 = 1.0s and takes 1.2s to complete
    // So all waves will be done by 1.0 + 1.2 = 2.2s
    // Add a small buffer to ensure all animations complete
    const totalWaveTime = 2.3;

    // After all waves complete, stop emitting
    const waveSetTimeout = setTimeout(() => {
      // Instead of immediately stopping emission, let's create a clean transition
      // by removing waves only after they've all completed
      setIsEmitting(false);

      // Wait 3 seconds with no waves, then start the next cycle
      const pauseTimeout = setTimeout(() => {
        setWaveCount((prev) => prev + 1); // Increment to trigger a new wave set

        // Animate button press before starting next wave set
        startWaveEmissionCycle();
      }, 3000); // 3 second pause with no waves

      return () => clearTimeout(pauseTimeout);
    }, totalWaveTime * 1000); // Convert to milliseconds, with buffer

    return () => clearTimeout(waveSetTimeout);
  };

  return (
    <div className="relative w-[600px] h-[600px] flex items-center justify-center mx-auto">
      {/* Main container with 3D border */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          boxSizing: "border-box",
          border: "3px solid rgba(0, 125, 252, 0.05)",
          boxShadow:
            "0 0.6px 1.8px -0.8px rgba(0, 125, 252, 0.05), 0 2.3px 6.9px -1.7px rgba(0, 125, 252, 0.05), 0 10px 30px -2.5px rgba(0, 125, 252, 0.05)",
        }}
      />

      {/* Inner circle with 2px border */}
      <div
        className="absolute w-[560px] h-[560px] rounded-full"
        style={{
          boxSizing: "border-box",
          border: "2px solid rgba(0, 125, 252, 0.05)",
          boxShadow:
            "inset 0 0.6px 1.8px -0.8px rgba(0, 125, 252, 0.05), inset 0 2.3px 6.9px -1.7px rgba(0, 125, 252, 0.05), inset 0 10px 30px -2.5px rgba(0, 125, 252, 0.05)",
        }}
      />

      {/* Wave animations */}
      <AnimatePresence mode="wait">
        {showWaves && isEmitting && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Create 6 waves with staggered starts */}
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={`wave-${waveCount}-${index}`}
                className="absolute rounded-full"
                initial={{
                  scale: 0.2,
                  opacity: 1, // Start with full opacity for stronger waves
                }}
                animate={{
                  scale: [0.2, 1],
                  opacity: [1, 0.2], // Keep waves stronger throughout animation
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2 },
                }}
                transition={{
                  duration: 1.2, // Each wave completes in 1.2 seconds
                  ease: "linear", // Linear for consistent speed
                  delay: index * 0.2, // Stagger each wave by 0.2s
                  times: [0, 1],
                }}
                style={{
                  width: "570px",
                  height: "570px",
                  filter: "blur(4px)", // Reduced blur for sharper waves
                  boxShadow: `
                    -5px -5px 10px 0px rgba(250, 251, 255, 0.9),
                    inset -5px -5px 10px 0px rgba(250, 251, 255, 0.9),
                    5px 5px 10px 0px rgba(0, 125, 252, 0.3),
                    inset 5px 5px 10px 0px rgba(0, 125, 252, 0.3)
                  `, // Increased shadow intensity
                  transformOrigin: "center center",
                  border: "1px solid rgba(0, 125, 252, 0.2)", // Stronger border
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Center icon with compression animation */}
      <motion.div
        className="absolute z-10  rounded-full p-4"
        animate={{
          scale: centerCompressed ? (buttonPressed ? 0.85 : 0.9) : 1,
          boxShadow: centerCompressed
            ? buttonPressed
              ? "inset -2px -2px 5px rgba(250, 251, 255, 0.7), inset 2px 2px 5px rgba(0, 125, 252, 0.2)"
              : "-3px -3px 6px rgba(250, 251, 255, 0.8), 3px 3px 6px rgba(0, 125, 252, 0.15)"
            : "-5px -5px 10px rgba(250, 251, 255, 0.8), 5px 5px 10px rgba(0, 125, 252, 0.15)",
        }}
        transition={{
          duration: buttonPressed ? 0.15 : 0.3,
          ease: "easeInOut",
        }}
        style={{
          width: "100px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "",
          border: "1px solid rgba(255, 255, 255, 0.7)",
        }}
      >
        <div className="flex items-center justify-center">
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              fill="#0080FF"
              stroke="none"
            />
            <path
              d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M12 7V12L16 9"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>

      {/* Surrounding icons with exact positioning */}
      <div className="absolute w-[590px] h-[590px]">
        <IconPosition top="-45px" left="260px" icon="overlap" />
        <IconPosition top="45px" right="45px" icon="stripes" />
        <IconPosition top="260px" right="-45px" icon="star" />
        <IconPosition bottom="45px" right="45px" icon="lightning" />
        <IconPosition bottom="-45px" left="260px" icon="globe" />
        <IconPosition bottom="45px" left="45px" icon="waves" />
        <IconPosition top="260px" left="-45px" icon="squares" />
        <IconPosition top="45px" left="45px" icon="stack" />
      </div>
    </div>
  );
}

// Helper component for exact icon positioning
function IconPosition({ top, right, bottom, left, icon }) {
  return (
    <div
      className="absolute"
      style={{
        top: top || "auto",
        right: right || "auto",
        bottom: bottom || "auto",
        left: left || "auto",
        zIndex: 1,
      }}
    >
      <motion.div
        className="bg-[#ecedf1] p-3 rounded-[25px]"
        style={{
          border: "2px solid rgba(0, 125, 252, 0.05)",
          boxShadow:
            "0 0.6px 1.8px -0.8px rgba(0, 125, 252, 0.05), 0 2.3px 6.9px -1.7px rgba(0, 125, 252, 0.05), 0 10px 30px -2.5px rgba(0, 125, 252, 0.05)",
          width: "80px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        whileHover={{
          y: -2,
          boxShadow:
            "0 4px 12px rgba(0, 125, 252, 0.1), 0 2px 4px rgba(0, 125, 252, 0.05)",
          transition: { duration: 0.2 },
        }}
      >
        <div className="w-10 h-10 flex items-center justify-center">
          {getIcon(icon)}
        </div>
      </motion.div>
    </div>
  );
}

// Icon SVGs
function getIcon(type) {
  switch (type) {
    case "overlap":
      return (
       <img src={Integrations1} alt="integrations" />
      );
    case "stripes":
      return (
        <img src={Integrations2} alt="integrations" />
      );
    case "star":
      return (
        <img src={Integrations3} alt="integrations" />
      );
    case "lightning":
      return (
        <img src={Integrations4} alt="integrations" />
      );
    case "globe":
      return (
        <img src={Integrations5} alt="integrations" />
      );
    case "waves":
      return (
        <img src={Integrations6} alt="integrations" />
      );
    case "squares":
      return (
        <img src={Integrations7} alt="integrations" />
      );
    case "stack":
      return (
        <img src={Integrations8} alt="integrations" />
      );
    default:
      return null;
  }
}
