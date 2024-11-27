import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, MessageSquare, Globe, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Advanced Neural Processing',
    description: 'Multi-layered neural networks with deep learning capabilities for complex problem-solving.'
  },
  {
    icon: MessageSquare,
    title: 'Natural Communication',
    description: 'Advanced language processing for natural, context-aware conversations.'
  },
  {
    icon: Globe,
    title: 'Global Knowledge Integration',
    description: 'Real-time access to vast knowledge bases and continuous learning capabilities.'
  },
  {
    icon: Shield,
    title: 'Ethical AI Framework',
    description: 'Built-in ethical guidelines ensuring responsible AI behavior and decision-making.'
  },
  {
    icon: Cpu,
    title: 'Quantum Processing',
    description: 'Next-generation quantum computing integration for unprecedented processing power.'
  },
  {
    icon: Zap,
    title: 'Real-time Adaptation',
    description: 'Dynamic learning and adaptation to new situations and requirements.'
  }
];

const FeaturesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-6 bg-black/40 rounded-xl border border-cyan-500/30
                     hover:border-cyan-400/50 transition-all duration-300
                     shadow-[0_0_15px_rgba(0,255,255,0.2)]
                     hover:shadow-[0_0_25px_rgba(0,255,255,0.3)]
                     backdrop-blur-sm"
        >
          <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
          <p className="text-cyan-400/80">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturesList;