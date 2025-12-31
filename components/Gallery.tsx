
import React from 'react';

const Gallery: React.FC = () => {
  // To use your own photos: 
  // 1. Create a folder named 'images' in your project root.
  // 2. Add 6 photos named photo1.jpg, photo2.jpg, etc.
  // 3. Or simply update the 'src' strings below to match your filenames!
  const photos = [
    { src: 'images/photo1.jpg', caption: 'The start of us ✨', rotation: '-rotate-2' },
    { src: 'images/photo2.jpg', caption: 'My favorite smile', rotation: 'rotate-1' },
    { src: 'images/photo3.jpg', caption: 'That one coffee date', rotation: 'rotate-3' },
    { src: 'images/photo4.jpg', caption: 'Best day ever', rotation: '-rotate-1' },
    { src: 'images/photo5.jpg', caption: 'You look so pretty here', rotation: 'rotate-2' },
    { src: 'images/photo6.jpg', caption: 'To many more in 2026', rotation: '-rotate-3' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
      {photos.map((photo, index) => (
        <div 
          key={index} 
          className={`bg-white p-3 pb-8 polaroid-shadow transition-transform hover:scale-105 duration-300 ${photo.rotation}`}
        >
          <div className="aspect-[4/5] overflow-hidden bg-gray-200 flex items-center justify-center">
            <img 
              src={photo.src} 
              alt={photo.caption} 
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all"
              onError={(e) => {
                // Fallback if image isn't found yet
                const target = e.target as HTMLImageElement;
                target.src = `https://picsum.photos/seed/love${index}/400/500`;
              }}
            />
          </div>
          <p className="mt-4 text-center text-sm italic font-medium text-[#7A4B5F] serif px-2">
            {photo.caption}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
