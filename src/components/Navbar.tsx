
import React from 'react';
import { Home, PlusCircle, Bell, Newspaper } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20">
      <div className="bg-[#222222] rounded-t-3xl mx-0 mb-0 shadow-lg">
        <div className="flex justify-around items-center py-5 px-6">
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
      className={`px-4 cursor-pointer ${active ? 'text-brand-gold font-bold' : 'text-white'}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default Navbar;
