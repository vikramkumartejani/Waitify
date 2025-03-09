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
    return () => {};
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
    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center mx-auto">
      <div
        className="absolute w-full h-full rounded-full"
        style={{
          boxSizing: "border-box",
          border: "3px solid rgba(0, 125, 252, 0.05)",
          boxShadow:
            "0 0.6px 1.8px -0.8px rgba(0, 125, 252, 0.05), 0 2.3px 6.9px -1.7px rgba(0, 125, 252, 0.05), 0 10px 30px -2.5px rgba(0, 125, 252, 0.05)",
        }}
      />
      <div
        className="absolute w-[95%] h-[95%] rounded-full"
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
                  width: "93%",
                  height: "93%",
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
      {/* Center icon with compression animation */}
      <motion.div
        className="absolute z-10 rounded-full p-4"
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
          width: "16.66%",
          height: "16.66%",
          minWidth: "60px",
          minHeight: "60px",
          maxWidth: "100px",
          maxHeight: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "",
          border: "1px solid rgba(255, 255, 255, 0.7)",
        }}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img src={Logo} alt="logo" className="w-full h-full object-contain" />
        </div>
      </motion.div>
      {/* Surrounding icons with responsive positioning */}
      <div className="absolute w-[93%] h-[93%]">
        <IconPosition position="top" icon="overlap" />
        <IconPosition position="top-right" icon="stripes" />
        <IconPosition position="right" icon="star" />
        <IconPosition position="bottom-right" icon="lightning" />
        <IconPosition position="bottom" icon="globe" />
        <IconPosition position="bottom-left" icon="waves" />
        <IconPosition position="left" icon="squares" />
        <IconPosition position="top-left" icon="stack" />
      </div>
    </div>
  );
}

// Helper component for responsive icon positioning
function IconPosition({ position, icon }) {
  // Define positioning based on the position prop
  let positionStyles = {};
  
  switch (position) {
    case "top":
      positionStyles = { top: "-7.5%", left: "50%", transform: "translateX(-50%)" };
      break;
    case "top-right":
      positionStyles = { top: "7.5%", right: "7.5%" };
      break;
    case "right":
      positionStyles = { top: "50%", right: "-7.5%", transform: "translateY(-50%)" };
      break;
    case "bottom-right":
      positionStyles = { bottom: "7.5%", right: "7.5%" };
      break;
    case "bottom":
      positionStyles = { bottom: "-7.5%", left: "50%", transform: "translateX(-50%)" };
      break;
    case "bottom-left":
      positionStyles = { bottom: "7.5%", left: "7.5%" };
      break;
    case "left":
      positionStyles = { top: "50%", left: "-7.5%", transform: "translateY(-50%)" };
      break;
    case "top-left":
      positionStyles = { top: "7.5%", left: "7.5%" };
      break;
    default:
      break;
  }

  return (
    <div
      className="absolute"
      style={{
        ...positionStyles,
        zIndex: 1,
      }}
    >
      <motion.div
        className="bg-[#ecedf1] p-2 sm:p-3 rounded-[25px] w-12 sm:w-16 h-12 sm:h-16"
        style={{
          border: "2px solid rgba(0, 125, 252, 0.05)",
          boxShadow:
            "0 0.6px 1.8px -0.8px rgba(0, 125, 252, 0.05), 0 2.3px 6.9px -1.7px rgba(0, 125, 252, 0.05), 0 10px 30px -2.5px rgba(0, 125, 252, 0.05)",
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
        <div className="w-8 h-8 sm:max-w-10 sm:max-h-10 sm:min-w-10 sm:min-h-10 flex items-center justify-center">
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
        <img src={Integrations1} alt="integrations" className="w-full h-full object-contain" />
      );
    case "stripes":
      return (
        <img src={Integrations2} alt="integrations" className="w-full h-full object-contain" />
      );
    case "star":
      return (
        <img src={Integrations3} alt="integrations" className="w-full h-full object-contain" />
      );
    case "lightning":
      return (
        <img src={Integrations4} alt="integrations" className="w-full h-full object-contain" />
      );
    case "globe":
      return (
        <img src={Integrations5} alt="integrations" className="w-full h-full object-contain" />
      );
    case "waves":
      return (
        <img src={Integrations6} alt="integrations" className="w-full h-full object-contain" />
      );
    case "squares":
      return (
        <img src={Integrations7} alt="integrations" className="w-full h-full object-contain" />
      );
    case "stack":
      return (
        <img src={Integrations8} alt="integrations" className="w-full h-full object-contain" />
      );
    default:
      return null;
  }
}