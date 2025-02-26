
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
      <div className="relative bg-[#1E1E1E] rounded-[30px] w-full max-w-lg mx-4 shadow-xl animate-fade-up">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6 text-brand-gold">ADD ALERT</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="block text-base font-medium text-white text-center mb-2">Picture</label>
              <div 
                className="relative border border-gray-700 rounded-md h-36 flex items-center justify-center bg-[#2A2A2A] cursor-pointer overflow-hidden"
                onClick={() => document.getElementById('image-upload')?.click()}
              >
                {previewUrl ? (
                  <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <p className="text-brand-gold text-base">Please choose a photo</p>
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
              <label className="block text-base font-medium text-white text-center mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter post title"
                className="w-full bg-[#2A2A2A] border border-gray-700 text-brand-gold rounded-md px-4 py-3 text-base placeholder:text-brand-gold/60"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-base font-medium text-white text-center mb-2">Time</label>
              <input
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="Enter post time"
                className="w-full bg-[#2A2A2A] border border-gray-700 text-brand-gold rounded-md px-4 py-3 text-base placeholder:text-brand-gold/60"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-base font-medium text-white text-center mb-2">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter post location"
                className="w-full bg-[#2A2A2A] border border-gray-700 text-brand-gold rounded-md px-4 py-3 text-base placeholder:text-brand-gold/60"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-base font-medium text-white text-center mb-2">Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Enter category"
                className="w-full bg-[#2A2A2A] border border-gray-700 text-brand-gold rounded-md px-4 py-3 text-base placeholder:text-brand-gold/60"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-base font-medium text-white text-center mb-2">Comments</label>
              <input
                type="text"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Add comments"
                className="w-full bg-[#2A2A2A] border border-gray-700 text-brand-gold rounded-md px-4 py-3 text-base placeholder:text-brand-gold/60"
              />
            </div>

            <div className="flex gap-2 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-[#2A2A2A] text-white border border-gray-700 py-2.5 px-4 rounded-md text-sm font-medium hover:bg-[#3A3A3A] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-brand-gold text-black py-2.5 px-4 rounded-md text-sm font-medium hover:bg-brand-gold-dark transition-colors"
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
