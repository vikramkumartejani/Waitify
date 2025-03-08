"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WavyAnimation() {
  const [centerCompressed, setCenterCompressed] = useState(false);
  const [showWaves, setShowWaves] = useState(false);
  const [waveSequence, setWaveSequence] = useState(0);

  // Start initial animations
  useEffect(() => {
    setTimeout(() => {
      setCenterCompressed(true);
      setTimeout(() => {
        setShowWaves(true);
      }, 1000);
    }, 1000);

    // Set up interval for wave sequences
    const intervalId = setInterval(() => {
      setWaveSequence((prev) => (prev + 1) % 3); // Cycle through 3 states
    }, 4000); // Every 4 seconds

    return () => clearInterval(intervalId);
  }, []);

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

      {/* Wave animations - only show when triggered */}
      <AnimatePresence>
        {showWaves && waveSequence === 0 && (
          <div className="absolute inset-0 flex items-center justify-center">
            {Array.from({ length: 10 }).map((_, index) => (
              <motion.div
                key={`wave1-${index}`}
                className="absolute rounded-full"
                initial={{
                  scale: 0.2,
                  opacity: 0,
                }}
                animate={{
                  scale: [0.2, 0.87, 0.83, 0.79, 0.75, 0.71, 0.67],
                  opacity: [0.8, 0.6, 0.4, 0.2, 0],
                }}
                exit={{ opacity: 0, scale: 1 }}
                transition={{
                  duration: 3,
                  ease: "easeOut",
                  delay: index * 0.3,
                  times: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
                }}
                style={{
                  width: "570px",
                  height: "570px",
                  filter: "blur(5px)",
                  boxShadow: `
                    -5px -5px 10px 0px rgba(250, 251, 255, 0.8),
                    inset -5px -5px 10px 0px rgba(250, 251, 255, 0.8),
                    5px 5px 10px 0px rgba(0, 125, 252, 0.15),
                    inset 5px 5px 10px 0px rgba(0, 125, 252, 0.15)
                  `,
                  transformOrigin: "center center",
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Center icon with compression animation */}
      <motion.div
        className="absolute z-10 bg-white rounded-full p-4"
        animate={{
          scale: centerCompressed ? 0.9 : 1,
          boxShadow: centerCompressed
            ? "-3px -3px 6px rgba(250, 251, 255, 0.8), 3px 3px 6px rgba(0, 125, 252, 0.15)"
            : "-5px -5px 10px rgba(250, 251, 255, 0.8), 5px 5px 10px rgba(0, 125, 252, 0.15)",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
              fill="white"
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
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6C12 6 16 10 16 14C16 17.3137 14.2091 20 12 20C9.79086 20 8 17.3137 8 14C8 10 12 6 12 6Z"
            fill="#8B5CF6"
          />
          <path
            d="M12 6C12 6 8 10 8 14C8 17.3137 9.79086 20 12 20C14.2091 20 16 17.3137 16 14C16 10 12 6 12 6Z"
            fill="#EC4899"
          />
        </svg>
      );
    case "stripes":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4L20 20"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16 4L4 16"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20 8L8 20"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "star":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4L14.5 9.5L20 12L14.5 14.5L12 20L9.5 14.5L4 12L9.5 9.5L12 4Z"
            fill="black"
          />
        </svg>
      );
    case "lightning":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" fill="#3B82F6" />
          <path d="M13 6L7 13H11L11 18L17 11H13L13 6Z" fill="white" />
        </svg>
      );
    case "globe":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" fill="#8B5CF6" />
          <path
            d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22"
            stroke="white"
            strokeWidth="2"
          />
          <path d="M2 12H22" stroke="white" strokeWidth="2" />
        </svg>
      );
    case "waves":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 10C6 8 8 8 10 10C12 12 14 12 16 10C18 8 20 8 22 10"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 14C6 12 8 12 10 14C12 16 14 16 16 14C18 12 20 12 22 14"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 18C6 16 8 16 10 18C12 20 14 20 16 18C18 16 20 16 22 18"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "squares":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="4" width="6" height="6" rx="1" fill="black" />
          <rect x="14" y="4" width="6" height="6" rx="1" fill="black" />
          <rect x="4" y="14" width="6" height="6" rx="1" fill="black" />
          <rect x="14" y="14" width="6" height="6" rx="1" fill="black" />
        </svg>
      );
    case "stack":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="6" y="6" width="12" height="4" rx="1" fill="#3B82F6" />
          <rect x="6" y="12" width="12" height="4" rx="1" fill="#3B82F6" />
          <rect x="6" y="18" width="12" height="4" rx="1" fill="#3B82F6" />
        </svg>
      );
    default:
      return null;
  }
}
