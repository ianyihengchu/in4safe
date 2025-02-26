
import React from 'react';
import { MapPin } from 'lucide-react';

interface Location {
  lat: number;
  lng: number;
}

interface Incident {
  id: number;
  type: string;
  position: Location;
  icon: React.ReactNode | string;
  title: string;
}

interface MapViewProps {
  incidents: Incident[];
  homeLocation: Location;
  onIncidentClick: (incident: Incident) => void;
}

const MapView: React.FC<MapViewProps> = ({ incidents, homeLocation, onIncidentClick }) => {
  return (
    <div className="relative h-full w-full bg-[#8E9196] overflow-hidden">
      {/* Map background with road network - using a gray background with white lines */}
      <div className="absolute inset-0 bg-[#8E9196]">
        {/* Simulated road network pattern with white lines */}
        <svg width="100%" height="100%" className="opacity-90">
          <pattern id="road-pattern" width="300" height="300" patternUnits="userSpaceOnUse">
            <path d="M 0,150 L 300,150 M 150,0 L 150,300 M 0,0 L 300,300 M 0,300 L 300,0" 
                  stroke="white" strokeWidth="10" fill="none" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#road-pattern)" />
        </svg>
      </div>
      
      {/* Home location marker */}
      <div 
        className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2"
        style={{ 
          top: `${50 + (homeLocation.lat - 43.648) * 1000}px`, 
          left: `${50 + (homeLocation.lng + 79.397) * 1000}px` 
        }}
      >
        <img 
          src="/lovable-uploads/2f9162b0-954d-41fa-8323-b0d311a7a502.png" 
          alt="Home location" 
          className="w-8 h-8"
        />
      </div>
      
      {/* Incident markers */}
      {incidents.map((incident) => (
        <div
          key={incident.id}
          className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          style={{ 
            top: `${50 + (incident.position.lat - 43.648) * 1000}px`, 
            left: `${50 + (incident.position.lng + 79.397) * 1000}px` 
          }}
          onClick={() => onIncidentClick(incident)}
        >
          {incident.type === 'fire' ? (
            <span className="text-2xl">🔥</span>
          ) : (
            <div className="relative">
              <MapPin size={24} className="text-[#ea384c]" />
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-white font-bold text-[10px]"></div>
            </div>
          )}
        </div>
      ))}
      
      {/* Google Map API disclaimer */}
      <div className="absolute bottom-4 left-4 text-xs text-white/70">
        Map data would be provided by Google Maps API in a real implementation
      </div>
    </div>
  );
};

export default MapView;
