
import React from 'react';
import { Home, PlusCircle, Bell, Newspaper } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="fixed bottom-20 left-0 right-0 z-50 flex justify-center">
      <div className="backdrop-blur-md bg-black/70 rounded-full shadow-lg px-2 py-3">
        <div className="flex justify-around items-center">
          <NavItem 
            label="HOME" 
            active={activeTab === 'HOME'} 
            onClick={() => onTabChange('HOME')}
          />
          <NavItem 
            label="ADD" 
            active={activeTab === 'ADD'} 
            onClick={() => onTabChange('ADD')}
          />
          <NavItem 
            label="ALERTS" 
            active={activeTab === 'ALERTS'} 
            onClick={() => onTabChange('ALERTS')}
          />
          <NavItem 
            label="NEWS" 
            active={activeTab === 'NEWS'} 
            onClick={() => onTabChange('NEWS')}
          />
        </div>
      </div>
    </nav>
  );
};

interface NavItemProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, active, onClick }) => {
  return (
    <div 
      className={`px-6 py-1 cursor-pointer transition-colors ${
        active 
          ? 'text-brand-gold font-bold' 
          : 'text-white hover:text-gray-300'
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default Navbar;
