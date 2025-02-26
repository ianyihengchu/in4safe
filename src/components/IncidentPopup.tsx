
import React from 'react';
import { X } from 'lucide-react';

interface IncidentPopupProps {
  incident: any;
  onClose: () => void;
}

const IncidentPopup: React.FC<IncidentPopupProps> = ({ incident, onClose }) => {
  return (
    <div className="absolute top-1/4 left-1/4 z-30 w-72 rounded-lg overflow-hidden bg-black text-white shadow-xl animate-fade-up">
      <div className="bg-black/80 p-4">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold text-red-500">{incident.title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>
        
        {incident.image && (
          <div className="my-3 rounded-md overflow-hidden">
            <img 
              src={incident.image} 
              alt={incident.title} 
              className="w-full h-32 object-cover" 
            />
          </div>
        )}
        
        <div className="space-y-2 mt-3">
          <p className="text-sm font-semibold">{incident.date}</p>
          <p className="text-sm">{incident.address}</p>
          <p className="text-sm text-gray-300 mt-2">{incident.description}</p>
        </div>
        
        <button 
          className="mt-4 bg-gray-800 hover:bg-gray-700 text-xs px-4 py-1 rounded-full float-right"
        >
          MORE
        </button>
        <div className="clear-both"></div>
      </div>
    </div>
  );
};

export default IncidentPopup;
