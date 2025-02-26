
import React, { useState } from 'react';
import MapView from './MapView';
import IncidentPopup from './IncidentPopup';
import Navbar from './Navbar';
import { Flame, Search } from 'lucide-react';

// Sample incident data
const INCIDENTS = [
  {
    id: 1,
    type: 'fire',
    title: 'FIRE ALERT',
    date: '2025 FEB. 2nd',
    address: '1234, Dundas Street, Toronto, ON',
    description: 'Fire alert: road closed. Please change route beforehand.',
    image: '/lovable-uploads/bf5298a4-31da-4e5c-b30d-756ec5c35e43.png',
    position: { lat: 43.655, lng: -79.387 },
    icon: <Flame className="text-red-500" />
  },
  {
    id: 2,
    type: 'construction',
    title: 'CONSTRUCTION',
    date: '2025 FEB. 5th',
    address: '987 Queen Street, Toronto, ON',
    description: 'Road construction in progress. Expect delays.',
    position: { lat: 43.652, lng: -79.395 },
    icon: '🚧'
  },
  {
    id: 3,
    type: 'crime',
    title: 'ASSAULT REPORT',
    date: '2025 FEB. 1st',
    address: '456 King Street, Toronto, ON',
    description: 'Recent assault reported in this area. Stay vigilant.',
    position: { lat: 43.645, lng: -79.375 },
    icon: '🔪'
  },
  {
    id: 4,
    type: 'emergency',
    title: 'MEDICAL EMERGENCY',
    date: '2025 FEB. 3rd',
    address: '321 Front Street, Toronto, ON',
    description: 'Medical emergency response in progress.',
    position: { lat: 43.641, lng: -79.378 },
    icon: '🚑'
  }
];

// Home location
const HOME_LOCATION = { lat: 43.648, lng: -79.397 };

const Dashboard = () => {
  const [selectedIncident, setSelectedIncident] = useState<any>(null);

  const handleIncidentClick = (incident: any) => {
    setSelectedIncident(incident);
  };

  const handleClosePopup = () => {
    setSelectedIncident(null);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* App header */}
      <header className="bg-[#1A1F2C] text-white py-4 px-6 flex justify-between items-center z-20 fixed top-0 w-full">
        <h1 className="text-2xl font-bold text-brand-gold">IN4SAFE</h1>
        <div className="flex items-center gap-6">
          <a href="#profile" className="text-brand-gold hover:text-brand-gold-light">Profile</a>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-[#333] text-white rounded-full px-4 py-1 pl-10 w-56"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 mt-16 mb-16">
        <MapView 
          incidents={INCIDENTS} 
          homeLocation={HOME_LOCATION}
          onIncidentClick={handleIncidentClick}
        />
        
        {selectedIncident && (
          <IncidentPopup 
            incident={selectedIncident} 
            onClose={handleClosePopup}
          />
        )}
      </main>

      {/* Navigation bar */}
      <Navbar />
    </div>
  );
};

export default Dashboard;
