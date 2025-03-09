"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from '../assets/logo.svg'
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
    };
  }, []);

  const startWaveEmissionCycle = () => {
    setButtonPressed(true);

    setTimeout(() => {
      setButtonPressed(false);
      setShowWaves(true);
      startWaveEmission();
    }, 300); 
  };

  const startWaveEmission = () => {
    setIsEmitting(true);

    const totalWaveTime = 2.3;

    const waveSetTimeout = setTimeout(() => {
      setIsEmitting(false);

      const pauseTimeout = setTimeout(() => {
        setWaveCount((prev) => prev + 1);  

        startWaveEmissionCycle();
      }, 3000); 

      return () => clearTimeout(pauseTimeout);
    }, totalWaveTime * 1000);  

    return () => clearTimeout(waveSetTimeout);
  };

  return (
    <div className="relative w-[600px] h-[600px] flex items-center justify-center mx-auto">
      <div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          boxSizing: "border-box",
          border: "3px solid rgba(0, 125, 252, 0.05)",
          boxShadow:
            "0 0.6px 1.8px -0.8px rgba(0, 125, 252, 0.05), 0 2.3px 6.9px -1.7px rgba(0, 125, 252, 0.05), 0 10px 30px -2.5px rgba(0, 125, 252, 0.05)",
        }}
      />

      <div
        className="absolute w-[560px] h-[560px] rounded-full"
        style={{
          boxSizing: "border-box",
          border: "2px solid rgba(0, 125, 252, 0.05)",
          boxShadow:
            "inset 0 0.6px 1.8px -0.8px rgba(0, 125, 252, 0.05), inset 0 2.3px 6.9px -1.7px rgba(0, 125, 252, 0.05), inset 0 10px 30px -2.5px rgba(0, 125, 252, 0.05)",
        }}
      />

      <AnimatePresence mode="wait">
        {showWaves && isEmitting && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={`wave-${waveCount}-${index}`}
                className="absolute rounded-full"
                initial={{
                  scale: 0.2,
                  opacity: 1, 
                }}
                animate={{
                  scale: [0.2, 1],
                  opacity: [1, 0.2], 
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2 },
                }}
                transition={{
                  duration: 1.2,  
                  ease: "linear", 
                  delay: index * 0.2,  
                  times: [0, 1],
                }}
                style={{
                  width: "570px",
                  height: "570px",
                  filter: "blur(4px)",  
                  boxShadow: `
                    -5px -5px 10px 0px rgba(250, 251, 255, 0.9),
                    inset -5px -5px 10px 0px rgba(250, 251, 255, 0.9),
                    5px 5px 10px 0px rgba(0, 125, 252, 0.3),
                    inset 5px 5px 10px 0px rgba(0, 125, 252, 0.3)
                  `,  
                  transformOrigin: "center center",
                  border: "1px solid rgba(0, 125, 252, 0.2)", 
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

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
          <img src={Logo} alt="logo" className="w-full h-full" />
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
