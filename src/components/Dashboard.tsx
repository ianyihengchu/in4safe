
import React, { useState } from 'react';
import MapView from './MapView';
import IncidentPopup from './IncidentPopup';
import Navbar from './Navbar';
import Header from './Header';
import AddAlertForm from './AddAlertForm';
import NewsView from './NewsView';
import AlertsView from './AlertsView';

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
  const [activeTab, setActiveTab] = useState('HOME');
  const [showAddForm, setShowAddForm] = useState(false);

  const handleIncidentClick = (incident: any) => {
    setSelectedIncident(incident);
  };

  const handleClosePopup = () => {
    setSelectedIncident(null);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'ADD') {
      setShowAddForm(true);
    } else {
      setShowAddForm(false);
    }
  };

  const handleAddAlertSubmit = (alertData: any) => {
    console.log('New alert data:', alertData);
    // Here you would typically send this data to a server
    // or add it to your local state
    setShowAddForm(false);
    setActiveTab('HOME');
    // Optionally show a success notification
  };

  const handleCloseAddForm = () => {
    setShowAddForm(false);
    setActiveTab('HOME');
  };

  return (
    <div className="flex flex-col h-screen bg-black overflow-hidden">
      {/* App header - using the Header component from Index page */}
      <Header />

      {/* Main content - map always at the bottom, other content floating above */}
      <main className="flex-1 mt-16 relative overflow-hidden">
        {/* Map view - always present in the background, fixed position */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <MapView 
            incidents={INCIDENTS} 
            homeLocation={HOME_LOCATION}
            onIncidentClick={handleIncidentClick}
          />
        </div>
        
        {/* Overlaid views on top of the map with scrollable content */}
        {activeTab === 'NEWS' && (
          <div className="absolute inset-0 z-10 bg-black/20 backdrop-blur-sm overflow-auto">
            <NewsView className="animate-fade-in" />
          </div>
        )}
        
        {activeTab === 'ALERTS' && (
          <div className="absolute inset-0 z-10 bg-black/20 backdrop-blur-sm overflow-auto">
            <AlertsView className="animate-fade-in" />
          </div>
        )}
        
        {selectedIncident && (
          <IncidentPopup 
            incident={selectedIncident} 
            onClose={handleClosePopup}
          />
        )}

        {showAddForm && (
          <AddAlertForm 
            onClose={handleCloseAddForm}
            onSubmit={handleAddAlertSubmit}
          />
        )}
      </main>

      {/* Navigation bar */}
      <Navbar 
        activeTab={activeTab} 
        onTabChange={handleTabChange} 
      />
    </div>
  );
};

export default Dashboard;
