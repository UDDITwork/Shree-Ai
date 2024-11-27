import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface SearchResponse {
  [key: string]: string;
}

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const responses: SearchResponse = {
    'layout': 'Content from mohan.txt',
    'soniya': 'Content from love.txt',
    'kilo': 'Content from boxers.txt',
    'resume': 'SHOW_RESUME'
  };

  const handleSearch = async () => {
    setIsLoading(true);
    const lowercaseQuery = query.toLowerCase();
    
    if (lowercaseQuery === 'resume' || lowercaseQuery === 'Resume') {
      // Trigger resume animation and display
      setResponse('SHOW_RESUME');
    } else {
      setResponse(responses[lowercaseQuery] || 'No matching response found.');
    }
    
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          className="w-full px-6 py-4 bg-black/30 border border-cyan-500/30 rounded-full 
                   text-cyan-300 placeholder-cyan-600 focus:outline-none focus:border-cyan-400
                   shadow-[0_0_15px_rgba(0,255,255,0.3)] backdrop-blur-sm"
          placeholder="Enter your query..."
        />
        <button
          onClick={handleSearch}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400 
                   hover:text-cyan-300 transition-colors"
        >
          <Search size={24} />
        </button>
      </div>
      
      {response && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 p-6 bg-black/40 border border-cyan-500/30 rounded-xl 
                     shadow-[0_0_20px_rgba(0,255,255,0.2)] backdrop-blur-sm"
        >
          <p className="text-cyan-300">{response}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SearchBar;