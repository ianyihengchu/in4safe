
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
  },
  {
    id: 9,
    title: 'EMERGENCY ALERT',
    content: 'Major traffic accident on Highway 401. Multiple lanes blocked. Expect significant delays for the next 2-3 hours. Alternative routes recommended.',
    views: 12450,
    username: 'TrafficAlert',
    image: '/lovable-uploads/766047d0-d5be-4d4f-b1c6-a2d9491aa398.png'
  },
  {
    id: 10,
    title: 'WEATHER WARNING',
    content: 'Heavy snowfall expected tonight. Accumulation of 15-20cm possible. Reduced visibility and slippery roads. Exercise caution if traveling.',
    views: 8320,
    username: 'WeatherWatch',
    image: '/lovable-uploads/766047d0-d5be-4d4f-b1c6-a2d9491aa398.png'
  },
  {
    id: 11,
    title: 'ROAD CLOSURE',
    content: 'Yonge Street between Bloor and Wellesley closed due to water main break. Repair crews on site. Expected to reopen tomorrow morning.',
    views: 5670,
    username: 'CityUpdates',
    image: '/lovable-uploads/766047d0-d5be-4d4f-b1c6-a2d9491aa398.png'
  },
  {
    id: 12,
    title: 'PUBLIC SAFETY',
    content: 'Reports of suspicious activity near Riverdale Park. Police investigating. Residents advised to be vigilant and report unusual behavior.',
    views: 7890,
    username: 'SafetyAlert',
    image: '/lovable-uploads/766047d0-d5be-4d4f-b1c6-a2d9491aa398.png'
  },
  {
    id: 13,
    title: 'TRANSIT DELAY',
    content: 'Line 1 subway experiencing delays due to signal problems at St. Clair station. Shuttle buses operating. Allow extra time for your commute.',
    views: 9420,
    username: 'TransitUpdates',
    image: '/lovable-uploads/766047d0-d5be-4d4f-b1c6-a2d9491aa398.png'
  },
  {
    id: 14,
    title: 'COMMUNITY EVENT',
    content: 'Annual street festival this weekend on College Street. Road closures in effect Saturday and Sunday. Free admission, family-friendly activities.',
    views: 3560,
    username: 'CommunityHub',
    image: '/lovable-uploads/766047d0-d5be-4d4f-b1c6-a2d9491aa398.png'
  },
  {
    id: 15,
    title: 'POWER OUTAGE',
    content: 'Widespread power outage affecting Scarborough area. Crews working to restore service. Estimated restoration time is 8PM tonight.',
    views: 11230,
    username: 'UtilityAlert',
    image: '/lovable-uploads/766047d0-d5be-4d4f-b1c6-a2d9491aa398.png'
  },
  {
    id: 16,
    title: 'HEALTH ADVISORY',
    content: 'Air quality warning in effect due to nearby forest fires. Those with respiratory conditions advised to limit outdoor activities until conditions improve.',
    views: 6750,
    username: 'HealthDept',
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
