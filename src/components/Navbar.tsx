
import React from 'react';
import { Home, PlusCircle, Bell, Newspaper } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1A1F2C] text-white py-4 z-20">
      <div className="container mx-auto flex justify-around items-center">
        <NavItem icon={<Home size={20} />} label="HOME" active />
        <NavItem icon={<PlusCircle size={20} />} label="ADD" />
        <NavItem icon={<Bell size={20} />} label="ALERTS" />
        <NavItem icon={<Newspaper size={20} />} label="NEWS" />
      </div>
    </nav>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active }) => {
  return (
    <div className={`flex flex-col items-center ${active ? 'text-brand-gold' : 'text-gray-400'}`}>
      {icon}
      <span className="text-xs mt-1 font-semibold">{label}</span>
    </div>
  );
};

export default Navbar;
