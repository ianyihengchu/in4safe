
import React from 'react';
import { Eye } from 'lucide-react';

// Sample news data
const NEWS_ITEMS = [
  {
    id: 1,
    title: 'CONTENT TITLE',
    content: 'Lorem ipsum bejut lalogi tranade evsk och dekalig ode i jupp. Replara gybåde megarade, samt treranat. Rere åbåtevis pament, mídede. Por pol till dolig kvaside eftersrom reisligt aliga dände ben har renar pisade. Sahelir hell oaktat bekan post rugen resiba suid i susk. Både är, till trerare bösaburet så blojut decitav fåis krotuliga, tivas. Nyrigen euse segt göskade segon neköligen peliga rens. Negisk treyment i ovis, song. Ultragen vabanade, polyska set.',
    views: 9100,
    timeAgo: '12h ago',
    image: '/lovable-uploads/3d9892c5-ed73-476a-880d-de1ccb38f722.png'
  },
  {
    id: 2,
    title: 'CONTENT TITLE',
    content: 'Lorem ipsum bejut lalogi tranade evsk och dekalig ode i jupp. Replara gybåde megarade, samt treranat. Rere åbåtevis pament, mídede. Por pol till dolig kvaside eftersrom reisligt aliga dände ben har renar pisade. Sahelir hell oaktat bekan post rugen resiba suid i susk. Både är, till trerare bösaburet så blojut decitav fåis krotuliga, tivas. Nyrigen euse segt göskade segon neköligen peliga rens. Negisk treyment i ovis, song. Ultragen vabanade, polyska set.',
    views: 9100,
    timeAgo: '12h ago',
    image: '/lovable-uploads/3d9892c5-ed73-476a-880d-de1ccb38f722.png'
  },
  {
    id: 3,
    title: 'CONTENT TITLE',
    content: 'Lorem ipsum bejut lalogi tranade evsk och dekalig ode i jupp. Replara gybåde megarade, samt treranat. Rere åbåtevis pament, mídede. Por pol till dolig kvaside eftersrom reisligt aliga dände ben har renar pisade. Sahelir hell oaktat bekan post rugen resiba suid i susk. Både är, till trerare bösaburet så blojut decitav fåis krotuliga, tivas. Nyrigen euse segt göskade segon neköligen peliga rens. Negisk treyment i ovis, song. Ultragen vabanade, polyska set.',
    views: 9100,
    timeAgo: '12h ago',
    image: '/lovable-uploads/3d9892c5-ed73-476a-880d-de1ccb38f722.png'
  }
];

interface NewsViewProps {
  className?: string;
}

const NewsView: React.FC<NewsViewProps> = ({ className }) => {
  return (
    <div className={`p-4 pb-20 overflow-y-auto ${className}`}>
      <div className="space-y-4">
        {NEWS_ITEMS.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

interface NewsCardProps {
  item: {
    id: number;
    title: string;
    content: string;
    views: number;
    timeAgo: string;
    image: string;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  return (
    <div className="bg-black rounded-lg overflow-hidden shadow-lg border border-gray-800">
      <div className="relative">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute left-4 bottom-4 flex items-center gap-2 text-white bg-black/50 px-2 py-1 rounded-md">
          <Eye size={16} />
          <span className="text-sm">{item.views}</span>
        </div>
        <div className="absolute right-4 bottom-4 text-white bg-black/50 px-2 py-1 rounded-md">
          <span className="text-sm">{item.timeAgo}</span>
        </div>
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
        <p className="text-sm text-gray-700 line-clamp-4">{item.content}</p>
        <p className="mt-4 text-sm text-gray-500">Süd spesamma sengen ose hurúvida prer günal. Makróveling ongen även om exonde rýdoligt. Gigalig prena, supraheten intrade.</p>
      </div>
    </div>
  );
};

export default NewsView;
