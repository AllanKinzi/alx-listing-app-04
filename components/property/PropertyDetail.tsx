import React from "react";

type Property = {
  id: string;
  name: string;
  description: string;
  location: string;
  price: number;
  imageUrl?: string;
};

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {property.imageUrl && (
        <img
          src={property.imageUrl}
          alt={property.name}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}
      <h1 className="text-2xl font-bold mb-2">{property.name}</h1>
      <p className="text-gray-600 mb-1">{property.location}</p>
      <p className="text-lg text-c-primary font-semibold mb-4">${property.price}/night</p>
      <p>{property.description}</p>
    </div>
  );
}
