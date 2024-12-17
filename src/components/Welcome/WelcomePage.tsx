import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import magicMintLogo from '../images/Populate/MAGICMINT TOKEN (1).png';

interface WelcomePageProps {
  onComplete: () => void;
}

export function WelcomePage({ onComplete }: WelcomePageProps) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              filter: "blur(50px)",
              transition: { duration: 1 }
            }}
          >
            <motion.div
              className="w-96 h-96 mb-12 relative"
              initial={{ rotate: 0 }}
              animate={{ 
                rotate: 360,
                transition: {
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity
                }
              }}
            >
              <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-3xl animate-pulse" />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/30 to-emerald-300/30 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: -360,
                  transition: {
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity
                  }
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/20 to-emerald-200/20 blur-xl"
                animate={{
                  scale: [1.1, 0.9, 1.1],
                  rotate: 180,
                  transition: {
                    duration: 15,
                    ease: "linear",
                    repeat: Infinity
                  }
                }}
              />
              <img 
                src={magicMintLogo}
                alt="MagicMint Logo"
                className="relative z-10 w-full h-full object-contain"
              />
            </motion.div>

            <motion.h1
              className="text-8xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="text-white">Magic</span>
              <span className="bg-gradient-to-r from-emerald-300 to-emerald-400 text-transparent bg-clip-text">
                Mint
              </span>
            </motion.h1>

            <motion.p
              className="text-2xl text-emerald-100/80"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              A Hybrid Trading Card Game of Value
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}