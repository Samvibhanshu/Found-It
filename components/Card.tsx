import React from 'react';

interface CardProps {
  title: string;
  location: string;
  time: string;
  image: string; 
  locationLabel?: string; // New optional prop for location label
}

const Card: React.FC<CardProps> = ({ title, location, time, image, locationLabel = "Found at" }) => {
  return (
    <div
      className="flex-shrink-0 bg-[#28AFB096] p-4 rounded-lg shadow-md"
      style={{ width: '270px', height: '230px' }} // Fixed card size
    >
      <img
        src={image} // Use the image prop
        alt={title}
        className="rounded-lg"
        style={{ width: '100%', height: '70%', objectFit: 'cover' }} // Fixed image size
      />
      <h5 className="text-[#19647E] text-md m-0 font-semibold">{title}</h5>
      <p className="text-sm">{locationLabel}: {location}</p> {/* Customizable label */}
      <p className="text-sm">Time: {time}</p>
    </div>
  );
};

export default Card;
