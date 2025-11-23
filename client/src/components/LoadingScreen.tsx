import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    const renderTimer = setTimeout(() => {
      setShouldRender(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(renderTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
      style={{ pointerEvents: isLoading ? 'auto' : 'none' }}
    >
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Premium Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          {/* Outer rotating ring */}
          <motion.div
            className="w-32 h-32 border-2 border-transparent border-t-red-600 border-r-red-600 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />

          {/* Middle pulsing ring */}
          <motion.div
            className="absolute inset-0 w-32 h-32 border-2 border-red-600/30 rounded-full"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.5, 0.1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Inner glowing center */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative w-20 h-20 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-700 rounded-lg"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(220, 20, 60, 0.5)',
                    '0 0 40px rgba(220, 20, 60, 0.8)',
                    '0 0 20px rgba(220, 20, 60, 0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.span
                className="relative text-2xl font-black text-white"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                MT
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        {/* Premium Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-wider">
            CRAFTING EXCELLENCE
          </h2>
          
          {/* Animated loading dots */}
          <div className="flex gap-2 justify-center mb-6">
            <motion.div
              className="w-3 h-3 bg-gradient-to-br from-red-600 to-red-700 rounded-full"
              animate={{ y: [0, -12, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="w-3 h-3 bg-gradient-to-br from-red-600 to-red-700 rounded-full"
              animate={{ y: [0, -12, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className="w-3 h-3 bg-gradient-to-br from-red-600 to-red-700 rounded-full"
              animate={{ y: [0, -12, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
            />
          </div>

          <p className="text-lg text-gray-300 font-semibold tracking-wide">
            YOUR PREMIUM PORTFOLIO AWAITS
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mt-4"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-red-600 to-red-500"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      {/* Fade in text at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 text-center"
      >
        <p className="text-xs text-gray-500 uppercase tracking-widest">
          Muhammad Tariq • Premium SaaS Designer
        </p>
      </motion.div>
    </motion.div>
  );
}
