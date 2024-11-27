import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const AIInterface = () => {
  const [currentText, setCurrentText] = useState('');
  const welcomeText = 'Initializing श्री AI Interface... System ready for interaction.';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= welcomeText.length) {
        setCurrentText(welcomeText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8 bg-black/40 rounded-xl border border-cyan-500/30
                 shadow-[0_0_20px_rgba(0,255,255,0.2)] backdrop-blur-sm"
    >
      <div className="flex items-center gap-3 mb-4">
        <Terminal className="text-cyan-400" />
        <h2 className="text-2xl font-bold">AI Interface</h2>
      </div>
      <div className="h-48 overflow-hidden bg-black/60 rounded-lg p-4 font-mono">
        <p className="text-cyan-400">
          <span className="text-green-400">&gt;</span> {currentText}
          <span className="animate-pulse">_</span>
        </p>
      </div>
      <p className="mt-4 text-cyan-400/80 text-sm">
        Note: Full AI interaction capabilities are currently in development.
      </p>
    </motion.div>
  );
};

export default AIInterface;