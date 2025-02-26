
import React, { useState } from 'react';

interface AddAlertFormProps {
  onClose: () => void;
  onSubmit: (alertData: any) => void;
}

const AddAlertForm: React.FC<AddAlertFormProps> = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('Emergency Accident');
  const [comments, setComments] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      time,
      location,
      category,
      comments,
      image
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999]">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-[#1A1F2C] rounded-[30px] w-full max-w-lg mx-4 shadow-xl animate-fade-up border border-gray-800">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-left mb-4 text-white">ADD ALERT</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-white text-left">Picture</label>
              <div 
                className="relative border border-gray-700 rounded-md h-32 flex items-center justify-center bg-[#222222] cursor-pointer overflow-hidden"
                onClick={() => document.getElementById('image-upload')?.click()}
              >
                {previewUrl ? (
                  <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <p className="text-gray-400 text-sm">Please choose a photo</p>
                )}
                <input 
                  type="file" 
                  id="image-upload" 
                  className="hidden" 
                  accept="image/*" 
                  onChange={handleImageChange}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-white text-left">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter post title"
                className="w-full bg-[#222222] border border-gray-700 text-white rounded-md px-3 py-2 text-sm placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-white text-left">Time</label>
              <input
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="Enter post time"
                className="w-full bg-[#222222] border border-gray-700 text-white rounded-md px-3 py-2 text-sm placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-white text-left">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter post location"
                className="w-full bg-[#222222] border border-gray-700 text-white rounded-md px-3 py-2 text-sm placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-white text-left">Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Enter category"
                className="w-full bg-[#222222] border border-gray-700 text-white rounded-md px-3 py-2 text-sm placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-white text-left">Comments</label>
              <input
                type="text"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Add comments"
                className="w-full bg-[#222222] border border-gray-700 text-white rounded-md px-3 py-2 text-sm placeholder:text-gray-500"
              />
            </div>

            <div className="flex gap-2 mt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-[#333333] text-white border border-gray-700 py-2 px-4 rounded-md text-sm font-medium hover:bg-[#444444] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-brand-gold text-black py-2 px-4 rounded-md text-sm font-medium hover:bg-brand-gold-dark transition-colors"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAlertForm;
