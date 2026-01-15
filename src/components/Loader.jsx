import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const dotVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen text-white"
      style={{ backgroundColor: '#101828' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex flex-col items-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Central animated circle with orbiting dots */}
        <div className="relative w-32 h-32">
          {/* Center circle */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            animate={{
              boxShadow: [
                '0 0 20px rgba(34, 211, 238, 0.4)',
                '0 0 40px rgba(34, 211, 238, 0.6)',
                '0 0 20px rgba(34, 211, 238, 0.4)',
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />

          {/* Orbiting elements */}
          <motion.div
            className="absolute inset-0"
            variants={orbitVariants}
            animate="animate"
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="absolute w-3 h-3 bg-cyan-400 rounded-full"
                style={{
                  top: '0%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
                initial={{ rotate: (index * 120) }}
              />
            ))}
          </motion.div>

          {/* Outer rotating ring */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            style={{ filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.3))' }}
          >
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{ transformOrigin: '50px 50px' }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(34, 211, 238, 0.8)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
                <stop offset="100%" stopColor="rgba(34, 211, 238, 0.8)" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>

        {/* Loading text with bouncing dots */}
        <motion.div variants={itemVariants} className="text-center">
          <div className="flex items-center justify-center gap-1 mb-2">
            <span className="text-white text-lg font-semibold">Loading</span>
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                custom={i}
                variants={dotVariants}
                initial="hidden"
                animate={['visible', 'animate']}
                className="text-cyan-400 text-lg"
              >
                .
              </motion.span>
            ))}
          </div>
          <motion.p
            className="text-gray-400 text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Crafting something amazing
          </motion.p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="w-48 h-1 rounded-full overflow-hidden"
          style={{ backgroundColor: '#1a2332' }}
          variants={itemVariants}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
