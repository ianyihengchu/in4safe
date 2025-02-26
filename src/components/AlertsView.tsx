
import React from 'react';
import { Eye } from 'lucide-react';

// Sample alerts data
const ALERTS_ITEMS = [
  {
    id: 1,
    title: 'CONTENT TITLE',
    content: 'TEXT MAXIMUN TO 140 words.TEXT MAXIMUN TO 140 words.TEXT MAXIMUN TO 140 words.TEXT MAXIMUN TO 140 words....',
    views: 9100,
    username: 'Username',
    image: '/lovable-uploads/766047d0-d5be-4d4f-b1c6-a2d9491aa398.png'
  },
  {
    id: 2,
    title: 'CONTENT TITLE',
    content: 'TEXT MAXIMUN TO 140 words.TEXT MAXIMUN TO 140 words.TEXT MAXIMUN TO 140 words.TEXT MAXIMUN TO 140 words....',
    views: 9100,
    username: 'Username',
    image: '/lovable-uploads/766047d0-d5be-4d4f-b1c6-a2d9491aa398.png'
  },
  {
    id: 3,
    title: 'CONTENT TITLE',
    content: 'TEXT MAXIMUN TO 140 words.TEXT MAXIMUN TO 140 words.TEXT MAXIMUN TO 140 words.TEXT MAXIMUN TO 140 words....',
    views: 9100,
    username: 'Username',
    image: '/lovable-uploads/766047d0-d5be-4d4f-b1c6-a2d9491aa398.png'
  },
  {
    id: 4,
    title: 'CONTENT TITLE',
    content: 'TEXT MAXIMUN TO 140 words.TEXT MAXIMUN TO 140 words.TEXT MAXIMUN TO 140 words.TEXT MAXIMUN TO 140 words....',
    views: 9100,
    username: 'Username',
    image: '/lovable-uploads/766047d0-d5be-4d4f-b1c6-a2d9491aa398.png'
  },
  {
    id: 5,
    title: 'CONTENT TITLE',
    content: 'TEXT MAXIMUN TO 140 words.TEXT MAXIMUN TO 140 words.TEXT MAXIMUN TO 140 words.TEXT MAXIMUN TO 140 words....',
    views: 9100,
    username: 'Username',
    image: '/lovable-uploads/766047d0-d5be-4d4f-b1c6-a2d9491aa398.png'
  },
  {
    id: 6,
    title: 'CONTENT TITLE',
    content: 'TEXT MAXIMUN TO 140 words.TEXT MAXIMUN TO 140 words.TEXT MAXIMUN TO 140 words.TEXT MAXIMUN TO 140 words....',
    views: 9100,
    username: 'Username',
    image: '/lovable-uploads/766047d0-d5be-4d4f-b1c6-a2d9491aa398.png'
  },
  {
    id: 7,
    title: 'CONTENT TITLE',
    content: 'TEXT MAXIMUN TO 140 words.TEXT MAXIMUN TO 140 words.TEXT MAXIMUN TO 140 words.TEXT MAXIMUN TO 140 words....',
    views: 9100,
    username: 'Username',
    image: '/lovable-uploads/766047d0-d5be-4d4f-b1c6-a2d9491aa398.png'
  },
  {
    id: 8,
    title: 'CONTENT TITLE',
    content: 'TEXT MAXIMUN TO 140 words.TEXT MAXIMUN TO 140 words.TEXT MAXIMUN TO 140 words.TEXT MAXIMUN TO 140 words....',
    views: 9100,
    username: 'Username',
    image: '/lovable-uploads/766047d0-d5be-4d4f-b1c6-a2d9491aa398.png'
  }
];

interface AlertsViewProps {
  className?: string;
}

const AlertsView: React.FC<AlertsViewProps> = ({ className }) => {
  return (
    <div className={`p-4 pb-20 h-full ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {ALERTS_ITEMS.map((item) => (
          <AlertCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

interface AlertCardProps {
  item: {
    id: number;
    title: string;
    content: string;
    views: number;
    username: string;
    image: string;
  };
}

const AlertCard: React.FC<AlertCardProps> = ({ item }) => {
  return (
    <div className="bg-[#222222] rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-52 object-cover bg-gray-300"
        />
        <div className="absolute left-4 top-4 flex items-center gap-2 text-white bg-black/50 px-2 py-1 rounded-md">
          <Eye size={16} />
          <span className="text-sm">{item.views}</span>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center">
            {/* User avatar placeholder */}
          </div>
          <span className="text-sm text-white">{item.username}</span>
        </div>
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-base font-bold mb-2">{item.title}</h3>
        <p className="text-sm text-gray-700 line-clamp-3">{item.content}</p>
      </div>
    </div>
  );
};

export default AlertsView;
