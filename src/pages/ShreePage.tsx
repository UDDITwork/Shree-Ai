import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import HologramScene from '../components/shree/HologramScene';
import FeaturesList from '../components/shree/FeaturesList';
import MatrixRain from '../components/shree/MatrixRain';
import AIInterface from '../components/shree/AIInterface';

const ShreePage = () => {
  return (
    <div className="min-h-screen bg-black text-cyan-300 relative overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Main Content */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4 py-20"
        >
          {/* Hero Section */}
          <div className="h-[60vh] relative mb-20">
            <Canvas>
              <HologramScene />
            </Canvas>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-6xl md:text-8xl font-bold mb-4 text-shadow-glow"
              >
                श्री AI
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xl md:text-2xl text-cyan-400"
              >
                The Future of Artificial Intelligence
              </motion.p>
            </div>
          </div>

          {/* Features Section */}
          <FeaturesList />

          {/* AI Interface Demo */}
          <AIInterface />
        </motion.div>
      </div>
    </div>
  );
};

export default ShreePage;