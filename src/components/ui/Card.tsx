import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  className = '',
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      {image && (
        <div className="h-48 w-full relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};
