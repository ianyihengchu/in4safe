
import { useState, useEffect } from 'react';
import { Search, User } from 'lucide-react';

const DashboardHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <a href="/" className="text-brand-gold text-2xl font-bold tracking-wider animate-fade-in">
          IN4SAFE
        </a>
        
        <div className="flex items-center gap-6">
          <a href="/profile" className="text-white/90 hover:text-brand-gold transition-colors duration-300">
            <User className="h-5 w-5" />
          </a>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-full py-2 pl-4 pr-10 w-[200px] focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all duration-300"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
