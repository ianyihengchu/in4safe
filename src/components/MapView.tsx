
import React, { useEffect, useRef } from 'react';
import { MapPin, Flame } from 'lucide-react';

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
  // This component is a placeholder for a real Google Maps integration
  // In a real implementation, this would initialize and manage the Google Maps API
  
  return (
    <div className="relative h-full w-full bg-gray-800 overflow-hidden">
      {/* Map background - in a real implementation this would be the Google Map */}
      <div className="absolute inset-0 bg-city"></div>
      
      {/* Home location marker */}
      <div 
        className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
        style={{ 
          top: `${50 + (homeLocation.lat - 43.648) * 1000}px`, 
          left: `${50 + (homeLocation.lng + 79.397) * 1000}px` 
        }}
      >
        <MapPin size={36} className="text-red-500 animate-pulse-subtle" />
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
          <div className={`flex items-center justify-center h-12 w-12 rounded-full
            ${incident.type === 'fire' ? 'bg-red-500/20 text-red-500' : ''}
            ${incident.type === 'construction' ? 'bg-yellow-500/20 text-yellow-500' : ''}
            ${incident.type === 'crime' ? 'bg-orange-500/20 text-orange-500' : ''}
            ${incident.type === 'emergency' ? 'bg-blue-500/20 text-blue-500' : ''}
            border-2 border-current p-2`}
          >
            {typeof incident.icon === 'string' ? 
              <span className="text-xl">{incident.icon}</span> : 
              incident.icon
            }
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-1 text-xs text-white font-semibold">
            {incident.title.split(' ')[0]}
          </div>
        </div>
      ))}
      
      {/* Google Map API disclaimer */}
      <div className="absolute bottom-4 left-4 text-xs text-white/50">
        Note: In a real implementation, this would use the Google Maps API
      </div>
    </div>
  );
};

export default MapView;
