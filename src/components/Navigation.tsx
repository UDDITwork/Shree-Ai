import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Home, Briefcase, Brain, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', to: '/' },
    { 
      id: 'projects', 
      icon: Briefcase, 
      label: 'P',
      subitems: [
        { id: 'app-work', label: 'APP WORK', url: '#' },
        { id: 'web-dev', label: 'WEB-DEV', url: '#' },
        { id: 'ai-ml', label: 'AI/ML', url: '#' }
      ]
    },
    { 
      id: 'ai', 
      icon: Brain, 
      label: 'श्री',
      to: '/shree',
      className: 'text-xl font-bold text-cyan-300 hover:text-cyan-400 transition-colors duration-300'
    },
    { id: 'contact', icon: Terminal, label: '📞' }
  ];

  return (
    <div className="fixed left-0 top-0 z-50 mt-10">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="ml-4 p-3 bg-black/80 rounded-full border border-cyan-500/30
                   shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]
                   transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Menu className="text-cyan-400 w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-full mt-2 ml-4 bg-black/80 rounded-r-2xl
                      border border-cyan-500/30 shadow-[0_0_20px_rgba(0,255,255,0.3)]
                      backdrop-blur-md overflow-hidden"
          >
            <ul className="py-6 px-4 space-y-4">
              {navItems.map((item) => (
                <motion.li key={item.id} className="relative">
                  {item.to ? (
                    <Link to={item.to}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 bg-black/40 rounded-xl border border-cyan-500/30
                                 hover:border-cyan-400/50 transition-all duration-300
                                 flex items-center gap-3 w-full ${item.className || 'text-cyan-400 hover:text-cyan-300'}`}
                      >
                        <item.icon size={20} />
                        <span className="min-w-[24px]">{item.label}</span>
                      </motion.div>
                    </Link>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
                      className={`p-3 bg-black/40 rounded-xl border border-cyan-500/30
                               hover:border-cyan-400/50 transition-all duration-300
                               flex items-center gap-3 w-full ${item.className || 'text-cyan-400 hover:text-cyan-300'}`}
                    >
                      <item.icon size={20} />
                      <span className="min-w-[24px]">{item.label}</span>
                    </motion.button>
                  )}

                  {item.subitems && expandedItem === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 ml-6 space-y-2"
                    >
                      {item.subitems.map((subitem) => (
                        <motion.a
                          key={subitem.id}
                          href={subitem.url}
                          whileHover={{ scale: 1.05, x: 5 }}
                          className="block px-4 py-2 bg-black/40 rounded-lg border border-cyan-500/30
                                   text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50
                                   transition-all duration-300 text-sm"
                        >
                          {subitem.label}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;