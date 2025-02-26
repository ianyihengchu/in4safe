
import React from 'react';
import { Home, PlusCircle, Bell, Newspaper } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20">
      <div className="bg-white rounded-full mx-4 mb-4 shadow-lg">
        <div className="flex justify-around items-center py-3 px-6">
          <NavItem label="HOME" active />
          <NavItem label="ADD" />
          <NavItem label="ALERTS" />
          <NavItem label="NEWS" />
        </div>
      </div>
    </nav>
  );
};

interface NavItemProps {
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, active }) => {
  return (
    <div className={`px-4 ${active ? 'text-black font-bold underline' : 'text-gray-500'}`}>
      {label}
    </div>
  );
};

export default Navbar;
