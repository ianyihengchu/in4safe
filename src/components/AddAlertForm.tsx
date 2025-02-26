
import React, { useState } from 'react';
import InputWithLabel from './ui/input-with-label';

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
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose}></div>
      <div className="relative bg-[#222222] rounded-3xl w-full max-w-3xl p-8 shadow-xl animate-fade-up">
        <h2 className="text-4xl font-bold text-center mb-8 text-brand-gold">ADD ALERT</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white mb-2">Picture</label>
            <div 
              className="relative border border-white/20 rounded-md h-40 flex items-center justify-center bg-[#333333] cursor-pointer overflow-hidden"
              onClick={() => document.getElementById('image-upload')?.click()}
            >
              {previewUrl ? (
                <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <p className="text-brand-gold">Please choose a photo</p>
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

          <div>
            <label className="block text-white mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              className="w-full bg-[#333333] border border-white/20 text-white rounded-md px-4 py-3 placeholder:text-brand-gold/70"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Time</label>
            <input
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Enter post time"
              className="w-full bg-[#333333] border border-white/20 text-white rounded-md px-4 py-3 placeholder:text-brand-gold/70"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter post location"
              className="w-full bg-[#333333] border border-white/20 text-white rounded-md px-4 py-3 placeholder:text-brand-gold/70"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter category"
              className="w-full bg-[#333333] border border-white/20 text-white rounded-md px-4 py-3 placeholder:text-brand-gold/70"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Comments</label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Add comments"
              className="w-full bg-[#333333] border border-white/20 text-white rounded-md px-4 py-3 placeholder:text-brand-gold/70 min-h-[80px]"
            />
          </div>

          <div className="flex gap-4 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-[#444444] text-white py-3 px-4 rounded-md font-medium hover:bg-[#555555] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-brand-gold text-black py-3 px-4 rounded-md font-medium hover:bg-brand-gold/90 transition-colors"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAlertForm;
