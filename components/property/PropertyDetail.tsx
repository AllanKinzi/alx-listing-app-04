import React from "react";
import { Button } from "../ui/button";

type Property = {
  id: string;
  name: string;
  description: string;
  location: string;
  price: number;
  imageUrl?: string;
  tags?: string[];
};

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="p-2 w-[376px] mx-auto">
      {property.imageUrl && (
        <img
          src={property.imageUrl}
          alt={property.name}
          className="w-full h-64 object-cover rounded-lg mb-3"
        />
      )}
      <div className="flex gap-1 mb-2 flex-wrap">
        {property.tags?.map((tag) => (
          <div key={tag} className=" text-xs rounded-full flex items-center flex-wrap gap-2 justify-center">
            <Button variant={"outline_round"} size={"xs"}>{tag}</Button>
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">{property.name}</h1>
          <div>4.7</div>
        </div>
        <p className="text-gray-600 mb-1">{property.location}</p>
      </div>
      <div className="flex justify-between items-center">
        <div>
          Buttons
        </div>
        <div>
          Price
        </div>
      </div>
    </div>
  );
}
