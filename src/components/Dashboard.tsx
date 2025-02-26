
import React, { useState } from 'react';
import MapView from './MapView';
import IncidentPopup from './IncidentPopup';
import Navbar from './Navbar';
import Header from './Header';

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
    icon: '🔥'
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
    icon: '⚠️'
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
    <div className="flex flex-col h-screen bg-black">
      {/* App header - using the Header component from Index page */}
      <Header />

      {/* Main content - using the full height minus header and navbar */}
      <main className="flex-1 mt-16 mb-20">
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
