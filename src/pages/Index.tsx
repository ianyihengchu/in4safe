
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import LoginForm from '@/components/LoginForm';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading to show animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-city">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-0" />
      
      <Header />
      
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 gold-gradient text-shadow-lg tracking-wide">
            Welcome to Our Community<br />Safety Portal
          </h1>
          
          <p className="text-xl text-white/80 mt-6 mb-12 max-w-2xl mx-auto text-shadow-sm">
            Check and share nearby accident alerts at any time.
          </p>
          
          <div className="mt-12 glass-morphism rounded-xl p-8 backdrop-blur-md max-w-md mx-auto">
            <LoginForm />
          </div>
        </div>
      </main>
      
      <footer className="relative z-10 pb-6 text-center text-white/40 text-sm">
        <p>© 2023 IN4SAFE. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
