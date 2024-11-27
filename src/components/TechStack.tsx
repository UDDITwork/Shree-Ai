import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Terminal, Cpu, Cloud } from 'lucide-react';

const technologies = [
  { icon: Code2, name: 'Frontend', link: 'https://reactjs.org' },
  { icon: Database, name: 'Backend', link: 'https://nodejs.org' },
  { icon: Globe, name: 'Web', link: 'https://developer.mozilla.org' },
  { icon: Terminal, name: 'DevOps', link: 'https://www.docker.com' },
  { icon: Cpu, name: 'AI/ML', link: 'https://tensorflow.org' },
  { icon: Cloud, name: 'Cloud', link: 'https://aws.amazon.com' }
];

const TechStack = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-12">
      {technologies.map((tech, index) => (
        <motion.a
          key={tech.name}
          href={tech.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="group relative"
        >
          <div className="w-24 h-24 bg-black/40 rounded-full border border-cyan-500/30
                        flex items-center justify-center
                        shadow-[0_0_15px_rgba(0,255,255,0.3)]
                        group-hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]
                        transition-all duration-300
                        backdrop-blur-sm">
            <tech.icon size={40} className="text-cyan-400 group-hover:text-cyan-300" />
          </div>
          <motion.span 
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-cyan-400 opacity-0 group-hover:opacity-100
                       transition-opacity duration-300"
          >
            {tech.name}
          </motion.span>
        </motion.a>
      ))}
    </div>
  );
};

export default TechStack;